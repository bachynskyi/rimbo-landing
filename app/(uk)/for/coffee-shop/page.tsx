import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.forCoffeeShop.title,
  description: dict.forCoffeeShop.metaDescription,
  alternates: getAlternateLinks("/for/coffee-shop"),
  openGraph: {
    title: dict.forCoffeeShop.title,
    description: dict.forCoffeeShop.metaDescription,
    url: `${SITE_URL}/for/coffee-shop`,
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

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline={dict.forCoffeeShop.title}
        description={dict.forCoffeeShop.metaDescription}
        url={`${SITE_URL}/for/coffee-shop`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/for-coffee-shop.png`}
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.forCoffeeShop.title,
            url: `${SITE_URL}/for/coffee-shop`,
          },
        ]}
      />
      <LegalPage
        title={dict.forCoffeeShop.title}
        cover={{ src: "/covers/for-coffee-shop.png", alt: dict.forCoffeeShop.title }}
        lastUpdated={dict.forCoffeeShop.lastUpdated}
        sections={dict.forCoffeeShop.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/for/coffee-shop`}
        dict={dict}
        hideDate
      />
    </>
  );
}
