import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.terms.title,
  description: `${dict.terms.title} — ${SITE_NAME}`,
  alternates: getAlternateLinks("/terms"),
  openGraph: {
    title: dict.terms.title,
    description: `${dict.terms.title} — ${SITE_NAME}`,
    url: `${SITE_URL}/en/terms`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          { name: dict.terms.title, url: `${SITE_URL}/en/terms` },
        ]}
      />
      <LegalPage
        title={dict.terms.title}
        lastUpdated={dict.terms.lastUpdated}
        sections={dict.terms.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}terms`}
        dict={dict}
      />
    </>
  );
}
