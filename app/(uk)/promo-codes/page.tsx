import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.promoCodes.title,
  description: dict.promoCodes.metaDescription,
  alternates: getAlternateLinks("/promo-codes"),
  openGraph: {
    title: dict.promoCodes.title,
    description: dict.promoCodes.metaDescription,
    url: `${SITE_URL}/promo-codes`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/covers/promo-codes.png`,
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
        headline={dict.promoCodes.title}
        description={dict.promoCodes.metaDescription}
        url={`${SITE_URL}/promo-codes`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/promo-codes.png`}
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.promoCodes.title,
            url: `${SITE_URL}/promo-codes`,
          },
        ]}
      />
      <LegalPage
        title={dict.promoCodes.title}
        cover={{ src: "/covers/promo-codes.png", alt: dict.promoCodes.title }}
        lastUpdated={dict.promoCodes.lastUpdated}
        sections={dict.promoCodes.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/promo-codes`}
        dict={dict}
        hideDate
      />
    </>
  );
}
