import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const metaDict = getDictionary("en");

export const metadata: Metadata = {
  title: metaDict.forHotelTourism.title,
  description: metaDict.forHotelTourism.metaDescription,
  alternates: getAlternateLinks("/for/hotel-tourism"),
  openGraph: {
    title: metaDict.forHotelTourism.title,
    description: metaDict.forHotelTourism.metaDescription,
    url: `${SITE_URL}/en/for/hotel-tourism`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/covers/for-hotel-tourism.png`,
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
        headline={dict.forHotelTourism.title}
        description={dict.forHotelTourism.metaDescription}
        url={`${SITE_URL}/en/for/hotel-tourism`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/for-hotel-tourism.png`}
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.forHotelTourism.title,
            url: `${SITE_URL}/en/for/hotel-tourism`,
          },
        ]}
      />
      <LegalPage
        title={dict.forHotelTourism.title}
        cover={{ src: "/covers/for-hotel-tourism.png", alt: dict.forHotelTourism.title }}
        lastUpdated={dict.forHotelTourism.lastUpdated}
        sections={dict.forHotelTourism.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}for/hotel-tourism`}
        dict={dict}
        hideDate
      />
    </>
  );
}
