import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.qrLoyalty.title,
  description: dict.qrLoyalty.metaDescription,
  alternates: getAlternateLinks("/qr-loyalty"),
  openGraph: {
    title: dict.qrLoyalty.title,
    description: dict.qrLoyalty.metaDescription,
    url: `${SITE_URL}/qr-loyalty`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/covers/qr-loyalty.png`,
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
        headline={dict.qrLoyalty.title}
        description={dict.qrLoyalty.metaDescription}
        url={`${SITE_URL}/qr-loyalty`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/qr-loyalty.png`}
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.qrLoyalty.title,
            url: `${SITE_URL}/qr-loyalty`,
          },
        ]}
      />
      <LegalPage
        title={dict.qrLoyalty.title}
        cover={{ src: "/covers/qr-loyalty.png", alt: dict.qrLoyalty.title }}
        lastUpdated={dict.qrLoyalty.lastUpdated}
        sections={dict.qrLoyalty.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/qr-loyalty`}
        dict={dict}
        hideDate
      />
    </>
  );
}
