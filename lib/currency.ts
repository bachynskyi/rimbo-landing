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
    growth: { monthly: 19, annual: 16 },
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

// Часовий пояс → країна. Перелічені лише європейські зони: усе, чого тут
// немає, — не Європа, а отже USD. Включно зі старими назвами (Europe/Kiev,
// Europe/Uzhgorod), які досі віддає частина систем.
const COUNTRY_BY_TIMEZONE: Record<string, string> = {
  "Europe/Amsterdam": "NL",
  "Europe/Andorra": "AD",
  "Europe/Athens": "GR",
  "Europe/Belfast": "GB",
  "Europe/Belgrade": "RS",
  "Europe/Berlin": "DE",
  "Europe/Bratislava": "SK",
  "Europe/Brussels": "BE",
  "Europe/Bucharest": "RO",
  "Europe/Budapest": "HU",
  "Europe/Busingen": "DE",
  "Europe/Chisinau": "MD",
  "Europe/Copenhagen": "DK",
  "Europe/Dublin": "IE",
  "Europe/Gibraltar": "GI",
  "Europe/Guernsey": "GG",
  "Europe/Helsinki": "FI",
  "Europe/Isle_of_Man": "IM",
  "Europe/Istanbul": "TR",
  "Europe/Jersey": "JE",
  "Europe/Kiev": "UA",
  "Europe/Kyiv": "UA",
  "Europe/Lisbon": "PT",
  "Europe/Ljubljana": "SI",
  "Europe/London": "GB",
  "Europe/Luxembourg": "LU",
  "Europe/Madrid": "ES",
  "Europe/Malta": "MT",
  "Europe/Mariehamn": "AX",
  "Europe/Monaco": "MC",
  "Europe/Nicosia": "CY",
  "Europe/Oslo": "NO",
  "Europe/Paris": "FR",
  "Europe/Podgorica": "ME",
  "Europe/Prague": "CZ",
  "Europe/Riga": "LV",
  "Europe/Rome": "IT",
  "Europe/San_Marino": "SM",
  "Europe/Sarajevo": "BA",
  "Europe/Simferopol": "UA",
  "Europe/Skopje": "MK",
  "Europe/Sofia": "BG",
  "Europe/Stockholm": "SE",
  "Europe/Tallinn": "EE",
  "Europe/Tirane": "AL",
  "Europe/Uzhgorod": "UA",
  "Europe/Vaduz": "LI",
  "Europe/Vatican": "VA",
  "Europe/Vienna": "AT",
  "Europe/Vilnius": "LT",
  "Europe/Warsaw": "PL",
  "Europe/Zagreb": "HR",
  "Europe/Zaporozhye": "UA",
  "Europe/Zurich": "CH",
  "Atlantic/Azores": "PT",
  "Atlantic/Canary": "ES",
  "Atlantic/Faroe": "FO",
  "Atlantic/Madeira": "PT",
  "Atlantic/Reykjavik": "IS",
  "Arctic/Longyearbyen": "SJ",
  "Asia/Famagusta": "CY",
  "Asia/Nicosia": "CY",
  "Asia/Tbilisi": "GE",
  "Africa/Ceuta": "ES",
};

// Часовий пояс, а не IP: працює офлайн, без запиту до стороннього гео-сервісу
// (а отже без обробки IP як персональних даних) і без затримки на відповідь.
// У Європі поділ "одна країна — одна зона" майже точний.
function resolvedTimeZone(): string | null {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || null;
  } catch {
    return null;
  }
}

// Запасний варіант: регіон з мови браузера ("pl-PL" → PL). Ненадійний — мова
// інтерфейсу не збігається з країною (українець у США має uk-UA і побачив би
// гривню), — тому вмикається лише коли часового поясу немає взагалі.
function countryFromLanguage(): string | null {
  try {
    const tag = typeof navigator !== "undefined" ? navigator.language : "";
    if (!tag) return null;
    return new Intl.Locale(tag).region ?? null;
  } catch {
    return null;
  }
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

// Вибір користувача важливіший за автовизначення: раз перемкнув — бачить своє.
export function detectCurrency(fallback: CurrencyCode): CurrencyCode {
  const stored = readStoredCurrency();
  if (stored) return stored;

  // Часовий пояс віддає відповідь у будь-якому разі: або країну з таблиці, або
  // (якщо зони в таблиці немає) висновок "це не Європа", тобто USD. Саме тому
  // тут не можна падати на мову — вона б перебила правильний USD гривнею для
  // українця в Нью-Йорку.
  const timeZone = resolvedTimeZone();
  if (timeZone) {
    const country = COUNTRY_BY_TIMEZONE[timeZone];
    return country ? currencyForCountry(country) : "USD";
  }

  // Часового поясу немає — випадок рідкісний, тут уже будь-яка підказка краща
  // за нічого.
  const country = countryFromLanguage();
  return country ? currencyForCountry(country) : fallback;
}
