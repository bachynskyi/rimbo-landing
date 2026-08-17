import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.giftCertificates.title,
  description: dict.giftCertificates.metaDescription,
  alternates: getAlternateLinks("/gift-certificates"),
  openGraph: {
    title: dict.giftCertificates.title,
    description: dict.giftCertificates.metaDescription,
    url: `${SITE_URL}/gift-certificates`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/covers/gift-certificates.png`,
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
        headline={dict.giftCertificates.title}
        description={dict.giftCertificates.metaDescription}
        url={`${SITE_URL}/gift-certificates`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/gift-certificates.png`}
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.giftCertificates.title,
            url: `${SITE_URL}/gift-certificates`,
          },
        ]}
      />
      <LegalPage
        title={dict.giftCertificates.title}
        cover={{ src: "/covers/gift-certificates.png", alt: dict.giftCertificates.title }}
        lastUpdated={dict.giftCertificates.lastUpdated}
        sections={dict.giftCertificates.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/gift-certificates`}
        dict={dict}
        hideDate
      />
    </>
  );
}
