import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";

export default function TermsPage() {
  const dict = getDictionary("uk");
  return (
    <LegalPage
      title={dict.terms.title}
      lastUpdated={dict.terms.lastUpdated}
      sections={dict.terms.sections}
      backLabel={dict.terms.backLabel}
      backHref="/"
    />
  );
}
