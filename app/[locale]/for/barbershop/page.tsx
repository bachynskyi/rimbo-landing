import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const metaDict = getDictionary("en");

export const metadata: Metadata = {
  title: metaDict.forBarbershop.title,
  description: metaDict.forBarbershop.metaDescription,
  alternates: getAlternateLinks("/for/barbershop"),
  openGraph: {
    title: metaDict.forBarbershop.title,
    description: metaDict.forBarbershop.metaDescription,
    url: `${SITE_URL}/en/for/barbershop`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/covers/for-barbershop.png`,
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
        headline={dict.forBarbershop.title}
        description={dict.forBarbershop.metaDescription}
        url={`${SITE_URL}/en/for/barbershop`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/for-barbershop.png`}
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.forBarbershop.title,
            url: `${SITE_URL}/en/for/barbershop`,
          },
        ]}
      />
      <LegalPage
        title={dict.forBarbershop.title}
        cover={{ src: "/covers/for-barbershop.png", alt: dict.forBarbershop.title }}
        lastUpdated={dict.forBarbershop.lastUpdated}
        sections={dict.forBarbershop.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}for/barbershop`}
        dict={dict}
        hideDate
      />
    </>
  );
}
