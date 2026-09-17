import { SITE_URL, APP_URL, SITE_NAME, SUPPORT_EMAIL, SUPPORT_PHONE } from "@/lib/seo-config";
import {
  PLAN_PRICES_BY_CURRENCY,
  defaultCurrencyFor,
  type PlanKey,
} from "@/lib/currency";
import type { Dictionary } from "@/lib/dictionaries";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#software`;

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// strip markdown links like [Poster](/integrations/poster) from feature strings
function plain(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export function OrganizationSchema() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/icon-512.png`,
          width: 512,
          height: 512,
        },
        image: `${SITE_URL}/og-image.jpg`,
        description:
          "Digital loyalty platform — stamp cards, bonuses, cashback, discount tiers, promo codes, gift certificates and smart coupons in Apple Wallet and Google Wallet. Made in Ukraine.",
        slogan: "Все цифрове, все автоматичне, все в телефоні клієнта",
        email: SUPPORT_EMAIL,
        telephone: SUPPORT_PHONE,
        // Продукт український, але обслуговує всю Європу — звідси мультивалютний
        // прайс у секції тарифів.
        areaServed: [
          { "@type": "Country", name: "Ukraine" },
          { "@type": "Place", name: "Europe" },
        ],
        knowsLanguage: ["uk", "en"],
        contactPoint: {
          "@type": "ContactPoint",
          email: SUPPORT_EMAIL,
          telephone: SUPPORT_PHONE,
          contactType: "customer service",
          availableLanguage: ["Ukrainian", "English"],
        },
      }}
    />
  );
}

export function WebSiteSchema() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: ["uk", "en"],
        publisher: { "@id": ORG_ID },
      }}
    />
  );
}

// SaaS product with visible pricing tiers.
// Built from dict.pricing.tiers, so hiding/adding a plan updates the markup automatically.
export function SoftwareApplicationSchema({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  // Розмітка статична, а валюта у відвідувача своя — тож у schema.org іде
  // валюта за замовчуванням для локалі (uk — UAH, en — EUR), та сама, яку
  // сервер рендерить у картках до автовизначення на клієнті.
  const currency = defaultCurrencyFor(locale);
  const priceTable = PLAN_PRICES_BY_CURRENCY[currency];
  const tiers = dict.pricing.tiers.map((tier) => ({
    ...tier,
    ...priceTable[tier.plan as PlanKey],
  }));
  const prices = tiers.map((t) => t.monthly);
  const url = locale === "en" ? `${SITE_URL}/en` : SITE_URL;

  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "@id": APP_ID,
        name: SITE_NAME,
        url,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Loyalty program software",
        operatingSystem: "Web, iOS (Apple Wallet), Android (Google Wallet)",
        description: dict.hero.subtitle,
        inLanguage: locale,
        image: `${SITE_URL}/og-image.jpg`,
        screenshot: `${SITE_URL}/og-image.jpg`,
        installUrl: APP_URL,
        publisher: { "@id": ORG_ID },
        provider: { "@id": ORG_ID },
        featureList: [
          ...dict.loyaltyTypes.types.map((t) => plain(t.title)),
          ...dict.features.items.map((f) => plain(f.title)),
        ],
        audience: {
          "@type": "BusinessAudience",
          name:
            locale === "en"
              ? "Small and medium businesses: coffee shops, bakeries, restaurants, barbershops, beauty salons, fitness studios, pet services, auto services"
              : "Малий та середній бізнес: кав'ярні, пекарні, ресторани, барбершопи, салони краси, фітнес-студії, зоосервіси, автосервіси",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: currency,
          lowPrice: Math.min(...prices),
          highPrice: Math.max(...prices),
          offerCount: tiers.length,
          offers: tiers.map((tier) => ({
            "@type": "Offer",
            name: tier.name,
            price: tier.monthly,
            priceCurrency: currency,
            url: `${url}#pricing`,
            category: "SaaS subscription",
            availability: "https://schema.org/InStock",
            priceSpecification: [
              {
                "@type": "UnitPriceSpecification",
                price: tier.monthly,
                priceCurrency: currency,
                unitText: locale === "en" ? "month" : "місяць",
                name:
                  locale === "en" ? "Monthly billing" : "Щомісячна оплата",
              },
              {
                "@type": "UnitPriceSpecification",
                price: tier.annual,
                priceCurrency: currency,
                unitText: locale === "en" ? "month" : "місяць",
                name:
                  locale === "en"
                    ? "Per month with annual billing"
                    : "За місяць при річній оплаті",
              },
            ],
            description: tier.features.map(plain).join("; "),
          })),
        },
      }}
    />
  );
}

// The six loyalty mechanics shown on the homepage, each linking to its article.
const LOYALTY_TYPE_SLUGS = [
  "/stamp-cards",
  "/cashback-loyalty",
  "/loyalty-tiers",
  "/promo-codes",
  "/gift-certificates",
  "/smart-coupons",
];

export function LoyaltyTypesItemListSchema({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const prefix = locale === "en" ? "/en" : "";
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: dict.loyaltyTypes.title,
        itemListOrder: "https://schema.org/ItemListUnordered",
        numberOfItems: dict.loyaltyTypes.types.length,
        itemListElement: dict.loyaltyTypes.types.map((type, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: type.title,
          description: type.description,
          url: LOYALTY_TYPE_SLUGS[i]
            ? `${SITE_URL}${prefix}${LOYALTY_TYPE_SLUGS[i]}`
            : undefined,
        })),
      }}
    />
  );
}

export function FAQPageSchema({ dict }: { dict: Dictionary }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: dict.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}

export function ArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  locale,
  image,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  locale: string;
  image?: string;
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        description,
        url,
        datePublished,
        dateModified: dateModified ?? datePublished,
        inLanguage: locale,
        ...(image
          ? {
              image: {
                "@type": "ImageObject",
                url: image,
                width: 1200,
                height: 630,
              },
            }
          : {}),
        author: {
          "@type": "Organization",
          "@id": ORG_ID,
          name: SITE_NAME,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          "@id": ORG_ID,
          name: SITE_NAME,
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/icon-512.png`,
          },
        },
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": APP_ID },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
      }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}
