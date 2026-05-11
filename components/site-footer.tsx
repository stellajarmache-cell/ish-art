import Link from "next/link";

import { footerLinks } from "@/data/store";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.26em] text-black/60"
        >
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition-opacity hover:opacity-60">
                {link.label}
              </Link>
            ))}
        </nav>
        <p className="text-[11px] uppercase tracking-[0.22em] text-black/55">© 2026 Stella Ziegler</p>
      </div>
    </footer>
  );
}
