import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.digitalLoyaltyCards.title,
  description: dict.digitalLoyaltyCards.metaDescription,
  alternates: getAlternateLinks("/digital-loyalty-cards"),
  openGraph: {
    title: dict.digitalLoyaltyCards.title,
    description: dict.digitalLoyaltyCards.metaDescription,
    url: `${SITE_URL}/digital-loyalty-cards`,
    siteName: SITE_NAME,
    type: "article",
  },
};

export default function DigitalLoyaltyCardsPage() {
  return (
    <>
      <ArticleSchema
        headline={dict.digitalLoyaltyCards.title}
        description={dict.digitalLoyaltyCards.metaDescription}
        url={`${SITE_URL}/digital-loyalty-cards`}
        datePublished="2026-04-09"
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.digitalLoyaltyCards.title,
            url: `${SITE_URL}/digital-loyalty-cards`,
          },
        ]}
      />
      <LegalPage
        title={dict.digitalLoyaltyCards.title}
        lastUpdated={dict.digitalLoyaltyCards.lastUpdated}
        sections={dict.digitalLoyaltyCards.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/digital-loyalty-cards`}
        dict={dict}
        hideDate
      />
    </>
  );
}
