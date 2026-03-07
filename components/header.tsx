"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { useContactModal } from "@/contexts/contact-modal-context";
import type { Dictionary } from "@/lib/dictionaries";

export function Header({ dict }: { dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useContactModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-40 transition-all duration-500 ease-out ${
        scrolled ? "top-4 flex justify-center px-4" : "top-0 px-0"
      }`}
    >
      <div
        className={`flex items-center transition-all duration-500 ease-out ${
          scrolled
            ? "nav-pill w-full max-w-3xl gap-1 px-2 py-1.5"
            : "w-full max-w-6xl mx-auto gap-6 px-6 py-5 bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href={dict.locale === "en" ? "/en" : "/"}
          className={`shrink-0 transition-all duration-500 ${
            scrolled ? "pl-2 mr-2" : ""
          }`}
        >
          <Image
            src="/rimbo-logo.png"
            alt="Rimbo"
            width={scrolled ? 80 : 96}
            height={scrolled ? 24 : 28}
            className="object-contain dark:invert transition-all duration-500"
            style={{ height: scrolled ? 24 : 28 }}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav
          className={`hidden flex-1 items-center md:flex transition-all duration-500 ${
            scrolled ? "gap-0.5" : "gap-6 justify-end"
          }`}
        >
          <a
            href="#features"
            className={scrolled ? "nav-tab" : "cursor-pointer text-sm themed-text-secondary transition-colors hover:themed-text"}
          >
            {dict.header.features}
          </a>
          <a
            href="#pricing"
            className={scrolled ? "nav-tab" : "cursor-pointer text-sm themed-text-secondary transition-colors hover:themed-text"}
          >
            {dict.header.pricing}
          </a>
          <a
            href="#faq"
            className={scrolled ? "nav-tab" : "cursor-pointer text-sm themed-text-secondary transition-colors hover:themed-text"}
          >
            {dict.header.faq}
          </a>

          {/* Spacer to push right items */}
          {scrolled && <div className="flex-1" />}

          <a
            href={dict.langSwitchHref}
            className={
              scrolled
                ? "nav-tab"
                : "cursor-pointer flex items-center gap-1.5 text-sm themed-text-secondary transition-colors hover:themed-text"
            }
          >
            <Globe className="h-3.5 w-3.5" />
            {dict.langSwitch}
          </a>
          <ThemeToggle />
          <button
            onClick={() => openModal()}
            className={`cursor-pointer text-sm font-semibold text-[#0a1a1a] transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_oklch(0.75_0.15_165/0.35)] ${
              scrolled
                ? "ml-1 inline-flex items-center rounded-full bg-primary px-5 py-2"
                : "btn-primary"
            }`}
          >
            {dict.header.getStarted}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="ml-auto flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={scrolled ? "nav-tab !px-2" : "cursor-pointer themed-text"}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav
          className={`mx-4 mt-2 flex flex-col gap-1 p-2 md:hidden ${
            scrolled ? "nav-pill absolute top-full w-[calc(100%-2rem)] max-w-3xl" : "glass"
          }`}
          style={scrolled ? {} : { margin: "0.5rem 1rem", padding: "1.5rem" }}
        >
          <a href="#features" onClick={() => setMenuOpen(false)} className={scrolled ? "nav-tab justify-center" : "cursor-pointer themed-text-secondary"}>
            {dict.header.features}
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className={scrolled ? "nav-tab justify-center" : "cursor-pointer themed-text-secondary"}>
            {dict.header.pricing}
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className={scrolled ? "nav-tab justify-center" : "cursor-pointer themed-text-secondary"}>
            {dict.header.faq}
          </a>
          <a href={dict.langSwitchHref} className={scrolled ? "nav-tab justify-center" : "cursor-pointer flex items-center gap-1.5 themed-text-secondary"}>
            <Globe className="h-3.5 w-3.5" />
            {dict.langSwitch}
          </a>
          <button
            onClick={() => { setMenuOpen(false); openModal(); }}
            className={`text-center text-sm font-semibold text-[#0a1a1a] transition-all hover:-translate-y-0.5 ${
              scrolled
                ? "mt-1 rounded-full bg-primary px-5 py-2.5 hover:shadow-[0_4px_20px_oklch(0.75_0.15_165/0.35)]"
                : "btn-primary cursor-pointer mt-2"
            }`}
          >
            {dict.header.getStarted}
          </button>
        </nav>
      )}
    </header>
  );
}
