import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const metaDict = getDictionary("en");

export const metadata: Metadata = {
  title: metaDict.forCoffeeShop.title,
  description: metaDict.forCoffeeShop.metaDescription,
  alternates: getAlternateLinks("/for/coffee-shop"),
  openGraph: {
    title: metaDict.forCoffeeShop.title,
    description: metaDict.forCoffeeShop.metaDescription,
    url: `${SITE_URL}/en/for/coffee-shop`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/covers/for-coffee-shop.png`,
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
        headline={dict.forCoffeeShop.title}
        description={dict.forCoffeeShop.metaDescription}
        url={`${SITE_URL}/en/for/coffee-shop`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/for-coffee-shop.png`}
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.forCoffeeShop.title,
            url: `${SITE_URL}/en/for/coffee-shop`,
          },
        ]}
      />
      <LegalPage
        title={dict.forCoffeeShop.title}
        cover={{ src: "/covers/for-coffee-shop.png", alt: dict.forCoffeeShop.title }}
        lastUpdated={dict.forCoffeeShop.lastUpdated}
        sections={dict.forCoffeeShop.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}for/coffee-shop`}
        dict={dict}
        hideDate
      />
    </>
  );
}
