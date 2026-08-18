"use client";

import { useContactModal } from "@/contexts/contact-modal-context";

// Inline text link that opens the contact modal (used via [label](#contact) in article content)
export function ContactLink({ label }: { label: string }) {
  const { openModal } = useContactModal();
  return (
    <button
      type="button"
      onClick={() => openModal()}
      className="cursor-pointer text-primary-link underline underline-offset-2 hover:opacity-80 transition-opacity"
    >
      {label}
    </button>
  );
}
