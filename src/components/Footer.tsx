import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p
            style={{ fontFamily: "var(--font-display)" }}
            className="text-2xl font-light text-white mb-1"
          >
            Maison Sophie
          </p>
          <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
            Centre Technico-Esthétique
          </p>
          <p className="text-sm leading-relaxed">
            Expert en soins du corps et technologies bien-être à Tournefeuille.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>122, Av. du Marquisat</li>
            <li>31170 Tournefeuille</li>
            <li>
              <a href="tel:+33617805053" className="hover:text-white transition-colors">
                06 17 80 50 53
              </a>
            </li>
          </ul>
        </div>

        {/* Horaires */}
        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">Horaires</h3>
          <ul className="space-y-1.5 text-sm">
            <li className="flex justify-between gap-4">
              <span>Lundi – Vendredi</span>
              <span className="text-white/90">9h – 19h</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Samedi</span>
              <span className="text-white/90">9h – 12h</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Dimanche</span>
              <span className="text-white/40">Fermé</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/30">
        <p>© {new Date().getFullYear()} Maison Sophie. Tous droits réservés.</p>
        <div className="flex gap-4">
          <Link href="/mentions-legales" className="hover:text-white/60 transition-colors">
            Mentions légales
          </Link>
          <a
            href="https://www.planity.com/maison-sophie-31170-tournefeuille"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Réserver en ligne
          </a>
        </div>
      </div>
    </footer>
  );
}
