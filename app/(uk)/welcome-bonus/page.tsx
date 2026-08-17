import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.welcomeBonus.title,
  description: dict.welcomeBonus.metaDescription,
  alternates: getAlternateLinks("/welcome-bonus"),
  openGraph: {
    title: dict.welcomeBonus.title,
    description: dict.welcomeBonus.metaDescription,
    url: `${SITE_URL}/welcome-bonus`,
    siteName: SITE_NAME,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/covers/welcome-bonus.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline={dict.welcomeBonus.title}
        description={dict.welcomeBonus.metaDescription}
        url={`${SITE_URL}/welcome-bonus`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/welcome-bonus.png`}
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.welcomeBonus.title,
            url: `${SITE_URL}/welcome-bonus`,
          },
        ]}
      />
      <LegalPage
        title={dict.welcomeBonus.title}
        cover={{ src: "/covers/welcome-bonus.png", alt: dict.welcomeBonus.title }}
        lastUpdated={dict.welcomeBonus.lastUpdated}
        sections={dict.welcomeBonus.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/welcome-bonus`}
        dict={dict}
        hideDate
      />
    </>
  );
}
