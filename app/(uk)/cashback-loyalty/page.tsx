import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.cashbackLoyalty.title,
  description: dict.cashbackLoyalty.metaDescription,
  alternates: getAlternateLinks("/cashback-loyalty"),
  openGraph: {
    title: dict.cashbackLoyalty.title,
    description: dict.cashbackLoyalty.metaDescription,
    url: `${SITE_URL}/cashback-loyalty`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/covers/cashback-loyalty.png`,
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
        headline={dict.cashbackLoyalty.title}
        description={dict.cashbackLoyalty.metaDescription}
        url={`${SITE_URL}/cashback-loyalty`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/cashback-loyalty.png`}
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.cashbackLoyalty.title,
            url: `${SITE_URL}/cashback-loyalty`,
          },
        ]}
      />
      <LegalPage
        title={dict.cashbackLoyalty.title}
        cover={{ src: "/covers/cashback-loyalty.png", alt: dict.cashbackLoyalty.title }}
        lastUpdated={dict.cashbackLoyalty.lastUpdated}
        sections={dict.cashbackLoyalty.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/cashback-loyalty`}
        dict={dict}
        hideDate
      />
    </>
  );
}
