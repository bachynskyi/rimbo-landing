import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.forFitness.title,
  description: dict.forFitness.metaDescription,
  alternates: getAlternateLinks("/for/fitness"),
  openGraph: {
    title: dict.forFitness.title,
    description: dict.forFitness.metaDescription,
    url: `${SITE_URL}/for/fitness`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/covers/for-fitness.png`,
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
        headline={dict.forFitness.title}
        description={dict.forFitness.metaDescription}
        url={`${SITE_URL}/for/fitness`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/for-fitness.png`}
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.forFitness.title,
            url: `${SITE_URL}/for/fitness`,
          },
        ]}
      />
      <LegalPage
        title={dict.forFitness.title}
        cover={{ src: "/covers/for-fitness.png", alt: dict.forFitness.title }}
        lastUpdated={dict.forFitness.lastUpdated}
        sections={dict.forFitness.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/for/fitness`}
        dict={dict}
        hideDate
      />
    </>
  );
}
