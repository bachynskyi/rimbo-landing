import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.loyaltyWithoutApp.title,
  description: dict.loyaltyWithoutApp.metaDescription,
  alternates: getAlternateLinks("/loyalty-without-app"),
  openGraph: {
    title: dict.loyaltyWithoutApp.title,
    description: dict.loyaltyWithoutApp.metaDescription,
    url: `${SITE_URL}/loyalty-without-app`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/covers/loyalty-without-app.png`,
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
        headline={dict.loyaltyWithoutApp.title}
        description={dict.loyaltyWithoutApp.metaDescription}
        url={`${SITE_URL}/loyalty-without-app`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/loyalty-without-app.png`}
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.loyaltyWithoutApp.title,
            url: `${SITE_URL}/loyalty-without-app`,
          },
        ]}
      />
      <LegalPage
        title={dict.loyaltyWithoutApp.title}
        cover={{ src: "/covers/loyalty-without-app.png", alt: dict.loyaltyWithoutApp.title }}
        lastUpdated={dict.loyaltyWithoutApp.lastUpdated}
        sections={dict.loyaltyWithoutApp.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/loyalty-without-app`}
        dict={dict}
        hideDate
      />
    </>
  );
}
