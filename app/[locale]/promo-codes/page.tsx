import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const metaDict = getDictionary("en");

export const metadata: Metadata = {
  title: metaDict.promoCodes.title,
  description: metaDict.promoCodes.metaDescription,
  alternates: getAlternateLinks("/promo-codes"),
  openGraph: {
    title: metaDict.promoCodes.title,
    description: metaDict.promoCodes.metaDescription,
    url: `${SITE_URL}/en/promo-codes`,
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
        headline={dict.promoCodes.title}
        description={dict.promoCodes.metaDescription}
        url={`${SITE_URL}/en/promo-codes`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/promo-codes.png`}
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.promoCodes.title,
            url: `${SITE_URL}/en/promo-codes`,
          },
        ]}
      />
      <LegalPage
        title={dict.promoCodes.title}
        cover={{ src: "/covers/promo-codes.png", alt: dict.promoCodes.title }}
        lastUpdated={dict.promoCodes.lastUpdated}
        sections={dict.promoCodes.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}promo-codes`}
        dict={dict}
        hideDate
      />
    </>
  );
}
