import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.forHotelTourism.title,
  description: dict.forHotelTourism.metaDescription,
  alternates: getAlternateLinks("/for/hotel-tourism"),
  openGraph: {
    title: dict.forHotelTourism.title,
    description: dict.forHotelTourism.metaDescription,
    url: `${SITE_URL}/for/hotel-tourism`,
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

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline={dict.forHotelTourism.title}
        description={dict.forHotelTourism.metaDescription}
        url={`${SITE_URL}/for/hotel-tourism`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/for-hotel-tourism.png`}
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.forHotelTourism.title,
            url: `${SITE_URL}/for/hotel-tourism`,
          },
        ]}
      />
      <LegalPage
        title={dict.forHotelTourism.title}
        cover={{ src: "/covers/for-hotel-tourism.png", alt: dict.forHotelTourism.title }}
        lastUpdated={dict.forHotelTourism.lastUpdated}
        sections={dict.forHotelTourism.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/for/hotel-tourism`}
        dict={dict}
        hideDate
      />
    </>
  );
}
