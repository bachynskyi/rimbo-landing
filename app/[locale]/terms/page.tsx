import { getDictionary } from "@/lib/dictionaries";
import { LegalPage } from "@/components/legal-page";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return (
    <LegalPage
      title={dict.terms.title}
      lastUpdated={dict.terms.lastUpdated}
      sections={dict.terms.sections}
      backLabel={dict.terms.backLabel}
      backHref={`/${locale}`}
    />
  );
}
