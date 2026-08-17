import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const metaDict = getDictionary("en");

export const metadata: Metadata = {
  title: metaDict.forBeautySalon.title,
  description: metaDict.forBeautySalon.metaDescription,
  alternates: getAlternateLinks("/for/beauty-salon"),
  openGraph: {
    title: metaDict.forBeautySalon.title,
    description: metaDict.forBeautySalon.metaDescription,
    url: `${SITE_URL}/en/for/beauty-salon`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/covers/for-beauty-salon.png`,
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
        headline={dict.forBeautySalon.title}
        description={dict.forBeautySalon.metaDescription}
        url={`${SITE_URL}/en/for/beauty-salon`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/for-beauty-salon.png`}
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.forBeautySalon.title,
            url: `${SITE_URL}/en/for/beauty-salon`,
          },
        ]}
      />
      <LegalPage
        title={dict.forBeautySalon.title}
        cover={{ src: "/covers/for-beauty-salon.png", alt: dict.forBeautySalon.title }}
        lastUpdated={dict.forBeautySalon.lastUpdated}
        sections={dict.forBeautySalon.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}for/beauty-salon`}
        dict={dict}
        hideDate
      />
    </>
  );
}
