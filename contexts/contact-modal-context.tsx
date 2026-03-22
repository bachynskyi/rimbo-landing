"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { ContactModal } from "@/components/contact-modal";
import type { Dictionary } from "@/lib/dictionaries";

interface ContactModalState {
  isOpen: boolean;
  selectedPlan: string | null;
  openModal: (plan?: string) => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalState | null>(null);

export function ContactModalProvider({
  dict,
  children,
}: {
  dict: Dictionary;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const openModal = useCallback((plan?: string) => {
    setSelectedPlan(plan ?? null);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ContactModalContext.Provider
      value={{ isOpen, selectedPlan, openModal, closeModal }}
    >
      {children}
      <ContactModal dict={dict} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used within ContactModalProvider");
  return ctx;
}
