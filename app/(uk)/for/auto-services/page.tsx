import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.forAutoServices.title,
  description: dict.forAutoServices.metaDescription,
  alternates: getAlternateLinks("/for/auto-services"),
  openGraph: {
    title: dict.forAutoServices.title,
    description: dict.forAutoServices.metaDescription,
    url: `${SITE_URL}/for/auto-services`,
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

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline={dict.forAutoServices.title}
        description={dict.forAutoServices.metaDescription}
        url={`${SITE_URL}/for/auto-services`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/for-auto-services.png`}
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.forAutoServices.title,
            url: `${SITE_URL}/for/auto-services`,
          },
        ]}
      />
      <LegalPage
        title={dict.forAutoServices.title}
        cover={{ src: "/covers/for-auto-services.png", alt: dict.forAutoServices.title }}
        lastUpdated={dict.forAutoServices.lastUpdated}
        sections={dict.forAutoServices.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/for/auto-services`}
        dict={dict}
        hideDate
      />
    </>
  );
}
