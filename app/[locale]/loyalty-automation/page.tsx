import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.loyaltyAutomation.title,
  description: dict.loyaltyAutomation.metaDescription,
  alternates: getAlternateLinks("/loyalty-automation"),
  openGraph: {
    title: dict.loyaltyAutomation.title,
    description: dict.loyaltyAutomation.metaDescription,
    url: `${SITE_URL}/en/loyalty-automation`,
    siteName: SITE_NAME,
    type: "article",
  },
};

export default async function LoyaltyAutomationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return (
    <>
      <ArticleSchema
        headline={dict.loyaltyAutomation.title}
        description={dict.loyaltyAutomation.metaDescription}
        url={`${SITE_URL}/en/loyalty-automation`}
        datePublished="2026-04-09"
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.loyaltyAutomation.title,
            url: `${SITE_URL}/en/loyalty-automation`,
          },
        ]}
      />
      <LegalPage
        title={dict.loyaltyAutomation.title}
        lastUpdated={dict.loyaltyAutomation.lastUpdated}
        sections={dict.loyaltyAutomation.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}loyalty-automation`}
        dict={dict}
        hideDate
      />
    </>
  );
}
