import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.roappIntegration.title,
  description: dict.roappIntegration.metaDescription,
  alternates: getAlternateLinks("/integrations/roapp"),
  openGraph: {
    title: dict.roappIntegration.title,
    description: dict.roappIntegration.metaDescription,
    url: `${SITE_URL}/integrations/roapp`,
    siteName: SITE_NAME,
    type: "article",
  },
};

export default function RoappIntegrationPage() {
  return (
    <>
      <ArticleSchema
        headline={dict.roappIntegration.title}
        description={dict.roappIntegration.metaDescription}
        url={`${SITE_URL}/integrations/roapp`}
        datePublished="2026-10-23"
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          { name: "Інтеграції", url: `${SITE_URL}/integrations/roapp` },
          {
            name: dict.roappIntegration.title,
            url: `${SITE_URL}/integrations/roapp`,
          },
        ]}
      />
      <LegalPage
        title={dict.roappIntegration.title}
        lastUpdated={dict.roappIntegration.lastUpdated}
        sections={dict.roappIntegration.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/integrations/roapp`}
        dict={dict}
        hideDate
      />
    </>
  );
}
