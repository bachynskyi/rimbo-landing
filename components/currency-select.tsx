"use client";

import { useEffect, useRef, useState } from "react";
import { CURRENCIES, CURRENCY_CODES, type CurrencyCode } from "@/lib/currency";

export function CurrencySelect({
  value,
  onChange,
  label,
}: {
  value: CurrencyCode;
  onChange: (code: CurrencyCode) => void;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Закриття по кліку повз і по Escape — рідний <select> робить це сам,
  // кастомний дропдаун доводиться вчити вручну.
  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="currency-select">
      <span className="text-sm themed-text-muted">{label}</span>
      <div className="currency-select-anchor">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={`${label}: ${value}`}
          className={`currency-select-trigger ${open ? "open" : ""}`}
        >
          <span className="currency-select-code">{value}</span>
          <span className="currency-select-symbol">
            {CURRENCIES[value].symbol}
          </span>
          <svg
            className="chevron"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {open && (
          <ul className="currency-dropdown" role="listbox" aria-label={label}>
            {CURRENCY_CODES.map((code) => (
              <li key={code} role="option" aria-selected={code === value}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(code);
                    setOpen(false);
                  }}
                  className={`currency-dropdown-item ${
                    code === value ? "active" : ""
                  }`}
                >
                  <span className="currency-select-code">{code}</span>
                  <span className="currency-select-symbol">
                    {CURRENCIES[code].symbol}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
