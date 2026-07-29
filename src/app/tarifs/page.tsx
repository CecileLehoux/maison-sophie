import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tarifs épilation laser, EstheLED, pressothérapie et soins du visage experts à Tournefeuille. Consultation gratuite avant toute première séance. Réservez en ligne.",
  alternates: { canonical: "https://maison-sophie.fr/tarifs" },
  openGraph: {
    title: "Tarifs | Maison Sophie",
    description:
      "Épilation laser, EstheLED, pressothérapie et soins du visage experts à Tournefeuille. Tous nos tarifs en détail.",
    url: "https://maison-sophie.fr/tarifs",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "Tarifs Maison Sophie Tournefeuille" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs | Maison Sophie",
    description: "Tous nos tarifs à Tournefeuille — épilation laser, EstheLED, pressothérapie, soins du visage experts.",
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
    id: "laser-femme",
    title: "Épilation Laser Femme — 1 Zone",
    subtitle: "Résultats durables, protocole personnalisé",
    color: "#C9A5A0",
    soinSlug: "laser",
    note: "Bilan gratuit et obligatoire avant la première séance (délai de 24 à 48h à respecter après le flash test). Offre : pour 7 séances réalisées, la 8e est offerte.",
    services: [
      { name: "Bilan Laser", price: "Gratuit", duration: "45 min", desc: "Obligatoire avant la 1ère séance" },
      { name: "Petites zones (sauf visage)", price: "40 €", duration: "15 min" },
      { name: "Aisselles", price: "60 €", duration: "15 min" },
      { name: "Avant-bras (+ mains)", price: "100 €", duration: "30 min" },
      { name: "Bras entiers", price: "130 €", duration: "40 min" },
      { name: "Ligne du nombril / sillon interfessier", price: "40 €", duration: "20 min" },
      { name: "Maillot simple", price: "70 €", duration: "20 min" },
      { name: "Maillot échancré (ligne du nombril offerte)", price: "80 €", duration: "30 min" },
      { name: "Maillot intégral (ligne du nombril + SIF offerts)", price: "120 €", duration: "30 min" },
      { name: "Fesses (SIF offert)", price: "80 €", duration: "30 min" },
      { name: "Demi-jambes (genoux + pieds offerts)", price: "130 €", duration: "30 min" },
      { name: "Cuisses", price: "150 €", duration: "30 min" },
      { name: "Jambes entières (pieds offerts)", price: "220 €", duration: "1h" },
    ],
  },
  {
    id: "laser-femme-forfait",
    title: "Épilation Laser Femme — Forfaits 2 ou 3 zones",
    subtitle: "Combinaisons multi-zones",
    color: "#C9A5A0",
    soinSlug: "laser",
    services: [
      { name: "Maillot simple + aisselles", price: "100 €", duration: "30 min" },
      { name: "Maillot échancré + aisselles", price: "115 €", duration: "30 min" },
      { name: "Maillot intégral + aisselles", price: "140 €", duration: "30 min" },
      { name: "½ jambes + aisselles", price: "160 €", duration: "40 min" },
      { name: "½ jambes + maillot simple", price: "190 €", duration: "1h" },
      { name: "½ jambes + maillot intégral", price: "230 €", duration: "1h" },
      { name: "½ jambes + aisselles + maillot simple", price: "220 €", duration: "45 min" },
      { name: "½ jambes + aisselles + maillot échancré", price: "230 €", duration: "45 min" },
      { name: "½ jambes + aisselles + maillot intégral", price: "250 €", duration: "1h" },
      { name: "Jambes entières + aisselles", price: "250 €", duration: "1h" },
      { name: "Jambes entières + maillot simple", price: "270 €", duration: "1h15" },
      { name: "Jambes entières + maillot échancré", price: "280 €", duration: "1h20" },
      { name: "Jambes entières + maillot intégral", price: "300 €", duration: "1h" },
      { name: "Jambes entières + aisselles + maillot simple", price: "290 €", duration: "1h15" },
      { name: "Jambes entières + aisselles + maillot échancré", price: "310 €", duration: "1h20" },
      { name: "Jambes entières + aisselles + maillot intégral", price: "330 €", duration: "1h30" },
      { name: "Forfait personnalisé", price: "Sur devis", duration: "15 min", desc: "Contactez-nous pour un devis adapté" },
    ],
  },
  {
    id: "laser-homme",
    title: "Épilation Laser Homme — 1 Zone",
    subtitle: "Résultats durables, protocole personnalisé",
    color: "#C9A5A0",
    soinSlug: "laser",
    note: "Bilan gratuit et obligatoire avant la première séance (délai de 24 à 48h à respecter après le flash test). Offre : pour 9 séances réalisées, la 10e est offerte.",
    services: [
      { name: "Bilan Laser", price: "Gratuit", duration: "45 min", desc: "Obligatoire avant la 1ère séance" },
      { name: "Aisselles", price: "60 €", duration: "15 min" },
      { name: "Avant-bras (+ mains)", price: "130 €", duration: "30 min" },
      { name: "Bras entiers (+ mains)", price: "180 €", duration: "45 min" },
      { name: "Épaules", price: "100 €", duration: "30 min" },
      { name: "Bas du dos", price: "80 €", duration: "20 min" },
      { name: "Dos entier", price: "190 €", duration: "30 min" },
      { name: "Torse", price: "130 €", duration: "30 min" },
      { name: "Ventre", price: "120 €", duration: "30 min" },
      { name: "Fesses", price: "120 €", duration: "30 min" },
      { name: "Demi-jambes", price: "210 €", duration: "30 min" },
      { name: "Jambes entières", price: "300 €", duration: "1h" },
    ],
  },
  {
    id: "laser-homme-forfait",
    title: "Épilation Laser Homme — Forfaits 2 ou 3 zones",
    subtitle: "Combinaisons multi-zones",
    color: "#C9A5A0",
    soinSlug: "laser",
    services: [
      { name: "Torse + aisselles", price: "170 €", duration: "30 min" },
      { name: "Torse + ventre + aisselles", price: "260 €", duration: "45 min" },
      { name: "Torse + aisselles + épaules", price: "240 €", duration: "45 min" },
      { name: "Torse + dos + aisselles", price: "330 €", duration: "1h" },
      { name: "Torse + demi-jambes + aisselles", price: "350 €", duration: "1h15" },
      { name: "Torse + jambes + aisselles", price: "405 €", duration: "1h30" },
    ],
  },
  {
    id: "v-tox-lift",
    title: "V-Tox Lift",
    subtitle: "Soin visage expert — éclat, fermeté, anti-âge",
    color: "#C9A5A0",
    soinSlug: "v-tox-lift",
    note: "Cure de 4 séances espacées de 7 jours conseillée pour un résultat optimal.",
    services: [
      { name: "Séance V-Tox Lift", price: "70 €", duration: "60 min" },
      { name: "Cure 4 séances", price: "250 €", duration: "60 min / séance", desc: "Paiement en 2 fois possible (2 × 125 €)" },
    ],
  },
  {
    id: "hydralips",
    title: "Hydralips",
    subtitle: "Hydratation et embellissement des lèvres",
    color: "#C9A5A0",
    soinSlug: "hydralips",
    note: "Cure de 4 séances espacées de 3 semaines conseillée pour un résultat optimal.",
    services: [
      { name: "Séance Hydralips", price: "35 €", duration: "30 min" },
      { name: "Cure 4 séances", price: "120 €", duration: "30 min / séance", desc: "Au lieu de 140 €" },
    ],
  },
  {
    id: "inflacure",
    title: "Inflacure",
    subtitle: "Peaux sujettes aux rougeurs et aux imperfections",
    color: "#C9A5A0",
    soinSlug: "inflacure",
    note: "Cure de 4 séances conseillée pour un résultat optimal.",
    services: [
      { name: "Séance Inflacure", price: "90 €", duration: "60 min" },
      { name: "Cure 4 séances", price: "320 €", duration: "60 min / séance", desc: "Paiement en 2 fois possible (2 × 160 €)" },
    ],
  },
  {
    id: "thread-fill",
    title: "Thread Fill",
    subtitle: "Fermeté et qualité de la peau",
    color: "#C9A5A0",
    soinSlug: "thread-fill",
    note: "Cure de 4 séances espacées de 15 jours conseillée pour un résultat optimal.",
    services: [
      { name: "Séance Thread Fill", price: "90 €", duration: "60 min" },
      { name: "Cure 4 séances", price: "320 €", duration: "60 min / séance", desc: "Paiement en 2 fois possible (2 × 160 €)" },
    ],
  },
  {
    id: "microneedling",
    title: "Microneedling",
    subtitle: "Soin personnalisable selon vos besoins",
    color: "#C9A5A0",
    soinSlug: "microneedling",
    note: "Cure de 4 séances espacées de 15 jours conseillée pour un résultat optimal.",
    services: [
      { name: "Séance Microneedling", price: "80 €", duration: "60 min" },
      { name: "Cure 4 séances", price: "280 €", duration: "60 min / séance", desc: "Paiement en 2 fois possible (2 × 140 €)" },
    ],
  },
  {
    id: "estheled-visage",
    title: "EstheLED — Soins Visage",
    subtitle: "Photobiomodulation LED · Anti-âge, éclat, imperfections",
    color: "#C9A5A0",
    soinSlug: "estheled",
    note: "Consultation gratuite et obligatoire avant la première séance.",
    services: [
      { name: "Séance découverte", price: "Gratuit", duration: "30 min" },
      { name: "Séance d'entretien", price: "35 €", duration: "30 min", desc: "Pour les personnes ayant déjà réalisé une cure ou une séance" },
      { name: "Cure 7 séances", price: "190 €", duration: "30 min / séance", desc: "6 séances + 1 offerte, au lieu de 245 €" },
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
    color: "#C9A5A0",
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
    color: "#C9A5A0",
    soinSlug: "pressotherapie",
    services: [
      { name: "Séance à l'unité", price: "25 €", duration: "30 min" },
      { name: "Cure 5 séances + 1 offerte", price: "125 €", duration: "30 min / séance", desc: "La 6e séance est offerte" },
      { name: "Récupération sportive", price: "55 €", duration: "45 min", desc: "Associe photobiomodulation LED et pressothérapie" },
    ],
  },
];

// Ancres de navigation
const navAnchors = [
  { id: "laser-femme", label: "Laser Femme" },
  { id: "laser-homme", label: "Laser Homme" },
  { id: "v-tox-lift", label: "Soins Visage Experts" },
  { id: "estheled-visage", label: "EstheLED" },
  { id: "pressotherapie", label: "Pressothérapie" },
];

export default function TarifsPage() {
  return (
    <main className="pt-20">
      {/* ── Header ────────────────────────────────────────────── */}
      <section className="bg-[#E2DCD3] py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A5A0] mb-4">Maison Sophie</p>
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-6xl md:text-7xl font-light text-[#1C1208] leading-tight max-w-2xl"
          >
            Nos tarifs
          </h1>
          <p className="mt-6 text-[#7A7A7A] max-w-xl leading-relaxed">
            Chaque soin commence par une consultation gratuite. Les tarifs ci-dessous
            sont indicatifs — le protocole final est toujours défini ensemble lors du premier rendez-vous.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={RDV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 border border-[#C9A5A0] text-[#C9A5A0] text-[11px] tracking-[0.2em] uppercase hover:bg-[#C9A5A0] hover:text-white transition-all duration-300"
            >
              Prendre rendez-vous
            </a>
            <Link
              href="/soins"
              className="inline-block px-8 py-3.5 border border-[#1C1208]/20 text-[#7A7A7A] text-[11px] tracking-[0.2em] uppercase hover:border-[#1C1208] hover:text-[#1C1208] transition-all duration-300"
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
            <span className="text-[#C9A5A0] text-lg">✦</span>
            <p className="text-white/70 text-[12px] leading-relaxed">
              La consultation de diagnostic est <strong className="text-white">100 % gratuite</strong> et sans engagement avant toute première séance laser ou EstheLED.
            </p>
          </div>
          <a
            href={`tel:+33617805053`}
            className="text-[#C9A5A0] text-[11px] tracking-[0.15em] uppercase whitespace-nowrap hover:text-white transition-colors"
          >
            06 17 80 50 53
          </a>
        </div>
      </div>

      {/* ── Nav ancres ────────────────────────────────────────── */}
      <nav className="sticky top-20 z-30 bg-[#EAE5DC] border-b border-[#D4CFC8] overflow-x-auto">
        <div className="max-w-7xl mx-auto px-8 flex gap-1 py-2 whitespace-nowrap">
          {navAnchors.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-5 py-2 text-[11px] tracking-[0.1em] uppercase text-[#7A7A7A] hover:text-[#1C1208] hover:bg-[#E2DCD3] rounded transition-colors"
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
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#7A7A7A]">
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
                  className="text-[11px] tracking-[0.15em] uppercase text-[#7A7A7A] hover:text-[#C9A5A0] transition-colors whitespace-nowrap"
                >
                  En savoir plus →
                </Link>
              )}
            </div>

            {/* Note */}
            {cat.note && (
              <div
                className="mb-6 p-5 border-l-2 text-[13px] text-[#7A7A7A] leading-relaxed"
                style={{ borderColor: cat.color, backgroundColor: `${cat.color}08` }}
              >
                {cat.note}
              </div>
            )}

            {/* Tableau des prestations */}
            <div className="border border-[#D4CFC8] overflow-hidden">
              {cat.services.map((s, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-7 py-5 border-b border-[#D4CFC8] last:border-0 hover:bg-[#E2DCD3] transition-colors"
                >
                  <div className="flex-1">
                    <p className="text-[14px] text-[#1C1208] font-medium">{s.name}</p>
                    {s.desc && (
                      <p className="text-[12px] text-[#7A7A7A] mt-1 italic">{s.desc}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-8 shrink-0">
                    <span className="text-[12px] text-[#7A7A7A]">{s.duration}</span>
                    <span
                      className="text-[14px] font-medium min-w-[70px] text-right"
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

      {/* ── CTA Final ─────────────────────────────────────────── */}
      <section className="bg-[#1C1208] py-24 px-8 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A5A0] mb-6">Réserver</p>
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
              className="px-10 py-4 border border-[#C9A5A0] text-[#C9A5A0] text-[11px] tracking-[0.2em] uppercase hover:bg-[#C9A5A0] hover:text-white transition-all"
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
