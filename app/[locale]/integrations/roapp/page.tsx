import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.roappIntegration.title,
  description: dict.roappIntegration.metaDescription,
  alternates: getAlternateLinks("/integrations/roapp", "en"),
  openGraph: {
    title: dict.roappIntegration.title,
    description: dict.roappIntegration.metaDescription,
    url: `${SITE_URL}/en/integrations/roapp`,
    siteName: SITE_NAME,
    type: "article",
  },
};

export default async function RoappIntegrationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return (
    <>
      <ArticleSchema
        headline={dict.roappIntegration.title}
        description={dict.roappIntegration.metaDescription}
        url={`${SITE_URL}/en/integrations/roapp`}
        datePublished="2026-10-23"
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: "Integrations",
            url: `${SITE_URL}/en/integrations/roapp`,
          },
          {
            name: dict.roappIntegration.title,
            url: `${SITE_URL}/en/integrations/roapp`,
          },
        ]}
      />
      <LegalPage
        title={dict.roappIntegration.title}
        lastUpdated={dict.roappIntegration.lastUpdated}
        sections={dict.roappIntegration.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}integrations/roapp`}
        dict={dict}
        hideDate
      />
    </>
  );
}
