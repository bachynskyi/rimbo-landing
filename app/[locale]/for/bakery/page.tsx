import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const metaDict = getDictionary("en");

export const metadata: Metadata = {
  title: metaDict.forBakery.title,
  description: metaDict.forBakery.metaDescription,
  alternates: getAlternateLinks("/for/bakery"),
  openGraph: {
    title: metaDict.forBakery.title,
    description: metaDict.forBakery.metaDescription,
    url: `${SITE_URL}/en/for/bakery`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/covers/for-bakery.png`,
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
        headline={dict.forBakery.title}
        description={dict.forBakery.metaDescription}
        url={`${SITE_URL}/en/for/bakery`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/for-bakery.png`}
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.forBakery.title,
            url: `${SITE_URL}/en/for/bakery`,
          },
        ]}
      />
      <LegalPage
        title={dict.forBakery.title}
        cover={{ src: "/covers/for-bakery.png", alt: dict.forBakery.title }}
        lastUpdated={dict.forBakery.lastUpdated}
        sections={dict.forBakery.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}for/bakery`}
        dict={dict}
        hideDate
      />
    </>
  );
}
