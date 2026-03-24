"use client";

import { useLayoutEffect } from "react";

export default function ScrollRestorationControl() {
  useLayoutEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return null;
}
