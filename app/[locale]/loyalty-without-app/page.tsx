import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const metaDict = getDictionary("en");

export const metadata: Metadata = {
  title: metaDict.loyaltyWithoutApp.title,
  description: metaDict.loyaltyWithoutApp.metaDescription,
  alternates: getAlternateLinks("/loyalty-without-app"),
  openGraph: {
    title: metaDict.loyaltyWithoutApp.title,
    description: metaDict.loyaltyWithoutApp.metaDescription,
    url: `${SITE_URL}/en/loyalty-without-app`,
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
        headline={dict.loyaltyWithoutApp.title}
        description={dict.loyaltyWithoutApp.metaDescription}
        url={`${SITE_URL}/en/loyalty-without-app`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/loyalty-without-app.png`}
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.loyaltyWithoutApp.title,
            url: `${SITE_URL}/en/loyalty-without-app`,
          },
        ]}
      />
      <LegalPage
        title={dict.loyaltyWithoutApp.title}
        cover={{ src: "/covers/loyalty-without-app.png", alt: dict.loyaltyWithoutApp.title }}
        lastUpdated={dict.loyaltyWithoutApp.lastUpdated}
        sections={dict.loyaltyWithoutApp.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}loyalty-without-app`}
        dict={dict}
        hideDate
      />
    </>
  );
}
