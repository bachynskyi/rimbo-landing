import type { Metadata } from "next";
import { BaseLayout } from "@/components/base-layout";
import {
  SITE_URL,
  SITE_NAME,
  OG_DEFAULTS,
  getAlternateLinks,
  LOCALE_MAP,
} from "@/lib/seo-config";
import { getDictionary } from "@/lib/dictionaries";
import "../globals.css";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Digital Loyalty Platform`,
    template: `%s | ${SITE_NAME}`,
  },
  description: dict.hero.subtitle,
  manifest: "/manifest.json",
  metadataBase: new URL(SITE_URL),
  alternates: getAlternateLinks("/"),
  openGraph: {
    ...OG_DEFAULTS,
    title: `${SITE_NAME} — Digital Loyalty Platform`,
    description: dict.hero.subtitle,
    url: `${SITE_URL}/en`,
    locale: LOCALE_MAP.en,
    alternateLocale: LOCALE_MAP.uk,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Digital Loyalty Platform`,
    description: dict.hero.subtitle,
    images: OG_DEFAULTS.images,
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return <BaseLayout lang="en">{children}</BaseLayout>;
}
