import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.pushNotifications.title,
  description: dict.pushNotifications.metaDescription,
  alternates: getAlternateLinks("/push-notifications"),
  openGraph: {
    title: dict.pushNotifications.title,
    description: dict.pushNotifications.metaDescription,
    url: `${SITE_URL}/en/push-notifications`,
    siteName: SITE_NAME,
    type: "article",
  },
};

export default async function PushNotificationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return (
    <>
      <ArticleSchema
        headline={dict.pushNotifications.title}
        description={dict.pushNotifications.metaDescription}
        url={`${SITE_URL}/en/push-notifications`}
        datePublished="2026-04-10"
        locale="en"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${SITE_URL}/en` },
          {
            name: dict.pushNotifications.title,
            url: `${SITE_URL}/en/push-notifications`,
          },
        ]}
      />
      <LegalPage
        title={dict.pushNotifications.title}
        lastUpdated={dict.pushNotifications.lastUpdated}
        sections={dict.pushNotifications.sections}
        homeHref={`/${locale}`}
        homeLabel="Home"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}push-notifications`}
        dict={dict}
        hideDate
      />
    </>
  );
}
