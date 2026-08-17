import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const metaDict = getDictionary("en");

export const metadata: Metadata = {
  title: metaDict.stampCards.title,
  description: metaDict.stampCards.metaDescription,
  alternates: getAlternateLinks("/stamp-cards"),
  openGraph: {
    title: metaDict.stampCards.title,
    description: metaDict.stampCards.metaDescription,
    url: `${SITE_URL}/en/stamp-cards`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/covers/stamp-cards.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return (
    <>
      <ArticleSchema
        headline={dict.stampCards.title}
        description={dict.stampCards.metaDescription}
        url={`${SITE_URL}/en/stamp-cards`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/stamp-cards.png`}
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.stampCards.title,
            url: `${SITE_URL}/en/stamp-cards`,
          },
        ]}
      />
      <LegalPage
        title={dict.stampCards.title}
        cover={{ src: "/covers/stamp-cards.png", alt: dict.stampCards.title }}
        lastUpdated={dict.stampCards.lastUpdated}
        sections={dict.stampCards.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}stamp-cards`}
        dict={dict}
        hideDate
      />
    </>
  );
}
