import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tarifs épilation laser, EstheLED, pressothérapie et soins sportifs à Tournefeuille. Consultation gratuite avant toute première séance. Réservez en ligne.",
  alternates: { canonical: "https://maisonsophie.fr/tarifs" },
  openGraph: {
    title: "Tarifs | Maison Sophie",
    description:
      "Épilation laser, EstheLED, pressothérapie et soins sportifs à Tournefeuille. Tous nos tarifs en détail.",
    url: "https://maisonsophie.fr/tarifs",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "Tarifs Maison Sophie Tournefeuille" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs | Maison Sophie",
    description: "Tous nos tarifs à Tournefeuille — épilation laser, EstheLED, pressothérapie, soins sportifs.",
    images: ["/images/hero.jpg"],
  },
};

const RDV_URL = "https://www.planity.com/maison-sophie-31170-tournefeuille";

type Service = { name: string; price: string; duration: string; desc?: string };
type Category = {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  note?: string;
  soinSlug?: string;
  services: Service[];
};

const categories: Category[] = [
  {
    id: "laser",
    title: "Épilation Laser",
    subtitle: "Femme & Homme — Résultats durables",
    color: "#C8963E",
    soinSlug: "laser",
    note: "Consultation gratuite et obligatoire avant la première séance. Réductions : -20% pour 2 zones, -30% pour 3 zones.",
    services: [
      { name: "Petites zones", price: "40 €", duration: "20 min" },
      { name: "Aisselles", price: "60 €", duration: "20 min" },
      { name: "Demi-bras", price: "100 €", duration: "30 min" },
      { name: "Bras entiers", price: "130 €", duration: "30 min" },
      { name: "Épaules (nuque offerte)", price: "100 €", duration: "30 min" },
      { name: "Dos bas", price: "80 €", duration: "20 min" },
      { name: "Dos entier", price: "200 €", duration: "45 min" },
      { name: "Pectoraux ou abdomen", price: "60 €", duration: "30 min" },
      { name: "Torse complet", price: "120 €", duration: "45 min" },
      { name: "Ligne du nombril / sillon interfessier", price: "40 €", duration: "20 min" },
      { name: "Maillot simple", price: "70 €", duration: "20 min" },
      { name: "Maillot échancré (+ ligne nombril offerte)", price: "80 €", duration: "30 min" },
      { name: "Maillot intégral (+ SIF + ligne nombril offerts)", price: "120 €", duration: "30 min" },
      { name: "Fesses (SIF offert)", price: "80 €", duration: "30 min" },
      { name: "Demi-jambes (genoux + pieds offerts)", price: "130 €", duration: "45 min" },
      { name: "Jambes entières (pieds offerts)", price: "220 €", duration: "60 min" },
      { name: "Consultation Laser", price: "Gratuit", duration: "45 min", desc: "Obligatoire avant la 1ère séance" },
    ],
  },
  {
    id: "laser-multi",
    title: "Laser — Forfaits multi-zones",
    subtitle: "Combinaisons populaires avec réduction",
    color: "#C8963E",
    soinSlug: "laser",
    services: [
      { name: "Maillot simple + aisselles", price: "100 €", duration: "30 min" },
      { name: "Maillot intégral + aisselles", price: "140 €", duration: "60 min" },
      { name: "½ jambes + aisselles", price: "150 €", duration: "60 min" },
      { name: "½ jambes + maillot simple", price: "160 €", duration: "60 min" },
      { name: "½ jambes + maillot intégral", price: "200 €", duration: "75 min" },
      { name: "½ jambes + aisselles + maillot intégral", price: "220 €", duration: "90 min" },
      { name: "Jambes entières + aisselles", price: "220 €", duration: "60 min" },
      { name: "Jambes entières + maillot simple", price: "230 €", duration: "75 min" },
      { name: "Jambes entières + maillot intégral", price: "270 €", duration: "60 min" },
      { name: "Jambes entières + aisselles + maillot intégral", price: "280 €", duration: "90 min" },
      { name: "Forfait personnalisé", price: "Sur devis", duration: "15 min", desc: "Contactez-nous pour un devis adapté" },
    ],
  },
  {
    id: "estheled-visage",
    title: "EstheLED — Soins Visage",
    subtitle: "Photobiomodulation LED · Anti-âge, éclat, imperfections",
    color: "#44b4e7",
    soinSlug: "estheled",
    note: "Consultation gratuite et obligatoire avant la première séance.",
    services: [
      { name: "Séance découverte / entretien", price: "35 €", duration: "30 min" },
      { name: "Cure Anti-âge Lumière", price: "300 €", duration: "45 min", desc: "Agit sur les rides, ridules et perte de fermeté" },
      { name: "Cure Glow & Éclat", price: "190 €", duration: "30 min", desc: "Peaux en manque d'éclat et de luminosité" },
      { name: "Cure Peau Apaisée", price: "190 €", duration: "30 min", desc: "Peaux sensibles, réactives, rougeurs" },
      { name: "Cure Peau Nette", price: "190 €", duration: "30 min", desc: "Peaux sujettes aux imperfections" },
      { name: "Cure Peau Parfaite — Mariée", price: "230 €", duration: "60 min", desc: "Protocole spécial mariage" },
      { name: "Consultation EstheLED", price: "Gratuit", duration: "20 min", desc: "Obligatoire avant la 1ère séance" },
    ],
  },
  {
    id: "estheled-cheveux",
    title: "EstheLED — Soin Cheveux",
    subtitle: "Photobiomodulation · Densité, vitalité, cuir chevelu",
    color: "#44b4e7",
    soinSlug: "estheled",
    services: [
      { name: "Séance découverte / entretien", price: "35 €", duration: "30 min" },
      { name: "Cure Densité & Vitalité", price: "300 €", duration: "30 min", desc: "Chute saisonnière, perte de densité" },
      { name: "Cure Cuir Chevelu Apaisé", price: "120 €", duration: "15 min", desc: "Démangeaisons, irritations, pellicules" },
      { name: "Consultation EstheLED", price: "Gratuit", duration: "20 min", desc: "Obligatoire avant la 1ère séance" },
    ],
  },
  {
    id: "pressotherapie",
    title: "Pressothérapie",
    subtitle: "Drainage, circulation, récupération sportive",
    color: "#8BA888",
    soinSlug: "pressotherapie",
    services: [
      { name: "Séance à l'unité", price: "25 €", duration: "30 min" },
      { name: "Cure 5 séances + 1 offerte", price: "125 €", duration: "30 min / séance", desc: "La 6e séance est offerte" },
    ],
  },
  {
    id: "sportifs",
    title: "Soins Sportifs",
    subtitle: "Récupération, performance, mobilité",
    color: "#C8963E",
    soinSlug: "sportifs",
    services: [
      {
        name: "Récupération Express",
        price: "65 €",
        duration: "60 min",
        desc: "Pressothérapie + 30 min de massage ciblé. Idéal dans les 24–72h après l'effort.",
      },
      {
        name: "Récupération Profonde",
        price: "90 €",
        duration: "90 min",
        desc: "LED + pressothérapie + massage global 45 min. Soin complet post-effort.",
      },
      {
        name: "Préparation Compétition",
        price: "60 €",
        duration: "45 min",
        desc: "Soin énergisant avec massage d'activation avant un entraînement ou une compétition.",
      },
    ],
  },
  {
    id: "massages",
    title: "Massages",
    subtitle: "Détente musculaire ciblée",
    color: "#C8963E",
    services: [
      { name: "Massage sportif du dos", price: "50 €", duration: "45 min" },
      { name: "Massage sportif des jambes", price: "50 €", duration: "45 min" },
    ],
  },
];

// Ancres de navigation
const navAnchors = [
  { id: "laser", label: "Épilation Laser" },
  { id: "estheled-visage", label: "EstheLED" },
  { id: "pressotherapie", label: "Pressothérapie" },
  { id: "sportifs", label: "Soins Sportifs" },
  { id: "massages", label: "Massages" },
];

export default function TarifsPage() {
  return (
    <main className="pt-20">
      {/* ── Header ────────────────────────────────────────────── */}
      <section className="bg-[#F2EDE4] py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8963E] mb-4">Maison Sophie</p>
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-6xl md:text-7xl font-light text-[#1C1208] leading-tight max-w-2xl"
          >
            Nos tarifs
          </h1>
          <p className="mt-6 text-[#8A7D6B] max-w-xl leading-relaxed">
            Chaque soin commence par une consultation gratuite. Les tarifs ci-dessous
            sont indicatifs — le protocole final est toujours défini ensemble lors du premier rendez-vous.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={RDV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 border border-[#C8963E] text-[#C8963E] text-[11px] tracking-[0.2em] uppercase hover:bg-[#C8963E] hover:text-white transition-all duration-300"
            >
              Prendre rendez-vous
            </a>
            <Link
              href="/soins"
              className="inline-block px-8 py-3.5 border border-[#1C1208]/20 text-[#8A7D6B] text-[11px] tracking-[0.2em] uppercase hover:border-[#1C1208] hover:text-[#1C1208] transition-all duration-300"
            >
              Découvrir nos soins
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bandeau info consultation gratuite ────────────────── */}
      <div className="bg-[#1C1208] px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-[#C8963E] text-lg">✦</span>
            <p className="text-white/70 text-[12px] leading-relaxed">
              La consultation de diagnostic est <strong className="text-white">100 % gratuite</strong> et sans engagement avant toute première séance laser ou EstheLED.
            </p>
          </div>
          <a
            href={`tel:+33617805053`}
            className="text-[#C8963E] text-[11px] tracking-[0.15em] uppercase whitespace-nowrap hover:text-white transition-colors"
          >
            06 17 80 50 53
          </a>
        </div>
      </div>

      {/* ── Nav ancres ────────────────────────────────────────── */}
      <nav className="sticky top-20 z-30 bg-[#FAF7F2] border-b border-[#E8DDD0] overflow-x-auto">
        <div className="max-w-7xl mx-auto px-8 flex gap-1 py-2 whitespace-nowrap">
          {navAnchors.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-5 py-2 text-[11px] tracking-[0.1em] uppercase text-[#8A7D6B] hover:text-[#1C1208] hover:bg-[#F2EDE4] rounded transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Tableaux de tarifs ────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-8 py-16 space-y-20">
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id}>
            {/* En-tête de catégorie */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="block w-4 h-px" style={{ backgroundColor: cat.color }} />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#8A7D6B]">
                    {cat.subtitle}
                  </span>
                </div>
                <h2
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-3xl md:text-4xl font-light text-[#1C1208]"
                >
                  {cat.title}
                </h2>
              </div>
              {cat.soinSlug && (
                <Link
                  href={`/soins/${cat.soinSlug}`}
                  className="text-[11px] tracking-[0.15em] uppercase text-[#8A7D6B] hover:text-[#C8963E] transition-colors whitespace-nowrap"
                >
                  En savoir plus →
                </Link>
              )}
            </div>

            {/* Note */}
            {cat.note && (
              <div
                className="mb-6 p-5 border-l-2 text-[13px] text-[#8A7D6B] leading-relaxed"
                style={{ borderColor: cat.color, backgroundColor: `${cat.color}08` }}
              >
                {cat.note}
              </div>
            )}

            {/* Tableau des prestations */}
            <div className="border border-[#E8DDD0] overflow-hidden">
              {cat.services.map((s, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-7 py-5 border-b border-[#E8DDD0] last:border-0 hover:bg-[#F2EDE4] transition-colors"
                >
                  <div className="flex-1">
                    <p className="text-[14px] text-[#1C1208] font-medium">{s.name}</p>
                    {s.desc && (
                      <p className="text-[12px] text-[#8A7D6B] mt-1 italic">{s.desc}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-8 shrink-0">
                    <span className="text-[12px] text-[#8A7D6B]">{s.duration}</span>
                    <span
                      className="text-[14px] font-medium min-w-[70px] text-right"
                      style={{ color: s.price === "Gratuit" ? "#8BA888" : "#1C1208" }}
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

      {/* ── CTA Final ─────────────────────────────────────────── */}
      <section className="bg-[#1C1208] py-24 px-8 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8963E] mb-6">Réserver</p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl font-light text-white mb-6"
          >
            Pas sûre par<br />
            <em className="text-white/60">où commencer ?</em>
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-md mx-auto">
            La consultation de diagnostic est gratuite et sans engagement.
            Sophie vous guidera vers le soin le plus adapté à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={RDV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-[#C8963E] text-[#C8963E] text-[11px] tracking-[0.2em] uppercase hover:bg-[#C8963E] hover:text-white transition-all"
            >
              Prendre rendez-vous
            </a>
            <a
              href="tel:+33617805053"
              className="px-10 py-4 border border-white/20 text-white/60 text-[11px] tracking-[0.2em] uppercase hover:border-white/50 hover:text-white transition-all"
            >
              06 17 80 50 53
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
