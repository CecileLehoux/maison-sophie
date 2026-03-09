import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1C1208] text-white/60">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <p
            style={{ fontFamily: "var(--font-display)" }}
            className="text-3xl font-light text-white mb-1 tracking-wide"
          >
            Maison Sophie
          </p>
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-5">
            Centre Technico-Esthétique
          </p>
          <p className="text-sm leading-relaxed max-w-sm">
            Votre centre expert en soins du corps et technologies bien-être à Tournefeuille.
            Des protocoles personnalisés pour des résultats durables.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-5">Navigation</h3>
          <ul className="space-y-3 text-sm">
            {[
              { href: "/", label: "Accueil" },
              { href: "/soins", label: "Nos Soins" },
              { href: "/tarifs", label: "Tarifs" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-5">Contact</h3>
          <ul className="space-y-2.5 text-sm">
            <li>122, Av. du Marquisat</li>
            <li>31170 Tournefeuille</li>
            <li>
              <a href="tel:+33617805053" className="hover:text-white transition-colors">
                06 17 80 50 53
              </a>
            </li>
            <li className="pt-2 text-[11px] text-white/40">
              Lun–Ven · 9h–19h<br />Sam · 9h–12h
            </li>
          </ul>
        </div>
      </div>

      {/* Gold divider */}
      <div className="border-t border-[#C9A5A0]/20 max-w-7xl mx-auto px-8 py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/25">
        <p>© {new Date().getFullYear()} Maison Sophie. Tous droits réservés.</p>
        <div className="flex gap-6">
          <Link href="/mentions-legales" className="hover:text-white/50 transition-colors">
            Mentions légales
          </Link>
          <a
            href="https://www.planity.com/maison-sophie-31170-tournefeuille"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/50 transition-colors"
          >
            Réserver en ligne
          </a>
        </div>
      </div>
    </footer>
  );
}
