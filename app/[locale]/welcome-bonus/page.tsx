import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const metaDict = getDictionary("en");

export const metadata: Metadata = {
  title: metaDict.welcomeBonus.title,
  description: metaDict.welcomeBonus.metaDescription,
  alternates: getAlternateLinks("/welcome-bonus", "en"),
  openGraph: {
    title: metaDict.welcomeBonus.title,
    description: metaDict.welcomeBonus.metaDescription,
    url: `${SITE_URL}/en/welcome-bonus`,
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
        headline={dict.welcomeBonus.title}
        description={dict.welcomeBonus.metaDescription}
        url={`${SITE_URL}/en/welcome-bonus`}
        datePublished="2026-08-17"
        image={`${SITE_URL}/covers/welcome-bonus.png`}
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.welcomeBonus.title,
            url: `${SITE_URL}/en/welcome-bonus`,
          },
        ]}
      />
      <LegalPage
        title={dict.welcomeBonus.title}
        cover={{ src: "/covers/welcome-bonus.png", alt: dict.welcomeBonus.title }}
        lastUpdated={dict.welcomeBonus.lastUpdated}
        sections={dict.welcomeBonus.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}welcome-bonus`}
        dict={dict}
        hideDate
      />
    </>
  );
}
