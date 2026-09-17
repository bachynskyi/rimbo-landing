import { NextRequest, NextResponse } from "next/server";

// Країна відвідувача за IP. Заголовок проставляє хостинг на краю мережі:
// Vercel — x-vercel-ip-country, Cloudflare (якщо колись стане перед ним) —
// cf-ipcountry. Свого гео-визначення тут немає, IP ми не зберігаємо й нікуди
// не передаємо.
//
// Окремий роут, а не читання заголовків під час рендеру сторінки: сторінки
// пререндерені й лежать у CDN-кеші (X-Vercel-Cache: HIT), а звернення до
// заголовків зробило б їх динамічними й вимкнуло кеш.
export const dynamic = "force-dynamic";

export function GET(req: NextRequest) {
  const header =
    req.headers.get("x-vercel-ip-country") ?? req.headers.get("cf-ipcountry");

  // "XX" Cloudflare віддає, коли країну визначити не вдалося; локально
  // заголовка немає взагалі — в обох випадках клієнт лишається на визначенні
  // за часовим поясом.
  const country =
    header && header !== "XX" && header !== "T1" ? header.toUpperCase() : null;

  return NextResponse.json(
    { country },
    { headers: { "cache-control": "no-store" } }
  );
}
