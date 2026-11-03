import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const metaDict = getDictionary("en");

export const metadata: Metadata = {
  title: metaDict.builtInCheckout.title,
  description: metaDict.builtInCheckout.metaDescription,
  alternates: getAlternateLinks("/built-in-checkout", "en"),
  openGraph: {
    title: metaDict.builtInCheckout.title,
    description: metaDict.builtInCheckout.metaDescription,
    url: `${SITE_URL}/en/built-in-checkout`,
    siteName: SITE_NAME,
    type: "article",
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return (
    <>
      <ArticleSchema
        headline={dict.builtInCheckout.title}
        description={dict.builtInCheckout.metaDescription}
        url={`${SITE_URL}/en/built-in-checkout`}
        datePublished="2026-11-03"
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.builtInCheckout.title,
            url: `${SITE_URL}/en/built-in-checkout`,
          },
        ]}
      />
      <LegalPage
        title={dict.builtInCheckout.title}
        lastUpdated={dict.builtInCheckout.lastUpdated}
        sections={dict.builtInCheckout.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}built-in-checkout`}
        dict={dict}
        hideDate
      />
    </>
  );
}
