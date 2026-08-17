import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.loyaltyTiers.title,
  description: dict.loyaltyTiers.metaDescription,
  alternates: getAlternateLinks("/loyalty-tiers"),
  openGraph: {
    title: dict.loyaltyTiers.title,
    description: dict.loyaltyTiers.metaDescription,
    url: `${SITE_URL}/loyalty-tiers`,
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

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline={dict.loyaltyTiers.title}
        description={dict.loyaltyTiers.metaDescription}
        url={`${SITE_URL}/loyalty-tiers`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/loyalty-tiers.png`}
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.loyaltyTiers.title,
            url: `${SITE_URL}/loyalty-tiers`,
          },
        ]}
      />
      <LegalPage
        title={dict.loyaltyTiers.title}
        cover={{ src: "/covers/loyalty-tiers.png", alt: dict.loyaltyTiers.title }}
        lastUpdated={dict.loyaltyTiers.lastUpdated}
        sections={dict.loyaltyTiers.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/loyalty-tiers`}
        dict={dict}
        hideDate
      />
    </>
  );
}
