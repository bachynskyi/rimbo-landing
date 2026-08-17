import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.forPetServices.title,
  description: dict.forPetServices.metaDescription,
  alternates: getAlternateLinks("/for/pet-services"),
  openGraph: {
    title: dict.forPetServices.title,
    description: dict.forPetServices.metaDescription,
    url: `${SITE_URL}/for/pet-services`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/covers/for-pet-services.png`,
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
        headline={dict.forPetServices.title}
        description={dict.forPetServices.metaDescription}
        url={`${SITE_URL}/for/pet-services`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/for-pet-services.png`}
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.forPetServices.title,
            url: `${SITE_URL}/for/pet-services`,
          },
        ]}
      />
      <LegalPage
        title={dict.forPetServices.title}
        cover={{ src: "/covers/for-pet-services.png", alt: dict.forPetServices.title }}
        lastUpdated={dict.forPetServices.lastUpdated}
        sections={dict.forPetServices.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/for/pet-services`}
        dict={dict}
        hideDate
      />
    </>
  );
}
