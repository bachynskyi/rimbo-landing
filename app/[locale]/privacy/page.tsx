import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return (
    <LegalPage
      title={dict.privacy.title}
      lastUpdated={dict.privacy.lastUpdated}
      sections={dict.privacy.sections}
      backLabel={dict.privacy.backLabel}
      backHref={`/${locale}`}
    />
  );
}
