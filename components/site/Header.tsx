"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

export default function Header() {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = [...links.map((l) => l.id), "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-3 py-2 transition-all duration-300 sm:px-4",
          scrolled || open
            ? "border-border bg-background/75 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <Link href="/#top" className="group flex items-center gap-2.5 rounded-lg py-1" onClick={() => setOpen(false)}>
          <span className="grid size-8 place-items-center rounded-lg bg-linear-to-br from-primary to-signal font-mono text-xs font-bold text-primary-foreground transition-transform group-hover:rotate-6">
            HN
          </span>
          <span className="text-sm font-medium tracking-tight">Hamed Namazi</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  active === link.id && "text-foreground",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-px h-px origin-left scale-x-0 bg-linear-to-r from-primary to-signal transition-transform duration-300",
                    active === link.id && "scale-x-100",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-lg bg-foreground px-3.5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85 sm:inline-flex"
          >
            Get in touch
          </a>
          <button
            type="button"
            className="grid size-9 place-items-center rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="animate-in fade-in slide-in-from-top-2 mx-auto mt-2 max-w-6xl rounded-2xl border bg-background/90 p-2 shadow-xl backdrop-blur-xl duration-200 md:hidden"
        >
          <ul className="flex flex-col">
            {[...links, { id: "contact", label: "Contact" }].map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex rounded-xl px-4 py-3 text-base text-muted-foreground hover:bg-accent hover:text-foreground",
                    active === link.id && "text-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
