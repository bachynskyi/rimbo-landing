import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";

export default function PrivacyPage() {
  const dict = getDictionary("uk");
  return (
    <LegalPage
      title={dict.privacy.title}
      lastUpdated={dict.privacy.lastUpdated}
      sections={dict.privacy.sections}
      backLabel={dict.privacy.backLabel}
      backHref="/"
    />
  );
}
