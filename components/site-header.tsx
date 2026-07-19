"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { brand, collections } from "@/data/store";
import { cn } from "@/lib/utils";

import { useShop } from "./shop-provider";
import { useCollectionAccentColor } from "./use-collection-accent-color";

const navigationBeforeCollections = [
  { href: collections.prints.href, label: collections.prints.navLabel },
];

const navigationAfterCollections = [
  { href: "/about", label: "ABOUT" },
];

const collectionNavigation = [
  { href: collections.collections.href, label: "All Collections" },
  { href: `${collections.collections.href}?filter=aquarium-sapientum`, label: "Aquarium Sapientum" },
  { href: `${collections.collections.href}?filter=flora-and-fauna`, label: "Flora and Fauna" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const lastScrollYRef = useRef(0);
  const collectionMenuRef = useRef<HTMLDivElement>(null);
  const mobileCollectionMenuRef = useRef<HTMLDivElement>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionMenuOpen, setCollectionMenuOpen] = useState(false);
  const { openSearch } = useShop();
  const accentColor = useCollectionAccentColor();

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    function handleScroll() {
      if (mobileMenuOpen) {
        return;
      }

      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      if (currentScrollY <= 16) {
        setIsHeaderVisible(true);
      } else if (scrollDelta > 4) {
        setIsHeaderVisible(false);
      } else if (scrollDelta < -4) {
        setIsHeaderVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node;
      const pointerInDesktopMenu = collectionMenuRef.current?.contains(target);
      const pointerInMobileMenu = mobileCollectionMenuRef.current?.contains(target);

      if (!pointerInDesktopMenu && !pointerInMobileMenu) {
        setCollectionMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  function isActive(href: string) {
    return href === "/" ? pathname === href : pathname.startsWith(href);
  }

  function toggleMobileMenu() {
    setMobileMenuOpen((current) => {
      const nextOpen = !current;

      if (nextOpen) {
        setIsHeaderVisible(true);
      }

      return nextOpen;
    });
  }

  function closeMenu() {
    setMobileMenuOpen(false);
    setCollectionMenuOpen(false);
  }

  function handleSearchOpen() {
    closeMenu();
    openSearch();
  }

  function toggleCollectionMenu() {
    setCollectionMenuOpen((current) => !current);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-black/10 transition-transform duration-300 ease-out will-change-transform",
        !accentColor && "bg-white/95",
        isHeaderVisible ? "translate-y-0" : "-translate-y-full",
      )}
      style={accentColor ? { backgroundColor: accentColor } : undefined}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between gap-6">
          <Link
            href="/"
            className="font-serif text-xl tracking-[0.22em] text-black transition-opacity hover:opacity-70 sm:text-2xl"
            onClick={closeMenu}
          >
            {brand.headerName}
          </Link>

          <div className="flex items-center gap-4 md:gap-7">
            <nav
              aria-label="Primary"
              className="hidden items-center gap-6 text-[10px] uppercase tracking-[0.28em] text-black/68 md:flex"
            >
              {navigationBeforeCollections.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-opacity hover:opacity-60",
                    isActive(item.href) && "text-black",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div ref={collectionMenuRef} className="relative">
                <button
                  type="button"
                  onClick={toggleCollectionMenu}
                  className={cn(
                    "uppercase transition-opacity hover:opacity-60",
                    isActive(collections.collections.href) && "text-black",
                  )}
                  aria-expanded={collectionMenuOpen}
                  aria-controls="collections-navigation-menu"
                >
                  {collections.collections.navLabel}
                </button>
                <div
                  id="collections-navigation-menu"
                  className={cn(
                    "absolute left-1/2 top-full z-50 mt-4 w-64 -translate-x-1/2 border border-black/10 bg-white px-4 py-3 text-left shadow-sm transition-[opacity,transform]",
                    collectionMenuOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0",
                  )}
                >
                  <div className="flex flex-col gap-3">
                    {collectionNavigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className="text-[10px] uppercase tracking-[0.24em] text-black/62 transition-opacity hover:opacity-60"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {navigationAfterCollections.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-opacity hover:opacity-60",
                    isActive(item.href) && "text-black",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              onClick={handleSearchOpen}
              className="flex h-8 w-8 items-center justify-center text-black/70 transition-opacity hover:opacity-60"
              aria-label="Open search"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="M16 16l4 4" />
              </svg>
            </button>
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-[10px] uppercase tracking-[0.3em] text-black/70 transition-opacity hover:opacity-60 md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              Menu
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={cn(
            "overflow-hidden transition-[max-height,opacity] duration-200 md:hidden",
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav
            aria-label="Mobile primary"
            className="flex flex-col gap-4 border-t border-black/10 py-5 text-[10px] uppercase tracking-[0.28em] text-black/70"
          >
            {navigationBeforeCollections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={cn("transition-opacity hover:opacity-60", isActive(item.href) && "text-black")}
              >
                {item.label}
              </Link>
            ))}
            <div ref={mobileCollectionMenuRef} className="flex flex-col gap-3">
              <button
                type="button"
                onClick={toggleCollectionMenu}
                className={cn(
                  "text-left uppercase transition-opacity hover:opacity-60",
                  isActive(collections.collections.href) && "text-black",
                )}
                aria-expanded={collectionMenuOpen}
                aria-controls="mobile-collections-navigation-menu"
              >
                {collections.collections.navLabel}
              </button>
              <div
                id="mobile-collections-navigation-menu"
                className={cn(
                  "flex flex-col gap-3 overflow-hidden pl-4 transition-[max-height,opacity]",
                  collectionMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                {collectionNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="text-black/55 transition-opacity hover:opacity-60"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            {navigationAfterCollections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={cn("transition-opacity hover:opacity-60", isActive(item.href) && "text-black")}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
