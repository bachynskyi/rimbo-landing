import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.privacy.title,
  description: `${dict.privacy.title} — ${SITE_NAME}`,
  alternates: getAlternateLinks("/privacy"),
  openGraph: {
    title: dict.privacy.title,
    description: `${dict.privacy.title} — ${SITE_NAME}`,
    url: `${SITE_URL}/en/privacy`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default async function PrivacyPage({
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
          { name: dict.privacy.title, url: `${SITE_URL}/en/privacy` },
        ]}
      />
      <LegalPage
        title={dict.privacy.title}
        lastUpdated={dict.privacy.lastUpdated}
        sections={dict.privacy.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}privacy`}
        dict={dict}
      />
    </>
  );
}
