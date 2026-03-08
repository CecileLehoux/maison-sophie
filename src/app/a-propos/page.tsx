import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos — Sophie, Fondatrice",
  description:
    "Infirmière diplômée d'État reconvertie en esthéticienne, Sophie a fondé Maison Sophie à Tournefeuille avec une exigence médicale au service du soin esthétique.",
  alternates: { canonical: "https://maisonsophie.fr/a-propos" },
  openGraph: {
    title: "À propos — Sophie, Fondatrice | Maison Sophie",
    description:
      "12 ans d'expérience infirmière au service de l'esthétique. Découvrez la philosophie et l'approche de Maison Sophie à Tournefeuille.",
    url: "https://maisonsophie.fr/a-propos",
    images: [{ url: "/images/photo-sophie.jpg", width: 1200, height: 630, alt: "Sophie — Fondatrice de Maison Sophie" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos — Sophie, Fondatrice | Maison Sophie",
    description: "12 ans d'expérience infirmière au service de l'esthétique. Maison Sophie, Tournefeuille.",
    images: ["/images/photo-sophie.jpg"],
  },
};

const RDV_URL = "https://www.planity.com/maison-sophie-31170-tournefeuille";

export default function AProposPage() {
  return (
    <main className="pt-16">
      {/* ── Hero ── */}
      <section className="bg-[#EAE5DC] py-20 px-8 text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A5A0] mb-4">
          Maison Sophie · La fondatrice
        </p>
        <h1
          style={{ fontFamily: "var(--font-display)" }}
          className="text-5xl md:text-6xl font-light text-[#1C1208] leading-tight mb-4"
        >
          Prendre soin<br />autrement.
        </h1>
        <p className="text-[#7A7A7A] max-w-lg mx-auto leading-relaxed">
          12 ans d&apos;expérience infirmière au service d&apos;une esthétique exigeante, bienveillante et personnalisée.
        </p>
      </section>

      {/* ── Biographie ── */}
      <section className="bg-[#EAE5DC] py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Photo */}
          <div className="relative sticky top-28">
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden">
              <Image
                src="/images/photo-sophie.jpg"
                alt="Sophie — Fondatrice de Maison Sophie"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 lg:-right-8 w-2/3 h-2/3 border border-[#C9A5A0]/30 -z-10" />
          </div>

          {/* Texte complet */}
          <div className="space-y-10">

            {/* Section 1 — Parcours */}
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A5A0] mb-4">Le parcours</p>
              <div className="space-y-4 text-[#7A7A7A] leading-relaxed text-[15px]">
                <p>
                  Infirmière diplômée d&apos;État pendant plus de 12 ans, j&apos;ai exercé avec passion dans
                  le domaine de la santé, où chaque geste compte et chaque détail a son importance.
                  C&apos;est cette exigence médicale — l&apos;exigence, l&apos;hygiène, la précision, l&apos;écoute —
                  que j&apos;ai voulu apporter dans le monde de l&apos;esthétique.
                </p>
                <p>C&apos;est ainsi qu&apos;est née Maison Sophie.</p>
              </div>
            </div>

            <div className="w-12 h-px bg-[#D4CFC8]" />

            {/* Section 2 — Expertise */}
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A5A0] mb-4">L&apos;expertise</p>
              <h2
                style={{ fontFamily: "var(--font-display)" }}
                className="text-2xl font-light text-[#1C1208] mb-5"
              >
                Une expertise au service de votre peau et de votre bien-être
              </h2>
              <ul className="space-y-3 mb-5">
                {[
                  "Une analyse personnalisée de votre peau et de vos besoins",
                  "Des protocoles adaptés à votre phototype et à votre histoire",
                  "Des technologies professionnelles de dernière génération",
                  "Une hygiène et une sécurité irréprochables à chaque séance",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-[#7A7A7A]">
                    <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-[#C9A5A0]" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[14px] text-[#7A7A7A] leading-relaxed italic">
                Chaque prise en charge est personnalisée, car aucune peau et aucun corps ne se ressemblent.
              </p>
            </div>

            <div className="w-12 h-px bg-[#D4CFC8]" />

            {/* Section 3 — Approche globale */}
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A5A0] mb-4">La philosophie</p>
              <h2
                style={{ fontFamily: "var(--font-display)" }}
                className="text-2xl font-light text-[#1C1208] mb-4"
              >
                Une approche globale du soin
              </h2>
              <p className="text-[14px] text-[#7A7A7A] leading-relaxed">
                Maison Sophie, c&apos;est un lieu pensé pour prendre soin de votre peau, de votre corps
                et de votre équilibre global. Mon engagement&nbsp;: vous offrir des soins efficaces,
                dans un cadre apaisant et bienveillant.
              </p>
            </div>

            <div className="w-12 h-px bg-[#D4CFC8]" />

            {/* Closing */}
            <div>
              <p
                style={{ fontFamily: "var(--font-display)" }}
                className="text-xl font-light italic text-[#1C1208] mb-2"
              >
                Maison Sophie — Un lieu où l&apos;expertise rencontre le bien-être.
              </p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#C9A5A0]">— Sophie, Fondatrice</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1C1208] py-20 px-8 text-white text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A5A0] mb-6">Prêt(e) à commencer ?</p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl font-light mb-4"
          >
            La consultation<br />
            <em className="text-white/60">est gratuite.</em>
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-md mx-auto">
            Pas d&apos;engagement, pas de surprise. Sophie prend le temps de comprendre vos besoins
            avant de vous proposer quoi que ce soit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={RDV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#C9A5A0] text-white text-[11px] tracking-[0.2em] uppercase hover:bg-[#A8857F] transition-colors"
            >
              Prendre rendez-vous
            </a>
            <Link
              href="/soins"
              className="px-10 py-4 border border-white/20 text-white/60 text-[11px] tracking-[0.2em] uppercase hover:border-white/50 hover:text-white transition-all"
            >
              Découvrir nos soins
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
