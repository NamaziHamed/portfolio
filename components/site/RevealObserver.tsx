"use client";

import { useEffect } from "react";

/**
 * Fades in every element marked with `data-reveal` as it scrolls into view.
 * Elements already on screen are shown before the page is marked ready, so
 * nothing above the fold flickers, and without JS everything stays visible.
 */
export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    for (const el of targets) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.dataset.shown = "";
    }
    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.shown = "";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    for (const el of targets) if (!("shown" in el.dataset)) observer.observe(el);

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
