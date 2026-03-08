import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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

const soins = [
  {
    slug: "laser",
    icon: "✦",
    title: "Épilation Laser",
    tagline: "Une peau lisse, pour toujours.",
    excerpt:
      "Dites adieu aux rasoirs et à l'épilation douloureuse. Notre laser de dernière génération offre des résultats durables sur tous les types de peau, en toute sécurité.",
    image: "/images/photo-4.jpg",
    color: "#C8963E",
  },
  {
    slug: "estheled",
    icon: "✦",
    title: "EstheLED",
    tagline: "La lumière au service de votre peau.",
    excerpt:
      "La photobiomodulation LED est une technologie douce et non invasive qui régénère vos cellules en profondeur. Anti-âge, éclat, apaisement : une révolution pour votre peau.",
    image: "/images/photo-2.jpg",
    color: "#44b4e7",
  },
  {
    slug: "pressotherapie",
    icon: "✦",
    title: "Pressothérapie",
    tagline: "Des jambes légères, un corps régénéré.",
    excerpt:
      "Le drainage par pressothérapie stimule la circulation lymphatique, réduit la cellulite et accélère la récupération sportive. Résultats visibles dès la première séance.",
    image: "/images/photo-5.jpg",
    color: "#8BA888",
  },
  {
    slug: "sportifs",
    icon: "✦",
    title: "Soins Sportifs",
    tagline: "Performer et récupérer comme un pro.",
    excerpt:
      "Des protocoles sur-mesure associant massage, LED et pressothérapie pour préparer votre corps à l'effort, optimiser la récupération et prévenir les blessures.",
    image: "/images/photo-6.jpg",
    color: "#C8963E",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[680px] flex items-end">
        <Image
          src="/images/hero.jpg"
          alt="Maison Sophie — Centre Technico-Esthétique à Tournefeuille"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-20 w-full">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/60 mb-4">
            Tournefeuille · Centre Technico-Esthétique
          </p>
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-6xl md:text-8xl font-light text-white leading-[1.05] mb-6 max-w-3xl"
          >
            L&apos;esthétique<br />
            <em className="not-italic text-[#E8B96A]">autrement.</em>
          </h1>
          <p className="text-base text-white/70 max-w-lg mb-10 leading-relaxed">
            Des technologies innovantes, une expertise au service de votre bien-être.
            Des résultats durables, personnalisés pour chaque corps.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.planity.com/maison-sophie-31170-tournefeuille"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#C8963E] text-white text-[11px] tracking-[0.2em] uppercase hover:bg-[#A07830] transition-colors"
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

      {/* ── BANDEAU RÉASSURANCE ── */}
      <section className="bg-[#1C1208] py-5 px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-6 text-center md:text-left">
          {[
            { val: "5★", label: "Note Planity" },
            { val: "Consultation", label: "Gratuite & offerte" },
            { val: "Technologie", label: "Dernière génération" },
            { val: "Protocoles", label: "100 % personnalisés" },
          ].map((item) => (
            <div key={item.val} className="flex flex-col">
              <span className="text-[#C8963E] text-sm font-medium tracking-wide">{item.val}</span>
              <span className="text-white/40 text-[10px] tracking-[0.15em] uppercase">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRÉSENTATION SOPHIE ── */}
      <section className="bg-[#FAF7F2] py-24 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden">
              <Image
                src="/images/photo-2.jpg"
                alt="Sophie — Fondatrice de Maison Sophie"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </div>
            {/* Cadre décoratif décalé */}
            <div className="absolute -bottom-4 -right-4 lg:-right-8 w-2/3 h-2/3 border border-[#C8963E]/30 -z-10" />
          </div>

          {/* Texte */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8963E] mb-5">
              La fondatrice
            </p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-5xl md:text-6xl font-light text-[#1C1208] leading-tight mb-8"
            >
              Bonjour,<br />je suis Sophie.
            </h2>
            <div className="space-y-5 text-[#8A7D6B] leading-relaxed text-[15px]">
              <p>
                Passionnée par le bien-être et les technologies esthétiques depuis plus de 15 ans,
                j&apos;ai fondé Maison Sophie avec une conviction profonde : chaque personne mérite
                des soins efficaces, transparents et parfaitement adaptés à son corps.
              </p>
              <p>
                Après une formation spécialisée en technologies esthétiques avancées — épilation laser,
                photobiomodulation et pressothérapie — j&apos;ai choisi de m&apos;installer à Tournefeuille
                pour créer un espace à taille humaine, loin des grandes enseignes impersonnelles.
              </p>
              <p>
                Chez Maison Sophie, chaque protocole commence par une consultation approfondie.
                Je prends le temps de comprendre vos objectifs, votre peau, votre mode de vie —
                pour vous proposer uniquement ce qui vous sera vraiment bénéfique.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-[#E8DDD0]">
              <p
                style={{ fontFamily: "var(--font-display)" }}
                className="text-2xl font-light italic text-[#1C1208]"
              >
                &ldquo;Mon objectif : révéler tout le potentiel de votre corps.&rdquo;
              </p>
              <p className="mt-3 text-[11px] tracking-[0.2em] uppercase text-[#C8963E]">— Sophie, Fondatrice</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOS SOINS ── */}
      <section className="bg-[#F2EDE4] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8963E] mb-4">
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
              className="text-[11px] tracking-[0.2em] uppercase text-[#C8963E] border-b border-[#C8963E] pb-0.5 hover:text-[#A07830] hover:border-[#A07830] transition-colors self-start md:self-end"
            >
              Voir tous les soins →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E8DDD0]">
            {soins.map((soin, i) => (
              <Link
                key={soin.slug}
                href={`/soins/${soin.slug}`}
                className="group relative bg-[#FAF7F2] overflow-hidden"
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
                    className="text-xl italic text-[#C8963E] mb-3"
                  >
                    {soin.tagline}
                  </p>
                  <p className="text-[14px] text-[#8A7D6B] leading-relaxed mb-6">{soin.excerpt}</p>
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#1C1208] border-b border-[#1C1208]/30 pb-0.5 group-hover:border-[#C8963E] group-hover:text-[#C8963E] transition-colors">
                    En savoir plus →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALEURS / RÉASSURANCE ── */}
      <section className="bg-[#FAF7F2] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8963E] mb-4">Pourquoi nous choisir</p>
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
              <div key={v.num} className="border-t border-[#E8DDD0] pt-8">
                <span className="text-[11px] tracking-[0.3em] text-[#C8963E]">{v.num}</span>
                <h3
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-2xl font-light text-[#1C1208] mt-3 mb-4"
                >
                  {v.title}
                </h3>
                <p className="text-[14px] text-[#8A7D6B] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERIE ── */}
      <section className="bg-[#F2EDE4] py-4 px-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
          {["/images/hero.jpg", "/images/photo-2.jpg", "/images/photo-3.jpg",
            "/images/photo-4.jpg", "/images/photo-5.jpg", "/images/photo-6.jpg"].map((src, i) => (
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

      {/* ── AVIS ── */}
      <section className="bg-[#1C1208] py-24 px-8 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center gap-1 mb-6 text-[#C8963E] text-lg tracking-widest">
            ★★★★★
          </div>
          <blockquote
            style={{ fontFamily: "var(--font-display)" }}
            className="text-3xl md:text-4xl font-light italic leading-relaxed mb-8 text-white/90"
          >
            &ldquo;Un cadre chaleureux, une approche professionnelle et des résultats au-delà
            de mes attentes. Je recommande Maison Sophie les yeux fermés.&rdquo;
          </blockquote>
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#C8963E]">
            Note 5/5 · Avis vérifiés Planity
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#C8963E] py-20 px-8 text-white text-center">
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
            className="inline-block px-10 py-4 bg-white text-[#C8963E] text-[11px] tracking-[0.2em] uppercase hover:bg-[#FAF7F2] transition-colors"
          >
            Prendre rendez-vous en ligne
          </a>
        </div>
      </section>
    </main>
  );
}
