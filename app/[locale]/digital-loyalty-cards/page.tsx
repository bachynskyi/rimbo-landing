import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.digitalLoyaltyCards.title,
  description: dict.digitalLoyaltyCards.metaDescription,
  alternates: getAlternateLinks("/digital-loyalty-cards"),
  openGraph: {
    title: dict.digitalLoyaltyCards.title,
    description: dict.digitalLoyaltyCards.metaDescription,
    url: `${SITE_URL}/en/digital-loyalty-cards`,
    siteName: SITE_NAME,
    type: "article",
  },
};

export default async function DigitalLoyaltyCardsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return (
    <>
      <ArticleSchema
        headline={dict.digitalLoyaltyCards.title}
        description={dict.digitalLoyaltyCards.metaDescription}
        url={`${SITE_URL}/en/digital-loyalty-cards`}
        datePublished="2026-04-09"
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.digitalLoyaltyCards.title,
            url: `${SITE_URL}/en/digital-loyalty-cards`,
          },
        ]}
      />
      <LegalPage
        title={dict.digitalLoyaltyCards.title}
        lastUpdated={dict.digitalLoyaltyCards.lastUpdated}
        sections={dict.digitalLoyaltyCards.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}digital-loyalty-cards`}
        dict={dict}
        hideDate
      />
    </>
  );
}
