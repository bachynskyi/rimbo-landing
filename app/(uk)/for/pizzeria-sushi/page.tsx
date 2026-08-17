import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.forPizzeriaSushi.title,
  description: dict.forPizzeriaSushi.metaDescription,
  alternates: getAlternateLinks("/for/pizzeria-sushi"),
  openGraph: {
    title: dict.forPizzeriaSushi.title,
    description: dict.forPizzeriaSushi.metaDescription,
    url: `${SITE_URL}/for/pizzeria-sushi`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/covers/for-pizzeria-sushi.png`,
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
        headline={dict.forPizzeriaSushi.title}
        description={dict.forPizzeriaSushi.metaDescription}
        url={`${SITE_URL}/for/pizzeria-sushi`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/for-pizzeria-sushi.png`}
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.forPizzeriaSushi.title,
            url: `${SITE_URL}/for/pizzeria-sushi`,
          },
        ]}
      />
      <LegalPage
        title={dict.forPizzeriaSushi.title}
        cover={{ src: "/covers/for-pizzeria-sushi.png", alt: dict.forPizzeriaSushi.title }}
        lastUpdated={dict.forPizzeriaSushi.lastUpdated}
        sections={dict.forPizzeriaSushi.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/for/pizzeria-sushi`}
        dict={dict}
        hideDate
      />
    </>
  );
}
