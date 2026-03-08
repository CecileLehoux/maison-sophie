"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/soins", label: "Nos Soins" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTransparent = isHome && !scrolled && !open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent"
          : "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DDD0]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            style={{ fontFamily: "var(--font-display)" }}
            className={`text-2xl font-light tracking-wide transition-colors duration-500 ${
              isTransparent ? "text-white" : "text-[#1C1208]"
            }`}
          >
            Maison Sophie
          </span>
          <span
            className={`text-[9px] tracking-[0.3em] uppercase transition-colors duration-500 ${
              isTransparent ? "text-white/60" : "text-[#8A7D6B]"
            }`}
          >
            Centre Esthétique · Tournefeuille
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 ${
                isTransparent
                  ? pathname === l.href
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                  : pathname === l.href
                  ? "text-[#1C1208]"
                  : "text-[#8A7D6B] hover:text-[#1C1208]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.planity.com/maison-sophie-31170-tournefeuille"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[11px] tracking-[0.18em] uppercase px-6 py-2.5 border transition-all duration-300 ${
              isTransparent
                ? "border-white/50 text-white hover:bg-white hover:text-[#1C1208]"
                : "border-[#C8963E] text-[#C8963E] hover:bg-[#C8963E] hover:text-white"
            }`}
          >
            Prendre RDV
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-px transition-all duration-300 ${
                isTransparent ? "bg-white" : "bg-[#1C1208]"
              } ${i === 0 && open ? "translate-y-2 rotate-45" : ""} ${
                i === 1 && open ? "opacity-0 w-0" : ""
              } ${i === 2 && open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FAF7F2] border-t border-[#E8DDD0] px-8 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[11px] tracking-[0.25em] uppercase text-[#1C1208]"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.planity.com/maison-sophie-31170-tournefeuille"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.2em] uppercase text-center px-6 py-3 border border-[#C8963E] text-[#C8963E]"
          >
            Prendre RDV
          </a>
        </div>
      )}
    </header>
  );
}
