import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.stampCards.title,
  description: dict.stampCards.metaDescription,
  alternates: getAlternateLinks("/stamp-cards"),
  openGraph: {
    title: dict.stampCards.title,
    description: dict.stampCards.metaDescription,
    url: `${SITE_URL}/stamp-cards`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/covers/stamp-cards.png`,
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
        headline={dict.stampCards.title}
        description={dict.stampCards.metaDescription}
        url={`${SITE_URL}/stamp-cards`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/stamp-cards.png`}
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.stampCards.title,
            url: `${SITE_URL}/stamp-cards`,
          },
        ]}
      />
      <LegalPage
        title={dict.stampCards.title}
        cover={{ src: "/covers/stamp-cards.png", alt: dict.stampCards.title }}
        lastUpdated={dict.stampCards.lastUpdated}
        sections={dict.stampCards.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/stamp-cards`}
        dict={dict}
        hideDate
      />
    </>
  );
}
