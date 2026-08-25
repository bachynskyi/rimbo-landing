export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.rimbo.com.ua";

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://rimbo.id";

export const SUPPORT_EMAIL =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@rimbo.id";

export const SUPPORT_PHONE =
  process.env.NEXT_PUBLIC_SUPPORT_PHONE || "+380680096060";

export const SUPPORT_PHONE_DISPLAY = "+380 (68) 009 60 60";

export const SITE_NAME = "Rimbo";

export const LOCALE_MAP = {
  uk: "uk_UA",
  en: "en_US",
} as const;

export function getCanonicalUrl(path: string): string {
  const normalized = path === "/" ? "" : path;
  return `${SITE_URL}${normalized}`;
}

export function getAlternateLinks(path: string, locale: "uk" | "en" = "uk") {
  // path is the locale-agnostic path, e.g. "/" or "/privacy"
  const ukPath = path === "/" ? "" : path;
  const enPath = `/en${path === "/" ? "" : path}`;
  return {
    // Canonical must be self-referential per locale, otherwise Google
    // treats /en/* as duplicates of the uk pages and never indexes them.
    canonical: `${SITE_URL}${locale === "en" ? enPath : ukPath}`,
    languages: {
      uk: `${SITE_URL}${ukPath}`,
      en: `${SITE_URL}${enPath}`,
      "x-default": `${SITE_URL}${ukPath}`,
    },
  };
}

export function getLoginUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_LOGIN_URL;
  if (!url) return null;
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}utm_source=landing&utm_medium=web&utm_campaign=header`;
}

export const OG_DEFAULTS = {
  siteName: SITE_NAME,
  type: "website" as const,
  images: [
    {
      url: `${SITE_URL}/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: "Rimbo — Digital Loyalty Platform",
    },
  ],
};
