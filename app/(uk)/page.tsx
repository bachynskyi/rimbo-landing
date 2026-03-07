import { getDictionary } from "@/lib/dictionaries";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { LoyaltyTypes } from "@/components/loyalty-types";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { FogBackground } from "@/components/fog-background";
import { GrainOverlay } from "@/components/grain-overlay";
import { ContactModalProvider } from "@/contexts/contact-modal-context";
import {
  OrganizationSchema,
  WebSiteSchema,
  FAQPageSchema,
} from "@/components/json-ld";

export default function HomePage() {
  const dict = getDictionary("uk");

  return (
    <ContactModalProvider dict={dict}>
      <OrganizationSchema />
      <WebSiteSchema />
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
        <Pricing dict={dict} />
        <FAQ dict={dict} />
      </main>
      <Footer dict={dict} />
    </ContactModalProvider>
  );
}
