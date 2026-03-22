import { Geist, Geist_Mono } from "next/font/google";
import { ClarityAnalytics } from "./clarity";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {}
})();
`;

export function BaseLayout({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preload" as="image" type="image/webp" href="/hero-glass-640.webp" media="(max-width: 640px)" />
        <link rel="preload" as="image" type="image/webp" href="/hero-glass-1024.webp" media="(min-width: 641px) and (max-width: 1024px)" />
        <link rel="preload" as="image" type="image/webp" href="/hero-glass-1440.webp" media="(min-width: 1025px)" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClarityAnalytics />
        {children}
      </body>
    </html>
  );
}
