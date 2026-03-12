"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const INDUSTRIES = [
  { label: "Supplements", href: "/industries/supplements" },
  { label: "Cosmetics",   href: "/industries/cosmetics"   },
  { label: "Breweries",   href: "/industries/breweries"   },
];

const NAV_LINKS = [
  { label: "Industries",       href: "#",                  children: INDUSTRIES },
  { label: "Process",          href: "/process"                                 },
  { label: "Quote Calculator", href: "/quote-calculator"                        },
  { label: "Samples",          href: "/request-sample"                          },
  { label: "Contact",          href: "/contact"                                 },
];

// Shared active/hover styles
const linkBase = "text-sm font-medium transition-colors duration-150";
const linkIdle = "text-white/75 hover:text-[#B87333]";
const linkActive = "text-[#B87333]";

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isIndustriesActive = INDUSTRIES.some((i) => pathname.startsWith(i.href));

  return (
    <header className="sticky top-0 z-50 bg-[#2D2D2D] border-b border-white/8">
      <nav className="container mx-auto px-4 h-15 flex items-center justify-between" style={{ height: "60px" }}>

        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white hover:text-[#B87333] transition-colors duration-150 flex-shrink-0"
        >
          West Label Co.
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) =>
            link.children ? (
              /* Industries dropdown */
              <div
                key={link.label}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => { clearTimeout(closeTimer.current); setDropdownOpen(true); }}
                onMouseLeave={() => { closeTimer.current = setTimeout(() => setDropdownOpen(false), 150); }}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                  className={cn(
                    linkBase,
                    "flex items-center gap-1",
                    isIndustriesActive ? linkActive : linkIdle
                  )}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      dropdownOpen && "rotate-180"
                    )}
                  />
                </button>

                {/* Dropdown panel */}
                <div
                  className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 rounded-lg bg-[#2D2D2D] border border-white/10 shadow-xl overflow-hidden transition-all duration-150",
                    dropdownOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 pointer-events-none"
                  )}
                >
                  {link.children.map((child, idx) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        "block px-4 py-2.5 text-sm transition-colors duration-100",
                        idx < link.children!.length - 1 && "border-b border-white/8",
                        pathname === child.href
                          ? "text-[#B87333] font-medium bg-white/5"
                          : "text-white/75 hover:text-[#B87333] hover:bg-white/5"
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              /* Regular link */
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  linkBase,
                  pathname === link.href ? linkActive : linkIdle
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 text-white/75 hover:text-white transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer — slide down */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-white/8",
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 pb-5 pt-3 flex flex-col gap-0.5">

          {/* Industries accordion */}
          <button
            className={cn(
              "flex items-center justify-between w-full px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
              isIndustriesActive ? "text-[#B87333]" : "text-white/75 hover:text-white"
            )}
            onClick={() => setMobileIndustriesOpen((v) => !v)}
          >
            Industries
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                mobileIndustriesOpen && "rotate-180"
              )}
            />
          </button>

          <div
            className={cn(
              "overflow-hidden transition-all duration-200",
              mobileIndustriesOpen ? "max-h-40" : "max-h-0"
            )}
          >
            <div className="pl-4 pb-1 flex flex-col gap-0.5">
              {INDUSTRIES.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-sm transition-colors",
                    pathname === child.href
                      ? "text-[#B87333] font-medium"
                      : "text-white/60 hover:text-[#B87333]"
                  )}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Flat links */}
          {NAV_LINKS.filter((l) => !l.children).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-[#B87333]"
                  : "text-white/75 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
