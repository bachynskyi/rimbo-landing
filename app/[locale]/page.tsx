import { getDictionary } from "@/lib/dictionaries";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { LoyaltyTypes } from "@/components/loyalty-types";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Segments } from "@/components/segments";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { FogBackground } from "@/components/fog-background";
import { GrainOverlay } from "@/components/grain-overlay";
import { ContactModalProvider } from "@/contexts/contact-modal-context";
import {
  OrganizationSchema,
  WebSiteSchema,
  FAQPageSchema,
  SoftwareApplicationSchema,
  LoyaltyTypesItemListSchema,
} from "@/components/json-ld";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <ContactModalProvider dict={dict}>
      <OrganizationSchema />
      <WebSiteSchema />
      <SoftwareApplicationSchema dict={dict} locale={locale} />
      <LoyaltyTypesItemListSchema dict={dict} locale={locale} />
      <FAQPageSchema dict={dict} />
      <FogBackground />
      <GrainOverlay />
      <Header dict={dict} />
      <main>
        <Hero dict={dict} />
        <Problem dict={dict} />
        <LoyaltyTypes dict={dict} />
        <Features dict={dict} />
        <HowItWorks dict={dict} />
        <Segments dict={dict} />
        <Pricing dict={dict} locale={locale} />
        <FAQ dict={dict} />
      </main>
      <Footer dict={dict} />
    </ContactModalProvider>
  );
}
