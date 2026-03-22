"use client";

import { useEffect } from "react";

export function ClarityAnalytics() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    const id = process.env.NEXT_PUBLIC_CLARITY_ID;
    if (!id) return;

    const init = async () => {
      const { default: Clarity } = await import("@microsoft/clarity");
      Clarity.init(id);
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => init());
    } else {
      setTimeout(() => init(), 3000);
    }
  }, []);

  return null;
}
