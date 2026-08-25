import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const metaDict = getDictionary("en");

export const metadata: Metadata = {
  title: metaDict.forFitness.title,
  description: metaDict.forFitness.metaDescription,
  alternates: getAlternateLinks("/for/fitness", "en"),
  openGraph: {
    title: metaDict.forFitness.title,
    description: metaDict.forFitness.metaDescription,
    url: `${SITE_URL}/en/for/fitness`,
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
        headline={dict.forFitness.title}
        description={dict.forFitness.metaDescription}
        url={`${SITE_URL}/en/for/fitness`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/for-fitness.png`}
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.forFitness.title,
            url: `${SITE_URL}/en/for/fitness`,
          },
        ]}
      />
      <LegalPage
        title={dict.forFitness.title}
        cover={{ src: "/covers/for-fitness.png", alt: dict.forFitness.title }}
        lastUpdated={dict.forFitness.lastUpdated}
        sections={dict.forFitness.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}for/fitness`}
        dict={dict}
        hideDate
      />
    </>
  );
}
