import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.forBakery.title,
  description: dict.forBakery.metaDescription,
  alternates: getAlternateLinks("/for/bakery"),
  openGraph: {
    title: dict.forBakery.title,
    description: dict.forBakery.metaDescription,
    url: `${SITE_URL}/for/bakery`,
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

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline={dict.forBakery.title}
        description={dict.forBakery.metaDescription}
        url={`${SITE_URL}/for/bakery`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/for-bakery.png`}
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.forBakery.title,
            url: `${SITE_URL}/for/bakery`,
          },
        ]}
      />
      <LegalPage
        title={dict.forBakery.title}
        cover={{ src: "/covers/for-bakery.png", alt: dict.forBakery.title }}
        lastUpdated={dict.forBakery.lastUpdated}
        sections={dict.forBakery.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/for/bakery`}
        dict={dict}
        hideDate
      />
    </>
  );
}
