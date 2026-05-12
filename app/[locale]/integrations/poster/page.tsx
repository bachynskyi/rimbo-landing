import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.posterIntegration.title,
  description: dict.posterIntegration.metaDescription,
  alternates: getAlternateLinks("/integrations/poster"),
  openGraph: {
    title: dict.posterIntegration.title,
    description: dict.posterIntegration.metaDescription,
    url: `${SITE_URL}/en/integrations/poster`,
    siteName: SITE_NAME,
    type: "article",
  },
};

export default async function PosterIntegrationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return (
    <>
      <ArticleSchema
        headline={dict.posterIntegration.title}
        description={dict.posterIntegration.metaDescription}
        url={`${SITE_URL}/en/integrations/poster`}
        datePublished="2026-05-12"
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: "Integrations",
            url: `${SITE_URL}/en/integrations/poster`,
          },
          {
            name: dict.posterIntegration.title,
            url: `${SITE_URL}/en/integrations/poster`,
          },
        ]}
      />
      <LegalPage
        title={dict.posterIntegration.title}
        lastUpdated={dict.posterIntegration.lastUpdated}
        sections={dict.posterIntegration.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}integrations/poster`}
        dict={dict}
        hideDate
      />
    </>
  );
}
