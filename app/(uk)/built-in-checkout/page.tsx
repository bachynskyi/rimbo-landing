import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.builtInCheckout.title,
  description: dict.builtInCheckout.metaDescription,
  alternates: getAlternateLinks("/built-in-checkout"),
  openGraph: {
    title: dict.builtInCheckout.title,
    description: dict.builtInCheckout.metaDescription,
    url: `${SITE_URL}/built-in-checkout`,
    siteName: SITE_NAME,
    type: "article",
  },
};

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline={dict.builtInCheckout.title}
        description={dict.builtInCheckout.metaDescription}
        url={`${SITE_URL}/built-in-checkout`}
        datePublished="2026-11-03"
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.builtInCheckout.title,
            url: `${SITE_URL}/built-in-checkout`,
          },
        ]}
      />
      <LegalPage
        title={dict.builtInCheckout.title}
        lastUpdated={dict.builtInCheckout.lastUpdated}
        sections={dict.builtInCheckout.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/built-in-checkout`}
        dict={dict}
        hideDate
      />
    </>
  );
}
