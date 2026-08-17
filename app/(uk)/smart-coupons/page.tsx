import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.smartCoupons.title,
  description: dict.smartCoupons.metaDescription,
  alternates: getAlternateLinks("/smart-coupons"),
  openGraph: {
    title: dict.smartCoupons.title,
    description: dict.smartCoupons.metaDescription,
    url: `${SITE_URL}/smart-coupons`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/covers/smart-coupons.png`,
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
        headline={dict.smartCoupons.title}
        description={dict.smartCoupons.metaDescription}
        url={`${SITE_URL}/smart-coupons`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/smart-coupons.png`}
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.smartCoupons.title,
            url: `${SITE_URL}/smart-coupons`,
          },
        ]}
      />
      <LegalPage
        title={dict.smartCoupons.title}
        cover={{ src: "/covers/smart-coupons.png", alt: dict.smartCoupons.title }}
        lastUpdated={dict.smartCoupons.lastUpdated}
        sections={dict.smartCoupons.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/smart-coupons`}
        dict={dict}
        hideDate
      />
    </>
  );
}
