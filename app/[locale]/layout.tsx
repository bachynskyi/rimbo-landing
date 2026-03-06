import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rimbo — Цифрова платформа лояльності",
  description:
    "Штамп-картки, бонуси, знижки, промокоди та сертифікати для вашого бізнесу. Google Wallet, NFC, QR-коди.",
};

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // In Next.js 15 with static export, we set lang on html via the root layout
  // The locale layout just wraps content
  return <>{children}</>;
}
