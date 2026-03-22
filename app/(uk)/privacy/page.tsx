import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.privacy.title,
  description: `${dict.privacy.title} — ${SITE_NAME}`,
  alternates: getAlternateLinks("/privacy"),
  openGraph: {
    title: dict.privacy.title,
    description: `${dict.privacy.title} — ${SITE_NAME}`,
    url: `${SITE_URL}/privacy`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          { name: dict.privacy.title, url: `${SITE_URL}/privacy` },
        ]}
      />
      <LegalPage
        title={dict.privacy.title}
        lastUpdated={dict.privacy.lastUpdated}
        sections={dict.privacy.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/privacy`}
        dict={dict}
      />
    </>
  );
}
