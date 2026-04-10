import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";
import { BreadcrumbSchema, ArticleSchema } from "@/components/json-ld";
import { SITE_URL, SITE_NAME, getAlternateLinks } from "@/lib/seo-config";

const dict = getDictionary("uk");

export const metadata: Metadata = {
  title: dict.pushNotifications.title,
  description: dict.pushNotifications.metaDescription,
  alternates: getAlternateLinks("/push-notifications"),
  openGraph: {
    title: dict.pushNotifications.title,
    description: dict.pushNotifications.metaDescription,
    url: `${SITE_URL}/push-notifications`,
    siteName: SITE_NAME,
    type: "article",
  },
};

export default function PushNotificationsPage() {
  return (
    <>
      <ArticleSchema
        headline={dict.pushNotifications.title}
        description={dict.pushNotifications.metaDescription}
        url={`${SITE_URL}/push-notifications`}
        datePublished="2026-04-10"
        locale="uk"
      />
      <BreadcrumbSchema
        items={[
          { name: "Головна", url: SITE_URL },
          {
            name: dict.pushNotifications.title,
            url: `${SITE_URL}/push-notifications`,
          },
        ]}
      />
      <LegalPage
        title={dict.pushNotifications.title}
        lastUpdated={dict.pushNotifications.lastUpdated}
        sections={dict.pushNotifications.sections}
        homeHref="/"
        homeLabel="Головна"
        langSwitch={dict.langSwitch}
        langSwitchHref={`${dict.langSwitchHref}/push-notifications`}
        dict={dict}
        hideDate
      />
    </>
  );
}
