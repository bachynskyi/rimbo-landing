import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.posterIntegration.title,
  description: dict.posterIntegration.metaDescription,
  alternates: getAlternateLinks("/integrations/poster"),
  openGraph: {
    title: dict.posterIntegration.title,
    description: dict.posterIntegration.metaDescription,
    url: `${SITE_URL}/integrations/poster`,
    siteName: SITE_NAME,
    type: "article",
  },
};

export default function PosterIntegrationPage() {
  return (
    <>
      <ArticleSchema
        headline={dict.posterIntegration.title}
        description={dict.posterIntegration.metaDescription}
        url={`${SITE_URL}/integrations/poster`}
        datePublished="2026-05-12"
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          { name: "Інтеграції", url: `${SITE_URL}/integrations/poster` },
          {
            name: dict.posterIntegration.title,
            url: `${SITE_URL}/integrations/poster`,
          },
        ]}
      />
      <LegalPage
        title={dict.posterIntegration.title}
        lastUpdated={dict.posterIntegration.lastUpdated}
        sections={dict.posterIntegration.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/integrations/poster`}
        dict={dict}
        hideDate
      />
    </>
  );
}
