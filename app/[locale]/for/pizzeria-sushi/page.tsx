import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const metaDict = getDictionary("en");

export const metadata: Metadata = {
  title: metaDict.forPizzeriaSushi.title,
  description: metaDict.forPizzeriaSushi.metaDescription,
  alternates: getAlternateLinks("/for/pizzeria-sushi"),
  openGraph: {
    title: metaDict.forPizzeriaSushi.title,
    description: metaDict.forPizzeriaSushi.metaDescription,
    url: `${SITE_URL}/en/for/pizzeria-sushi`,
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
        headline={dict.forPizzeriaSushi.title}
        description={dict.forPizzeriaSushi.metaDescription}
        url={`${SITE_URL}/en/for/pizzeria-sushi`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/for-pizzeria-sushi.png`}
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.forPizzeriaSushi.title,
            url: `${SITE_URL}/en/for/pizzeria-sushi`,
          },
        ]}
      />
      <LegalPage
        title={dict.forPizzeriaSushi.title}
        cover={{ src: "/covers/for-pizzeria-sushi.png", alt: dict.forPizzeriaSushi.title }}
        lastUpdated={dict.forPizzeriaSushi.lastUpdated}
        sections={dict.forPizzeriaSushi.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}for/pizzeria-sushi`}
        dict={dict}
        hideDate
      />
    </>
  );
}
