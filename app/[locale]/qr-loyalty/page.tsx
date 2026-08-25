import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const metaDict = getDictionary("en");

export const metadata: Metadata = {
  title: metaDict.qrLoyalty.title,
  description: metaDict.qrLoyalty.metaDescription,
  alternates: getAlternateLinks("/qr-loyalty", "en"),
  openGraph: {
    title: metaDict.qrLoyalty.title,
    description: metaDict.qrLoyalty.metaDescription,
    url: `${SITE_URL}/en/qr-loyalty`,
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
        headline={dict.qrLoyalty.title}
        description={dict.qrLoyalty.metaDescription}
        url={`${SITE_URL}/en/qr-loyalty`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/qr-loyalty.png`}
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.qrLoyalty.title,
            url: `${SITE_URL}/en/qr-loyalty`,
          },
        ]}
      />
      <LegalPage
        title={dict.qrLoyalty.title}
        cover={{ src: "/covers/qr-loyalty.png", alt: dict.qrLoyalty.title }}
        lastUpdated={dict.qrLoyalty.lastUpdated}
        sections={dict.qrLoyalty.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}qr-loyalty`}
        dict={dict}
        hideDate
      />
    </>
  );
}
