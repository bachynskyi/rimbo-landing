"use client";

import { useState, useEffect, useRef, useCallback, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { X, CheckCircle } from "lucide-react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useContactModal } from "@/contexts/contact-modal-context";
import type { Dictionary } from "@/lib/dictionaries";

export function ContactModal({ dict }: { dict: Dictionary }) {
  const { isOpen, selectedPlan, closeModal } = useContactModal();
  const t = dict.contactModal;
  const tierNames = dict.pricing.tiers.map((tier) => tier.name);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("");
  const [note, setNote] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const overlayRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Sync selectedPlan from context
  useEffect(() => {
    if (isOpen) {
      setPlan(selectedPlan ?? "");
      setName("");
      setPhone("");
      setEmail("");
      setNote("");
      setErrors({});
      setSubmitted(false);
      setTurnstileToken(null);
      turnstileRef.current?.reset();
      // Trigger open animation on next frame
      requestAnimationFrame(() => setVisible(true));
    }
  }, [isOpen, selectedPlan]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [dropdownOpen]);

  // Focus trap & ESC
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => firstFocusRef.current?.focus(), 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
        return;
      }
      if (e.key === "Tab" && cardRef.current) {
        const focusable = cardRef.current.querySelectorAll<HTMLElement>(
          'input, select, textarea, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(() => closeModal(), 250);
  }, [closeModal]);

  const validate = () => {
    const errs: { name?: string; phone?: string } = {};
    if (!name.trim()) errs.name = t.nameRequired;
    if (!phone.trim()) {
      errs.phone = t.phoneRequired;
    } else if (!/^\+?[\d\s()-]{7,}$/.test(phone.trim())) {
      errs.phone = t.phoneInvalid;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (!turnstileToken) return;
    console.log("Contact form submitted:", { name, phone, email, plan, note, turnstileToken });
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className={`modal-overlay ${visible ? "open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={t.title}
      onClick={(e) => {
        if (e.target === overlayRef.current) handleClose();
      }}
    >
      <div ref={cardRef} className="modal-card p-6 sm:p-8">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 cursor-pointer rounded-full p-1.5 transition-colors hover:bg-[var(--bg-card-hover)]"
          aria-label={t.close}
        >
          <X className="h-5 w-5" style={{ color: "var(--text-secondary)" }} />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center py-8 text-center">
            <CheckCircle
              className="h-16 w-16 text-primary mb-4"
              strokeWidth={1.5}
            />
            <h3 className="text-2xl font-bold themed-text">{t.successTitle}</h3>
            <p className="mt-3 themed-text-secondary max-w-xs">
              {t.successMessage}
            </p>
            <button
              onClick={handleClose}
              className="btn-primary mt-8 px-8 py-3 text-sm cursor-pointer"
            >
              {t.close}
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold themed-text pr-8">{t.title}</h3>
            <p className="mt-2 text-sm themed-text-secondary">{t.subtitle}</p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              {/* Name */}
              <div>
                <label className="mb-1.5 block text-sm font-medium themed-text">
                  {t.name} *
                </label>
                <input
                  ref={firstFocusRef}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  className={`modal-input ${errors.name ? "error" : ""}`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs" style={{ color: "oklch(0.65 0.2 25)" }}>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="mb-1.5 block text-sm font-medium themed-text">
                  {t.phone} *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.phonePlaceholder}
                  className={`modal-input ${errors.phone ? "error" : ""}`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs" style={{ color: "oklch(0.65 0.2 25)" }}>
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="mb-1.5 block text-sm font-medium themed-text">
                  {t.email}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="modal-input"
                />
              </div>

              {/* Plan */}
              <div ref={dropdownRef} className="modal-select">
                <label className="mb-1.5 block text-sm font-medium themed-text">
                  {t.plan}
                </label>
                <button
                  type="button"
                  onClick={() => setDropdownOpen((v) => !v)}
                  className={`modal-select-trigger ${dropdownOpen ? "open" : ""}`}
                >
                  <span style={{ color: plan ? "var(--text-primary)" : "var(--text-muted)" }}>
                    {plan || t.planPlaceholder}
                  </span>
                  <svg className="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                </button>
                {dropdownOpen && (
                  <ul className="modal-dropdown">
                    <li
                      onClick={() => { setPlan(""); setDropdownOpen(false); }}
                      className={`modal-dropdown-item ${plan === "" ? "active" : ""}`}
                    >
                      {t.planPlaceholder}
                    </li>
                    {tierNames.map((tierName) => (
                      <li
                        key={tierName}
                        onClick={() => { setPlan(tierName); setDropdownOpen(false); }}
                        className={`modal-dropdown-item ${plan === tierName ? "active" : ""}`}
                      >
                        {tierName}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Note */}
              <div>
                <label className="mb-1.5 block text-sm font-medium themed-text">
                  {t.note}
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder={t.notePlaceholder}
                  rows={3}
                  className="modal-input resize-none"
                />
              </div>

              {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
                <Turnstile
                  ref={turnstileRef}
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                  onSuccess={setTurnstileToken}
                  onExpire={() => setTurnstileToken(null)}
                  onError={() => setTurnstileToken(null)}
                  options={{ theme: "auto", size: "flexible" }}
                />
              )}

              <button
                type="submit"
                disabled={!!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken}
                className="btn-primary mt-2 py-3 text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t.submit}
              </button>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
