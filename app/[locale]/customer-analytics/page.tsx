import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.customerAnalytics.title,
  description: dict.customerAnalytics.metaDescription,
  alternates: getAlternateLinks("/customer-analytics"),
  openGraph: {
    title: dict.customerAnalytics.title,
    description: dict.customerAnalytics.metaDescription,
    url: `${SITE_URL}/en/customer-analytics`,
    siteName: SITE_NAME,
    type: "article",
  },
};

export default async function CustomerAnalyticsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return (
    <>
      <ArticleSchema
        headline={dict.customerAnalytics.title}
        description={dict.customerAnalytics.metaDescription}
        url={`${SITE_URL}/en/customer-analytics`}
        datePublished="2026-04-09"
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.customerAnalytics.title,
            url: `${SITE_URL}/en/customer-analytics`,
          },
        ]}
      />
      <LegalPage
        title={dict.customerAnalytics.title}
        lastUpdated={dict.customerAnalytics.lastUpdated}
        sections={dict.customerAnalytics.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}customer-analytics`}
        dict={dict}
        hideDate
      />
    </>
  );
}
