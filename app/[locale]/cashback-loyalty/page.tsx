import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const metaDict = getDictionary("en");

export const metadata: Metadata = {
  title: metaDict.cashbackLoyalty.title,
  description: metaDict.cashbackLoyalty.metaDescription,
  alternates: getAlternateLinks("/cashback-loyalty"),
  openGraph: {
    title: metaDict.cashbackLoyalty.title,
    description: metaDict.cashbackLoyalty.metaDescription,
    url: `${SITE_URL}/en/cashback-loyalty`,
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
        headline={dict.cashbackLoyalty.title}
        description={dict.cashbackLoyalty.metaDescription}
        url={`${SITE_URL}/en/cashback-loyalty`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/cashback-loyalty.png`}
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.cashbackLoyalty.title,
            url: `${SITE_URL}/en/cashback-loyalty`,
          },
        ]}
      />
      <LegalPage
        title={dict.cashbackLoyalty.title}
        cover={{ src: "/covers/cashback-loyalty.png", alt: dict.cashbackLoyalty.title }}
        lastUpdated={dict.cashbackLoyalty.lastUpdated}
        sections={dict.cashbackLoyalty.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}cashback-loyalty`}
        dict={dict}
        hideDate
      />
    </>
  );
}
