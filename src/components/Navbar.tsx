"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { soins } from "@/data/soins";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [soinsOpen, setSoinsOpen] = useState(false);
  const [soinsOpenMobile, setSoinsOpenMobile] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTransparent = isHome && !scrolled && !open;
  const isSoinsActive = pathname.startsWith("/soins");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent"
          : "bg-[#EAE5DC]/95 backdrop-blur-md border-b border-[#D4CFC8]"
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
              isTransparent ? "text-white/60" : "text-[#7A7A7A]"
            }`}
          >
            Centre Esthétique · Tournefeuille
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {/* Accueil */}
          <Link
            href="/"
            className={`text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 ${
              isTransparent
                ? pathname === "/" ? "text-white" : "text-white/70 hover:text-white"
                : pathname === "/" ? "text-[#1C1208]" : "text-[#7A7A7A] hover:text-[#1C1208]"
            }`}
          >
            Accueil
          </Link>

          {/* Nos Soins — dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSoinsOpen(true)}
            onMouseLeave={() => setSoinsOpen(false)}
          >
            <button
              className={`flex items-center gap-1.5 text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 ${
                isTransparent
                  ? isSoinsActive ? "text-white" : "text-white/70 hover:text-white"
                  : isSoinsActive ? "text-[#1C1208]" : "text-[#7A7A7A] hover:text-[#1C1208]"
              }`}
            >
              Nos Soins
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${soinsOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[210px] bg-[#EAE5DC]/98 backdrop-blur-md border border-[#D4CFC8] shadow-lg transition-all duration-200 ${
                soinsOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
            >
              {/* Petit triangle */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#EAE5DC] border-l border-t border-[#D4CFC8] rotate-45" />

              <div className="py-2">
                {soins.map((soin) => (
                  <Link
                    key={soin.slug}
                    href={`/soins/${soin.slug}`}
                    className={`block px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${
                      pathname === `/soins/${soin.slug}`
                        ? "text-[#1C1208] bg-[#D4CFC8]/40"
                        : "text-[#7A7A7A] hover:text-[#1C1208] hover:bg-[#D4CFC8]/30"
                    }`}
                  >
                    {soin.title}
                  </Link>
                ))}
                <div className="border-t border-[#D4CFC8] mt-2 pt-2">
                  <Link
                    href="/soins"
                    className="block px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase text-[#C9A5A0] hover:text-[#A8857F] transition-colors duration-200"
                  >
                    Voir tous les soins →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Autres liens */}
          {links.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 ${
                isTransparent
                  ? pathname === l.href ? "text-white" : "text-white/70 hover:text-white"
                  : pathname === l.href ? "text-[#1C1208]" : "text-[#7A7A7A] hover:text-[#1C1208]"
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
                : "border-[#C9A5A0] text-[#C9A5A0] hover:bg-[#C9A5A0] hover:text-white"
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
        <div className="md:hidden bg-[#EAE5DC] border-t border-[#D4CFC8] px-8 py-8 flex flex-col gap-6">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-[11px] tracking-[0.25em] uppercase text-[#1C1208]"
          >
            Accueil
          </Link>

          {/* Nos Soins dépliable */}
          <div>
            <button
              onClick={() => setSoinsOpenMobile(!soinsOpenMobile)}
              className="flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#1C1208] w-full"
            >
              Nos Soins
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${soinsOpenMobile ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {soinsOpenMobile && (
              <div className="mt-3 pl-4 border-l border-[#C9A5A0]/40 flex flex-col gap-3">
                {soins.map((soin) => (
                  <Link
                    key={soin.slug}
                    href={`/soins/${soin.slug}`}
                    onClick={() => { setOpen(false); setSoinsOpenMobile(false); }}
                    className="text-[11px] tracking-[0.2em] uppercase text-[#7A7A7A]"
                  >
                    {soin.title}
                  </Link>
                ))}
                <Link
                  href="/soins"
                  onClick={() => { setOpen(false); setSoinsOpenMobile(false); }}
                  className="text-[11px] tracking-[0.2em] uppercase text-[#C9A5A0]"
                >
                  Voir tous les soins →
                </Link>
              </div>
            )}
          </div>

          {links.slice(1).map((l) => (
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
            className="text-[11px] tracking-[0.2em] uppercase text-center px-6 py-3 border border-[#C9A5A0] text-[#C9A5A0]"
          >
            Prendre RDV
          </a>
        </div>
      )}
    </header>
  );
}
