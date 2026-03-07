"use client";

import { useState, useEffect, useRef, useCallback, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { X, CheckCircle } from "lucide-react";
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
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);

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
      // Trigger open animation on next frame
      requestAnimationFrame(() => setVisible(true));
    }
  }, [isOpen, selectedPlan]);

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
    console.log("Contact form submitted:", { name, phone, email, plan, note });
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
              <div>
                <label className="mb-1.5 block text-sm font-medium themed-text">
                  {t.plan}
                </label>
                <select
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="modal-input"
                >
                  <option value="">{t.planPlaceholder}</option>
                  {tierNames.map((tierName) => (
                    <option key={tierName} value={tierName}>
                      {tierName}
                    </option>
                  ))}
                </select>
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

              <button type="submit" className="btn-primary mt-2 py-3 text-sm cursor-pointer">
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
