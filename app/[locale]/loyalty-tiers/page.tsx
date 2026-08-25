import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const metaDict = getDictionary("en");

export const metadata: Metadata = {
  title: metaDict.loyaltyTiers.title,
  description: metaDict.loyaltyTiers.metaDescription,
  alternates: getAlternateLinks("/loyalty-tiers", "en"),
  openGraph: {
    title: metaDict.loyaltyTiers.title,
    description: metaDict.loyaltyTiers.metaDescription,
    url: `${SITE_URL}/en/loyalty-tiers`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/covers/loyalty-tiers.png`,
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
        headline={dict.loyaltyTiers.title}
        description={dict.loyaltyTiers.metaDescription}
        url={`${SITE_URL}/en/loyalty-tiers`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/loyalty-tiers.png`}
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.loyaltyTiers.title,
            url: `${SITE_URL}/en/loyalty-tiers`,
          },
        ]}
      />
      <LegalPage
        title={dict.loyaltyTiers.title}
        cover={{ src: "/covers/loyalty-tiers.png", alt: dict.loyaltyTiers.title }}
        lastUpdated={dict.loyaltyTiers.lastUpdated}
        sections={dict.loyaltyTiers.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}loyalty-tiers`}
        dict={dict}
        hideDate
      />
    </>
  );
}
