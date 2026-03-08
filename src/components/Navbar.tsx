"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Soins & Tarifs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#F0EAE2]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            style={{ fontFamily: "var(--font-display)" }}
            className="text-xl font-medium tracking-wide text-[#2D2D2D]"
          >
            Maison Sophie
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#7A7A7A]">
            Centre Esthétique · Tournefeuille
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-[#7A7A7A] hover:text-[#2D2D2D] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.planity.com/maison-sophie-31170-tournefeuille"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-5 py-2 bg-[#C49A6C] text-white rounded-full hover:bg-[#A07848] transition-colors tracking-wide"
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
          <span className={`block w-6 h-0.5 bg-[#2D2D2D] transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#2D2D2D] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#2D2D2D] transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#F0EAE2] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-wide text-[#2D2D2D]"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.planity.com/maison-sophie-31170-tournefeuille"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-center px-5 py-2.5 bg-[#C49A6C] text-white rounded-full"
          >
            Prendre RDV
          </a>
        </div>
      )}
    </header>
  );
}
