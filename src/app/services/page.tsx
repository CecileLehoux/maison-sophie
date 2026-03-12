import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soins & Tarifs",
  description:
    "Épilation laser, EstheLED, pressothérapie, massages et soins sportifs à Tournefeuille. Tarifs détaillés et prise de RDV en ligne.",
  alternates: { canonical: "https://maison-sophie.fr/services" },
  openGraph: {
    title: "Soins & Tarifs | Maison Sophie",
    description:
      "Épilation laser, EstheLED, pressothérapie, massages et soins sportifs à Tournefeuille. Tarifs détaillés.",
    url: "https://maison-sophie.fr/services",
    images: [{ url: "/images/photo-3.jpg", width: 1200, height: 630, alt: "Soins et tarifs Maison Sophie Tournefeuille" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soins & Tarifs | Maison Sophie",
    description: "Épilation laser, EstheLED, pressothérapie et soins sportifs à Tournefeuille.",
    images: ["/images/photo-3.jpg"],
  },
};

const RDV_URL = "https://www.planity.com/maison-sophie-31170-tournefeuille";

type Service = { name: string; price: string; duration: string; desc?: string };
type Category = { id: string; icon: string; title: string; subtitle: string; color: string; note?: string; services: Service[] };

const categories: Category[] = [
  {
    id: "laser",
    icon: "⚡️",
    title: "Épilation Laser",
    subtitle: "Femme & Homme — Résultats durables",
    color: "#FC8181",
    note: "Consultation gratuite et obligatoire avant la première séance. Réductions : -20% pour 2 zones, -30% pour 3 zones.",
    services: [
      { name: "Petites zones", price: "40€", duration: "20 min" },
      { name: "Aisselles", price: "60€", duration: "20 min" },
      { name: "Demi-bras", price: "100€", duration: "30 min" },
      { name: "Bras entiers", price: "130€", duration: "30 min" },
      { name: "Épaules (nuque offerte)", price: "100€", duration: "30 min" },
      { name: "Dos bas", price: "80€", duration: "20 min" },
      { name: "Dos entier", price: "200€", duration: "45 min" },
      { name: "Pectoraux ou abdomen", price: "60€", duration: "30 min" },
      { name: "Torse complet", price: "120€", duration: "45 min" },
      { name: "Ligne du nombril / sillon interfessier", price: "40€", duration: "20 min" },
      { name: "Maillot simple", price: "70€", duration: "20 min" },
      { name: "Maillot échancré (+ ligne nombril offerte)", price: "80€", duration: "30 min" },
      { name: "Maillot intégral (+ SIF + ligne nombril offerts)", price: "120€", duration: "30 min" },
      { name: "Fesses (SIF offert)", price: "80€", duration: "30 min" },
      { name: "Demi-jambes (genoux + pieds offerts)", price: "130€", duration: "45 min" },
      { name: "Jambes entières (pieds offerts)", price: "220€", duration: "60 min" },
      { name: "Consultation Laser", price: "Gratuit", duration: "45 min", desc: "Obligatoire avant la 1ère séance" },
    ],
  },
  {
    id: "laser-multi",
    icon: "⚡️✨",
    title: "Épilation Laser — Forfaits multi-zones",
    subtitle: "Combinaisons populaires",
    color: "#FC8181",
    services: [
      { name: "Maillot simple + aisselles", price: "100€", duration: "30 min" },
      { name: "Maillot intégral + aisselles", price: "140€", duration: "60 min" },
      { name: "½ jambes + aisselles", price: "150€", duration: "60 min" },
      { name: "½ jambes + maillot simple", price: "160€", duration: "60 min" },
      { name: "½ jambes + maillot intégral", price: "200€", duration: "75 min" },
      { name: "½ jambes + aisselles + maillot intégral", price: "220€", duration: "90 min" },
      { name: "Jambes entières + aisselles", price: "220€", duration: "60 min" },
      { name: "Jambes entières + maillot simple", price: "230€", duration: "75 min" },
      { name: "Jambes entières + maillot intégral", price: "270€", duration: "60 min" },
      { name: "Jambes entières + aisselles + maillot intégral", price: "280€", duration: "90 min" },
      { name: "Forfait personnalisé", price: "Sur devis", duration: "15 min", desc: "Contactez-nous" },
    ],
  },
  {
    id: "estheled",
    icon: "💡",
    title: "EstheLED — Soins Visage",
    subtitle: "Photobiomodulation LED · Anti-âge, éclat, imperfections",
    color: "#44b4e7",
    note: "Consultation gratuite et obligatoire avant la première séance.",
    services: [
      { name: "Séance découverte / entretien", price: "35€", duration: "30 min" },
      { name: "Cure Anti-âge Lumière", price: "300€", duration: "45 min", desc: "Agit sur les rides, ridules et perte de fermeté" },
      { name: "Cure Glow & Éclat", price: "190€", duration: "30 min", desc: "Peaux en manque d'éclat et de luminosité" },
      { name: "Cure Peau Apaisée", price: "190€", duration: "30 min", desc: "Peaux sensibles, réactives, rougeurs" },
      { name: "Cure Peau Nette", price: "190€", duration: "30 min", desc: "Peaux sujettes aux imperfections" },
      { name: "Cure Peau Parfaite — Mariée", price: "230€", duration: "60 min", desc: "Protocole spécial mariage" },
      { name: "Consultation EstheLED", price: "Gratuit", duration: "20 min", desc: "Obligatoire avant la 1ère séance" },
    ],
  },
  {
    id: "estheled-cheveux",
    icon: "💡",
    title: "EstheLED — Soin Cheveux",
    subtitle: "Photobiomodulation · Densité, vitalité, cuir chevelu",
    color: "#44b4e7",
    services: [
      { name: "Séance découverte / entretien", price: "35€", duration: "30 min" },
      { name: "Cure Densité & Vitalité", price: "300€", duration: "30 min", desc: "Chute saisonnière, perte de densité" },
      { name: "Cure Cuir Chevelu Apaisé", price: "120€", duration: "15 min", desc: "Démangeaisons, irritations, pellicules" },
      { name: "Consultation EstheLED", price: "Gratuit", duration: "20 min", desc: "Obligatoire avant la 1ère séance" },
    ],
  },
  {
    id: "pression",
    icon: "💨",
    title: "Pressothérapie",
    subtitle: "Drainage, circulation, récupération sportive",
    color: "#F6AD55",
    services: [
      { name: "Séance à l'unité", price: "25€", duration: "30 min" },
      { name: "Cure 5 séances + 1 offerte", price: "125€", duration: "30 min / séance" },
    ],
  },
  {
    id: "sport",
    icon: "🏅",
    title: "Soins Sportifs",
    subtitle: "Récupération, performance, mobilité",
    color: "#C9A5A0",
    services: [
      {
        name: "Récupération Express",
        price: "65€",
        duration: "60 min",
        desc: "Pressothérapie + 30 min de massage ciblé. Idéal dans les 24–72h après l'effort.",
      },
      {
        name: "Récupération Profonde",
        price: "90€",
        duration: "90 min",
        desc: "LED + pressothérapie + massage global 45 min. Soin complet post-effort.",
      },
      {
        name: "Préparation Compétition",
        price: "60€",
        duration: "45 min",
        desc: "Soin énergisant avec massage d'activation avant un entraînement ou une compétition.",
      },
    ],
  },
  {
    id: "massages",
    icon: "💆",
    title: "Massages",
    subtitle: "Détente musculaire ciblée",
    color: "#F6E05E",
    services: [
      { name: "Massage sportif du dos", price: "50€", duration: "45 min" },
      { name: "Massage sportif des jambes", price: "50€", duration: "45 min" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-16">
      {/* Hero section */}
      <section className="bg-[#EAE5DC] py-20 px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C9A5A0] mb-4">
          Maison Sophie · Tournefeuille
        </p>
        <h1
          style={{ fontFamily: "var(--font-display)" }}
          className="text-5xl md:text-6xl font-light text-[#1C1208] mb-4"
        >
          Soins & Tarifs
        </h1>
        <p className="text-[#7A7A7A] max-w-xl mx-auto leading-relaxed">
          Chaque soin est personnalisé. Les consultations de diagnostic pour le laser
          et l&apos;EstheLED sont gratuites et obligatoires avant la première séance.
        </p>
        <a
          href={RDV_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block px-8 py-3.5 bg-[#C9A5A0] text-white text-sm tracking-wide rounded-full hover:bg-[#A8857F] transition-colors"
        >
          Prendre rendez-vous
        </a>
      </section>

      {/* Nav ancres */}
      <nav className="sticky top-16 z-30 bg-white border-b border-[#D4CFC8] overflow-x-auto">
        <div className="max-w-6xl mx-auto px-6 flex gap-1 py-2 whitespace-nowrap">
          {[
            { id: "laser", label: "⚡️ Laser" },
            { id: "estheled", label: "💡 EstheLED" },
            { id: "pression", label: "💨 Pressothérapie" },
            { id: "sport", label: "🏅 Soins sportifs" },
            { id: "massages", label: "💆 Massages" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-4 py-2 text-sm text-[#7A7A7A] hover:text-[#1C1208] hover:bg-[#EAE5DC] rounded-full transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Catégories */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id}>
            {/* Header catégorie */}
            <div className="flex items-start gap-4 mb-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 mt-1"
                style={{ backgroundColor: `${cat.color}20` }}
              >
                {cat.icon}
              </div>
              <div>
                <h2
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-3xl font-light text-[#1C1208]"
                >
                  {cat.title}
                </h2>
                <p className="text-sm text-[#7A7A7A] mt-1">{cat.subtitle}</p>
              </div>
            </div>

            {/* Note importante */}
            {cat.note && (
              <div className="mb-6 p-4 rounded-xl bg-[#EAE5DC] border-l-4 border-[#C9A5A0] text-sm text-[#7A7A7A]">
                ℹ️ {cat.note}
              </div>
            )}

            {/* Tableau des prestations */}
            <div className="divide-y divide-[#D4CFC8] border border-[#D4CFC8] rounded-2xl overflow-hidden">
              {cat.services.map((s) => (
                <div
                  key={s.name}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-4 hover:bg-[#EAE5DC] transition-colors"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#1C1208]">{s.name}</p>
                    {s.desc && <p className="text-xs text-[#7A7A7A] mt-0.5">{s.desc}</p>}
                  </div>
                  <div className="flex items-center gap-6 shrink-0">
                    <span className="text-xs text-[#7A7A7A]">{s.duration}</span>
                    <span
                      className="text-sm font-medium min-w-[60px] text-right"
                      style={{ color: s.price === "Gratuit" ? "#C9A5A0" : "#1C1208" }}
                    >
                      {s.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#1C1208] py-16 px-6 text-white text-center">
        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="text-4xl font-light mb-4"
        >
          Prêt à réserver ?
        </h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          Disponible 24h/24 en ligne. N&apos;hésitez pas à nous appeler pour toute question.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={RDV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-[#C9A5A0] text-white text-sm tracking-wide rounded-full hover:bg-[#A8857F] transition-colors"
          >
            Réserver en ligne
          </a>
          <Link
            href="/contact"
            className="px-8 py-3.5 border border-white/30 text-white text-sm tracking-wide rounded-full hover:bg-white/10 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </main>
  );
}
