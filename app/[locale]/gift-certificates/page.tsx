import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const metaDict = getDictionary("en");

export const metadata: Metadata = {
  title: metaDict.giftCertificates.title,
  description: metaDict.giftCertificates.metaDescription,
  alternates: getAlternateLinks("/gift-certificates"),
  openGraph: {
    title: metaDict.giftCertificates.title,
    description: metaDict.giftCertificates.metaDescription,
    url: `${SITE_URL}/en/gift-certificates`,
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

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return (
    <>
      <ArticleSchema
        headline={dict.giftCertificates.title}
        description={dict.giftCertificates.metaDescription}
        url={`${SITE_URL}/en/gift-certificates`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/gift-certificates.png`}
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.giftCertificates.title,
            url: `${SITE_URL}/en/gift-certificates`,
          },
        ]}
      />
      <LegalPage
        title={dict.giftCertificates.title}
        cover={{ src: "/covers/gift-certificates.png", alt: dict.giftCertificates.title }}
        lastUpdated={dict.giftCertificates.lastUpdated}
        sections={dict.giftCertificates.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}gift-certificates`}
        dict={dict}
        hideDate
      />
    </>
  );
}
