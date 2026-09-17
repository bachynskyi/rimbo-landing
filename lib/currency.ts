// Мультивалютний прайс.
//
// ЄДИНЕ джерело цін тарифів для всіх валют. Ціни в кожній валюті — локальні
// (не конвертація з гривні), тому правити їх треба саме тут, по рядку валюти.
//
// ВИНЯТОК: public/llms.txt — статичний файл, він не може імпортувати ці
// константи, тому ціни там продубльовані вручну. Змінюючи прайс тут,
// оновіть і його (розділ "## Pricing").

export const CURRENCY_CODES = [
  "EUR",
  "PLN",
  "CZK",
  "RON",
  "SEK",
  "GBP",
  "USD",
  "UAH",
] as const;

export type CurrencyCode = (typeof CURRENCY_CODES)[number];

export type PlanKey = "growth" | "pro" | "business";

type CurrencyMeta = {
  symbol: string;
  // Символ перед числом (₴799, €19) чи після (79 zł, 499 Kč).
  symbolBefore: boolean;
  // Локаль лише для розрядів: "uk-UA" дає "1 399", "en-US" — "1,399".
  // Явно, бо інакше роздільник візьметься з локалі браузера й серверний
  // рендер розійдеться з клієнтським — це ламає гідратацію.
  groupingLocale: string;
};

export const CURRENCIES: Record<CurrencyCode, CurrencyMeta> = {
  EUR: { symbol: "€", symbolBefore: true, groupingLocale: "en-US" },
  PLN: { symbol: "zł", symbolBefore: false, groupingLocale: "pl-PL" },
  CZK: { symbol: "Kč", symbolBefore: false, groupingLocale: "cs-CZ" },
  RON: { symbol: "lei", symbolBefore: false, groupingLocale: "ro-RO" },
  SEK: { symbol: "kr", symbolBefore: false, groupingLocale: "sv-SE" },
  GBP: { symbol: "£", symbolBefore: true, groupingLocale: "en-GB" },
  USD: { symbol: "$", symbolBefore: true, groupingLocale: "en-US" },
  UAH: { symbol: "₴", symbolBefore: true, groupingLocale: "uk-UA" },
};

// Ціна тарифу за місяць: monthly — при щомісячній оплаті,
// annual — за місяць при річній оплаті.
export const PLAN_PRICES_BY_CURRENCY: Record<
  CurrencyCode,
  Record<PlanKey, { monthly: number; annual: number }>
> = {
  EUR: {
    growth: { monthly: 19, annual: 16 },
    pro: { monthly: 39, annual: 33 },
    business: { monthly: 69, annual: 59 },
  },
  PLN: {
    growth: { monthly: 79, annual: 69 },
    pro: { monthly: 149, annual: 129 },
    business: { monthly: 279, annual: 239 },
  },
  CZK: {
    growth: { monthly: 499, annual: 429 },
    pro: { monthly: 999, annual: 849 },
    business: { monthly: 1799, annual: 1529 },
  },
  RON: {
    growth: { monthly: 89, annual: 79 },
    pro: { monthly: 179, annual: 149 },
    business: { monthly: 329, annual: 279 },
  },
  SEK: {
    growth: { monthly: 249, annual: 209 },
    pro: { monthly: 499, annual: 429 },
    business: { monthly: 899, annual: 769 },
  },
  GBP: {
    growth: { monthly: 16, annual: 14 },
    pro: { monthly: 35, annual: 29 },
    business: { monthly: 59, annual: 49 },
  },
  USD: {
    growth: { monthly: 21, annual: 18 },
    pro: { monthly: 45, annual: 39 },
    business: { monthly: 79, annual: 69 },
  },
  UAH: {
    growth: { monthly: 799, annual: 699 },
    pro: { monthly: 1399, annual: 1199 },
    business: { monthly: 1999, annual: 1699 },
  },
};

// Ціна додаткової точки продажу за місяць. Однакова для місячної та річної
// оплати: річна знижка — поступка на тарифі, а не на додатковій послузі.
export const EXTRA_LOCATION_BY_CURRENCY: Record<
  CurrencyCode,
  Record<PlanKey, number>
> = {
  EUR: { growth: 9, pro: 15, business: 19 },
  PLN: { growth: 39, pro: 59, business: 79 },
  CZK: { growth: 229, pro: 379, business: 499 },
  RON: { growth: 45, pro: 69, business: 89 },
  SEK: { growth: 119, pro: 199, business: 249 },
  GBP: { growth: 8, pro: 13, business: 17 },
  USD: { growth: 10, pro: 16, business: 21 },
  UAH: { growth: 299, pro: 499, business: 699 },
};

// Валюта, з якою сторінка рендериться на сервері, доки клієнт не визначив
// свою. Вона ж іде у schema.org розмітку, яка не може залежати від відвідувача.
const DEFAULT_CURRENCY: Record<string, CurrencyCode> = {
  uk: "UAH",
  en: "EUR",
};

export function defaultCurrencyFor(locale: string): CurrencyCode {
  return DEFAULT_CURRENCY[locale] ?? "EUR";
}

export function formatPrice(amount: number, code: CurrencyCode): string {
  const meta = CURRENCIES[code];
  const number = amount.toLocaleString(meta.groupingLocale);
  // Нерозривний пробіл перед суфіксом, щоб "79 zł" не розривалося по рядках.
  return meta.symbolBefore
    ? `${meta.symbol}${number}`
    : `${number} ${meta.symbol}`;
}

// ── Визначення країни → валюти ────────────────────────────────────────────
//
// Країни, для яких у прайсі є їхня власна валюта, отримують її. Решта Європи
// отримує EUR (литовець бачить EUR, бо його валюта — євро; данець бачить EUR,
// бо крони в прайсі немає). Усе поза Європою — USD.
//
// RU та BY свідомо відсутні: не цільові ринки, тому падають у USD.
const CURRENCY_BY_COUNTRY: Record<string, CurrencyCode> = {
  UA: "UAH",
  PL: "PLN",
  CZ: "CZK",
  RO: "RON",
  SE: "SEK",

  // Фунт: Велика Британія, коронні володіння та Гібралтар
  GB: "GBP",
  GG: "GBP",
  JE: "GBP",
  IM: "GBP",
  GI: "GBP",

  // Єврозона (BG приєдналася 01.01.2026)
  AD: "EUR",
  AT: "EUR",
  BE: "EUR",
  BG: "EUR",
  CY: "EUR",
  DE: "EUR",
  EE: "EUR",
  ES: "EUR",
  FI: "EUR",
  FR: "EUR",
  GR: "EUR",
  HR: "EUR",
  IE: "EUR",
  IT: "EUR",
  LT: "EUR",
  LU: "EUR",
  LV: "EUR",
  MC: "EUR",
  ME: "EUR",
  MT: "EUR",
  NL: "EUR",
  PT: "EUR",
  SI: "EUR",
  SK: "EUR",
  SM: "EUR",
  VA: "EUR",
  XK: "EUR",

  // Решта Європи — своєї валюти в прайсі немає, тому регіональна
  AL: "EUR",
  AX: "EUR",
  BA: "EUR",
  CH: "EUR",
  DK: "EUR",
  FO: "EUR",
  GE: "EUR",
  HU: "EUR",
  IS: "EUR",
  LI: "EUR",
  MD: "EUR",
  MK: "EUR",
  NO: "EUR",
  RS: "EUR",
  SJ: "EUR",
  TR: "EUR",
};

export function currencyForCountry(country: string): CurrencyCode {
  return CURRENCY_BY_COUNTRY[country.toUpperCase()] ?? "USD";
}

const STORAGE_KEY = "rimbo-currency";

function readStoredCurrency(): CurrencyCode | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored && (CURRENCY_CODES as readonly string[]).includes(stored)
      ? (stored as CurrencyCode)
      : null;
  } catch {
    return null;
  }
}

export function storeCurrency(code: CurrencyCode) {
  try {
    localStorage.setItem(STORAGE_KEY, code);
  } catch {
    // приватний режим або заблоковане сховище — вибір просто не переживе сесію
  }
}

// Країну визначає Vercel за IP запиту й віддає її через /api/geo. Свого
// визначення (часовий пояс, мова браузера) не тримаємо: воно живе в пристрої,
// а тому бреше за VPN і проксі — відвідувач із французьким VPN, але київським
// годинником, побачив би гривню.
//
// Вибір користувача головніший: раз перемкнув — бачить своє.
//
// Повертає збережений вибір одразу (без мережі), інакше країну від Vercel.
// null означає "лишити валюту за замовчуванням для локалі": країни немає —
// локальна розробка або невідомий IP.
export async function detectCurrency(): Promise<CurrencyCode | null> {
  const stored = readStoredCurrency();
  if (stored) return stored;

  let country: string | null = null;
  try {
    const res = await fetch("/api/geo", { cache: "no-store" });
    if (!res.ok) return null;
    const data: unknown = await res.json();
    const value = (data as { country?: unknown }).country;
    country = typeof value === "string" && value ? value : null;
  } catch {
    return null;
  }
  if (!country) return null;

  // Поки летів запит, користувач міг обрати валюту вручну — не перебиваємо.
  if (readStoredCurrency()) return null;

  return currencyForCountry(country);
}
