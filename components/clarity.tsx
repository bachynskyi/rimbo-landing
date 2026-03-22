"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export function ClarityAnalytics() {
  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_CLARITY_ID;
    if (id) {
      const init = () => Clarity.init(id);
      if ("requestIdleCallback" in window) {
        requestIdleCallback(init);
      } else {
        setTimeout(init, 3000);
      }
    }
  }, []);

  return null;
}
