export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://rimbo.com.ua";

export const SITE_NAME = "Rimbo";

export const LOCALE_MAP = {
  uk: "uk_UA",
  en: "en_US",
} as const;

export function getCanonicalUrl(path: string): string {
  const normalized = path === "/" ? "" : path;
  return `${SITE_URL}${normalized}`;
}

export function getAlternateLinks(path: string) {
  // path is the locale-agnostic path, e.g. "/" or "/privacy"
  const ukPath = path === "/" ? "" : path;
  const enPath = `/en${path === "/" ? "" : path}`;
  return {
    canonical: `${SITE_URL}${ukPath}`,
    languages: {
      uk: `${SITE_URL}${ukPath}`,
      en: `${SITE_URL}${enPath}`,
      "x-default": `${SITE_URL}${ukPath}`,
    },
  };
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
