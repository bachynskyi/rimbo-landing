import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.altegioIntegration.title,
  description: dict.altegioIntegration.metaDescription,
  alternates: getAlternateLinks("/integrations/altegio"),
  openGraph: {
    title: dict.altegioIntegration.title,
    description: dict.altegioIntegration.metaDescription,
    url: `${SITE_URL}/integrations/altegio`,
    siteName: SITE_NAME,
    type: "article",
  },
};

export default function AltegioIntegrationPage() {
  return (
    <>
      <ArticleSchema
        headline={dict.altegioIntegration.title}
        description={dict.altegioIntegration.metaDescription}
        url={`${SITE_URL}/integrations/altegio`}
        datePublished="2026-05-12"
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          { name: "Інтеграції", url: `${SITE_URL}/integrations/altegio` },
          {
            name: dict.altegioIntegration.title,
            url: `${SITE_URL}/integrations/altegio`,
          },
        ]}
      />
      <LegalPage
        title={dict.altegioIntegration.title}
        lastUpdated={dict.altegioIntegration.lastUpdated}
        sections={dict.altegioIntegration.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/integrations/altegio`}
        dict={dict}
        hideDate
      />
    </>
  );
}
