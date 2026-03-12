import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { soins } from "@/data/soins";

export const metadata: Metadata = {
  title: "Maison Sophie | Centre Technico-Esthétique à Tournefeuille",
  description:
    "Maison Sophie, centre technico-esthétique à Tournefeuille (31170). Épilation laser, photobiomodulation LED, pressothérapie, soins sportifs. RDV en ligne 24h/24.",
  alternates: { canonical: "https://maisonsophie.fr" },
  openGraph: {
    title: "Maison Sophie | Centre Technico-Esthétique à Tournefeuille",
    description:
      "Épilation laser, EstheLED, pressothérapie et soins sportifs à Tournefeuille. RDV en ligne 24h/24.",
    url: "https://maisonsophie.fr",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "Maison Sophie — Centre esthétique Tournefeuille" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Sophie | Centre Technico-Esthétique à Tournefeuille",
    description: "Épilation laser, EstheLED, pressothérapie et soins sportifs à Tournefeuille.",
    images: ["/images/hero.jpg"],
  },
};


export default function HomePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative h-[100svh] min-h-[680px] flex items-end overflow-hidden isolate">
        <Image
          src="/images/hero-banner.jpg"
          alt="Maison Sophie — Centre Technico-Esthétique à Tournefeuille"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/35" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-20 w-full">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/70 mb-4">
            Tournefeuille · Centre Technico-Esthétique
          </p>
          <h1
            style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 30px rgba(0,0,0,0.5)" }}
            className="text-6xl md:text-8xl font-light text-white leading-[1.05] mb-6 max-w-3xl"
          >
            L&apos;esthétique<br />
            <em className="not-italic text-[#C9A5A0]">autrement.</em>
          </h1>
          <p className="text-base text-white/80 max-w-lg mb-10 leading-relaxed" style={{ textShadow: "0 1px 15px rgba(0,0,0,0.5)" }}>
            Des technologies innovantes, une expertise au service de votre bien-être.
            Des résultats durables, personnalisés pour chaque corps.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.planity.com/maison-sophie-31170-tournefeuille"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#C9A5A0] text-white text-[11px] tracking-[0.2em] uppercase hover:bg-[#A8857F] transition-colors"
            >
              Prendre rendez-vous
            </a>
            <Link
              href="/soins"
              className="px-8 py-3.5 border border-white/40 text-white text-[11px] tracking-[0.2em] uppercase hover:bg-white/10 transition-colors"
            >
              Découvrir nos soins
            </Link>
          </div>
        </div>
      </section>


{/* ── PRÉSENTATION SOPHIE ── */}
      <section className="bg-[#EAE5DC] py-24 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center">
          {/* Photo */}
          <div className="relative pb-10 pr-10 lg:pb-14 lg:pr-14 mx-auto lg:mx-0 w-full max-w-xs">
            {/* Bloc rose poudré décalé en bas à droite */}
            <div className="absolute bottom-0 right-0 w-[80%] h-[70%] bg-[#C9A5A0]/20" />
            {/* Photo */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/photo-sophie.jpg"
                alt="Sophie — Fondatrice de Maison Sophie"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </div>
          </div>

          {/* Texte */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A5A0] mb-5">
              La fondatrice
            </p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl md:text-5xl font-light text-[#1C1208] leading-tight mb-8"
            >
              Prendre soin<br />autrement.
            </h2>
            <div className="space-y-4 text-[#7A7A7A] leading-relaxed text-[15px]">
              <p>
                Infirmière diplômée d&apos;État pendant plus de 12 ans, j&apos;ai exercé avec passion dans
                le domaine de la santé, où chaque geste compte et chaque détail a son importance.
                C&apos;est cette exigence médicale — l&apos;exigence, l&apos;hygiène, la précision, l&apos;écoute —
                que j&apos;ai voulu apporter dans le monde de l&apos;esthétique.
              </p>
              <p>C&apos;est ainsi qu&apos;est née Maison Sophie.</p>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <Link
                href="/a-propos"
                className="text-[11px] tracking-[0.2em] uppercase text-[#C9A5A0] border-b border-[#C9A5A0] pb-0.5 hover:text-[#A8857F] hover:border-[#A8857F] transition-colors"
              >
                En savoir + →
              </Link>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#7A7A7A]">— Sophie, Fondatrice</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOS SOINS ── */}
      <section className="bg-[#E2DCD3] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A5A0] mb-4">
                Ce que nous faisons
              </p>
              <h2
                style={{ fontFamily: "var(--font-display)" }}
                className="text-5xl md:text-6xl font-light text-[#1C1208] leading-tight"
              >
                Nos soins<br />& expertises
              </h2>
            </div>
            <Link
              href="/soins"
              className="text-[11px] tracking-[0.2em] uppercase text-[#C9A5A0] border-b border-[#C9A5A0] pb-0.5 hover:text-[#A8857F] hover:border-[#A8857F] transition-colors self-start md:self-end"
            >
              Voir tous les soins →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D4CFC8]">
            {soins.map((soin, i) => (
              <Link
                key={soin.slug}
                href={`/soins/${soin.slug}`}
                className="group relative bg-[#EAE5DC] overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={soin.image}
                    alt={soin.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-1">
                      0{i + 1}
                    </p>
                    <h3
                      style={{ fontFamily: "var(--font-display)" }}
                      className="text-3xl font-light text-white"
                    >
                      {soin.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p
                    style={{ fontFamily: "var(--font-display)" }}
                    className="text-xl italic text-[#C9A5A0] mb-3"
                  >
                    {soin.tagline}
                  </p>
                  <p className="text-[14px] text-[#7A7A7A] leading-relaxed mb-6">{soin.excerpt}</p>
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#1C1208] border-b border-[#1C1208]/30 pb-0.5 group-hover:border-[#C9A5A0] group-hover:text-[#C9A5A0] transition-colors">
                    En savoir plus →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALEURS / RÉASSURANCE ── */}
      <section className="bg-[#EAE5DC] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A5A0] mb-4">Pourquoi nous choisir</p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-5xl font-light text-[#1C1208]"
            >
              Une approche différente
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                num: "01",
                title: "Consultation offerte",
                desc: "Avant chaque première séance, une consultation gratuite est obligatoire. Nous prenons le temps de vous écouter, d'analyser votre peau et de vous proposer le protocole le plus adapté.",
              },
              {
                num: "02",
                title: "Technologies certifiées",
                desc: "Nos équipements — laser, EstheLED, pressothérapie — sont des dispositifs professionnels de dernière génération, certifiés CE et utilisés selon des protocoles rigoureux.",
              },
              {
                num: "03",
                title: "Résultats transparents",
                desc: "Nous ne promettons pas l'impossible. À chaque séance, nous évaluons ensemble les résultats obtenus et ajustons le protocole selon vos retours et l'évolution de votre peau.",
              },
            ].map((v) => (
              <div key={v.num} className="border-t border-[#D4CFC8] pt-8">
                <span className="text-[11px] tracking-[0.3em] text-[#C9A5A0]">{v.num}</span>
                <h3
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-2xl font-light text-[#1C1208] mt-3 mb-4"
                >
                  {v.title}
                </h3>
                <p className="text-[14px] text-[#7A7A7A] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERIE ── */}
      <section className="bg-[#E2DCD3] py-4 px-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
          {["/images/hero.jpg", "/images/ms-6.jpg", "/images/photo-4.jpg",
            "/images/ms-1.jpg", "/images/photo-5.jpg", "/images/ms-8.jpg"].map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden">
              <Image
                src={src}
                alt={`Maison Sophie — Espace soin ${i + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── MESOESTETIC ── */}
      <section className="bg-[#EAE5DC] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Texte */}
          <div className="flex flex-col justify-center px-10 py-20 lg:px-20 lg:py-24">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A5A0] mb-6">
              Nos produits
            </p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-5xl lg:text-6xl font-light text-[#1C1208] tracking-tight"
            >
              mesoestetic<sup className="text-2xl">®</sup>
            </h2>
            <div className="w-8 h-px bg-[#C9A5A0] my-6" />
            <p className="text-[13px] text-[#7A7A7A] leading-relaxed max-w-sm mb-3">
              Parce qu&apos;un soin ne s&apos;arrête pas à la cabine, nous proposons une sélection
              de produits mesoestetic — une marque de dermocosmétiue professionnelle que Sophie
              utilise et recommande pour prolonger les résultats à domicile.
            </p>
          </div>
          {/* Photo */}
          <div className="relative h-[420px] lg:h-auto min-h-[400px]">
            <Image
              src="/images/mesoestetic-products.jpg"
              alt="Produits mesoestetic disponibles à Maison Sophie"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── AVIS ── */}
      <section className="bg-[#1C1208] py-24 px-8 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center gap-1 mb-6 text-[#C9A5A0] text-lg tracking-widest">
            ★★★★★
          </div>
          <blockquote
            style={{ fontFamily: "var(--font-display)" }}
            className="text-3xl md:text-4xl font-light italic leading-relaxed mb-8 text-white/90"
          >
            &ldquo;Un cadre chaleureux, une approche professionnelle et des résultats au-delà
            de mes attentes. Je recommande Maison Sophie les yeux fermés.&rdquo;
          </blockquote>
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#C9A5A0]">
            Note 5/5 · Avis vérifiés Planity
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#C9A5A0] py-20 px-8 text-white text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/70 mb-4">Prête à commencer ?</p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-5xl font-light mb-6 leading-tight"
          >
            Réservez votre<br />consultation offerte
          </h2>
          <p className="text-white/80 text-sm mb-8 leading-relaxed">
            La première étape, c&apos;est une conversation. Venez nous rencontrer, sans engagement.
          </p>
          <a
            href="https://www.planity.com/maison-sophie-31170-tournefeuille"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-[#C9A5A0] text-[11px] tracking-[0.2em] uppercase hover:bg-[#EAE5DC] transition-colors"
          >
            Prendre rendez-vous en ligne
          </a>
        </div>
      </section>
    </main>
  );
}
