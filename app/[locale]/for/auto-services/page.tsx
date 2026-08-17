import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const metaDict = getDictionary("en");

export const metadata: Metadata = {
  title: metaDict.forAutoServices.title,
  description: metaDict.forAutoServices.metaDescription,
  alternates: getAlternateLinks("/for/auto-services"),
  openGraph: {
    title: metaDict.forAutoServices.title,
    description: metaDict.forAutoServices.metaDescription,
    url: `${SITE_URL}/en/for/auto-services`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/covers/for-auto-services.png`,
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
        headline={dict.forAutoServices.title}
        description={dict.forAutoServices.metaDescription}
        url={`${SITE_URL}/en/for/auto-services`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/for-auto-services.png`}
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.forAutoServices.title,
            url: `${SITE_URL}/en/for/auto-services`,
          },
        ]}
      />
      <LegalPage
        title={dict.forAutoServices.title}
        cover={{ src: "/covers/for-auto-services.png", alt: dict.forAutoServices.title }}
        lastUpdated={dict.forAutoServices.lastUpdated}
        sections={dict.forAutoServices.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}for/auto-services`}
        dict={dict}
        hideDate
      />
    </>
  );
}
