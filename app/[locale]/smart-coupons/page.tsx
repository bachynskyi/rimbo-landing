import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const metaDict = getDictionary("en");

export const metadata: Metadata = {
  title: metaDict.smartCoupons.title,
  description: metaDict.smartCoupons.metaDescription,
  alternates: getAlternateLinks("/smart-coupons"),
  openGraph: {
    title: metaDict.smartCoupons.title,
    description: metaDict.smartCoupons.metaDescription,
    url: `${SITE_URL}/en/smart-coupons`,
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
        headline={dict.smartCoupons.title}
        description={dict.smartCoupons.metaDescription}
        url={`${SITE_URL}/en/smart-coupons`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/smart-coupons.png`}
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.smartCoupons.title,
            url: `${SITE_URL}/en/smart-coupons`,
          },
        ]}
      />
      <LegalPage
        title={dict.smartCoupons.title}
        cover={{ src: "/covers/smart-coupons.png", alt: dict.smartCoupons.title }}
        lastUpdated={dict.smartCoupons.lastUpdated}
        sections={dict.smartCoupons.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}smart-coupons`}
        dict={dict}
        hideDate
      />
    </>
  );
}
