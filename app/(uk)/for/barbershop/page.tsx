import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.forBarbershop.title,
  description: dict.forBarbershop.metaDescription,
  alternates: getAlternateLinks("/for/barbershop"),
  openGraph: {
    title: dict.forBarbershop.title,
    description: dict.forBarbershop.metaDescription,
    url: `${SITE_URL}/for/barbershop`,
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

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline={dict.forBarbershop.title}
        description={dict.forBarbershop.metaDescription}
        url={`${SITE_URL}/for/barbershop`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/for-barbershop.png`}
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.forBarbershop.title,
            url: `${SITE_URL}/for/barbershop`,
          },
        ]}
      />
      <LegalPage
        title={dict.forBarbershop.title}
        cover={{ src: "/covers/for-barbershop.png", alt: dict.forBarbershop.title }}
        lastUpdated={dict.forBarbershop.lastUpdated}
        sections={dict.forBarbershop.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/for/barbershop`}
        dict={dict}
        hideDate
      />
    </>
  );
}
