import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.altegioIntegration.title,
  description: dict.altegioIntegration.metaDescription,
  alternates: getAlternateLinks("/integrations/altegio", "en"),
  openGraph: {
    title: dict.altegioIntegration.title,
    description: dict.altegioIntegration.metaDescription,
    url: `${SITE_URL}/en/integrations/altegio`,
    siteName: SITE_NAME,
    type: "article",
  },
};

export default async function AltegioIntegrationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return (
    <>
      <ArticleSchema
        headline={dict.altegioIntegration.title}
        description={dict.altegioIntegration.metaDescription}
        url={`${SITE_URL}/en/integrations/altegio`}
        datePublished="2026-05-12"
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: "Integrations",
            url: `${SITE_URL}/en/integrations/altegio`,
          },
          {
            name: dict.altegioIntegration.title,
            url: `${SITE_URL}/en/integrations/altegio`,
          },
        ]}
      />
      <LegalPage
        title={dict.altegioIntegration.title}
        lastUpdated={dict.altegioIntegration.lastUpdated}
        sections={dict.altegioIntegration.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}integrations/altegio`}
        dict={dict}
        hideDate
      />
    </>
  );
}
