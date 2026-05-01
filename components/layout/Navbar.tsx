"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(`#${visible[0].target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-bg/60 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/40">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <a
            href="#"
            className="text-3xl text-fg transition-colors hover:text-accent"
            style={{ fontFamily: "var(--font-signature)" }}
          >
            {site.name}
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = activeId === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium transition-colors",
                      active ? "text-fg" : "text-muted hover:text-fg"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle menu"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-pill md:hidden",
                "border border-border bg-surface/50 text-muted backdrop-blur-sm",
                "transition-colors hover:border-accent hover:text-accent"
              )}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <ul className="flex flex-col gap-1 border-t border-border/50 py-4 md:hidden">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                    activeId === link.href
                      ? "bg-accent/10 text-accent"
                      : "text-muted hover:bg-surface hover:text-fg"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </header>
  );
}
