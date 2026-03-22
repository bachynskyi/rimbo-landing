import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.terms.title,
  description: `${dict.terms.title} — ${SITE_NAME}`,
  alternates: getAlternateLinks("/terms"),
  openGraph: {
    title: dict.terms.title,
    description: `${dict.terms.title} — ${SITE_NAME}`,
    url: `${SITE_URL}/terms`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          { name: dict.terms.title, url: `${SITE_URL}/terms` },
        ]}
      />
      <LegalPage
        title={dict.terms.title}
        lastUpdated={dict.terms.lastUpdated}
        sections={dict.terms.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/terms`}
        dict={dict}
      />
    </>
  );
}
