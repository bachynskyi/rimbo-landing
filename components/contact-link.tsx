"use client";

import { useContactModal } from "@/contexts/contact-modal-context";

// Inline text link that opens the contact modal (used via [label](#contact) in article content,
// and by the custom-solution note under the pricing grid).
// `plan` preselects the modal's plan dropdown. Omitted by the article call sites,
// where openModal(undefined) behaves exactly as openModal() always did.
export function ContactLink({ label, plan }: { label: string; plan?: string }) {
  const { openModal } = useContactModal();
  return (
    <button
      type="button"
      onClick={() => openModal(plan)}
      className="cursor-pointer text-primary-link underline underline-offset-2 hover:opacity-80 transition-opacity"
    >
      {label}
    </button>
  );
}
