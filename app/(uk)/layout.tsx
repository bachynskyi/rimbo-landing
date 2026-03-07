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

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Цифрова платформа лояльності`,
    template: `%s | ${SITE_NAME}`,
  },
  description: dict.hero.subtitle,
  manifest: "/manifest.json",
  metadataBase: new URL(SITE_URL),
  alternates: getAlternateLinks("/"),
  openGraph: {
    ...OG_DEFAULTS,
    title: `${SITE_NAME} — Цифрова платформа лояльності`,
    description: dict.hero.subtitle,
    url: SITE_URL,
    locale: LOCALE_MAP.uk,
    alternateLocale: LOCALE_MAP.en,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Цифрова платформа лояльності`,
    description: dict.hero.subtitle,
    images: OG_DEFAULTS.images,
  },
};

export default function UkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BaseLayout lang="uk">{children}</BaseLayout>;
}
