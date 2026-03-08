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

const services = [
  {
    icon: "⚡️",
    title: "Épilation Laser",
    desc: "Résultats durables sur tous types de peau. Consultation gratuite obligatoire avant la première séance.",
    href: "/services#laser",
    color: "#FC8181",
  },
  {
    icon: "💡",
    title: "EstheLED",
    desc: "Photobiomodulation LED pour la régénération cellulaire, l'anti-âge, l'éclat du teint et les cheveux.",
    href: "/services#estheled",
    color: "#44b4e7",
  },
  {
    icon: "💨",
    title: "Pressothérapie",
    desc: "Drainage lymphatique, réduction de la cellulite, récupération sportive et jambes légères.",
    href: "/services#pression",
    color: "#F6AD55",
  },
  {
    icon: "🏅",
    title: "Soins Sportifs",
    desc: "Protocoles ciblés pour la récupération profonde, la performance et la préparation à la compétition.",
    href: "/services#sport",
    color: "#68D391",
  },
];

const gallery = [
  { src: "/images/hero.jpg", alt: "Cabine de soin Maison Sophie" },
  { src: "/images/photo-2.jpg", alt: "Soin esthétique Maison Sophie" },
  { src: "/images/photo-3.jpg", alt: "Équipement EstheLED" },
  { src: "/images/photo-4.jpg", alt: "Espace bien-être Maison Sophie" },
  { src: "/images/photo-5.jpg", alt: "Traitement laser Maison Sophie" },
  { src: "/images/photo-6.jpg", alt: "Soin corps Maison Sophie" },
];

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-end pb-16 md:pb-24">
        <Image
          src="/images/hero.jpg"
          alt="Maison Sophie — Centre Technico-Esthétique à Tournefeuille"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-3">
            Centre Technico-Esthétique · Tournefeuille
          </p>
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-5xl md:text-7xl font-light text-white leading-tight mb-6"
          >
            Maison Sophie
          </h1>
          <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
            Expert en soins du corps et technologies bien-être.
            Des protocoles personnalisés pour des résultats durables.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.planity.com/maison-sophie-31170-tournefeuille"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#C49A6C] text-white text-sm tracking-wide rounded-full hover:bg-[#A07848] transition-colors"
            >
              Prendre rendez-vous
            </a>
            <Link
              href="/services"
              className="px-8 py-3.5 border border-white/60 text-white text-sm tracking-wide rounded-full hover:bg-white/10 transition-colors"
            >
              Nos soins
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="bg-[#F9F5F0] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C49A6C] mb-4">Notre philosophie</p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl font-light text-[#2D2D2D] leading-tight mb-6"
          >
            Révéler tout le potentiel de votre corps
          </h2>
          <p className="text-[#7A7A7A] leading-relaxed text-base md:text-lg">
            Fondé par Sophie, Maison Sophie allie expertise, précision et technologies innovantes
            pour des protocoles efficaces et des résultats durables.
            Chaque soin est personnalisé pour répondre à vos objectifs, dans un cadre professionnel
            et chaleureux pensé pour votre confort.
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C49A6C] mb-3">Ce que nous proposons</p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl md:text-5xl font-light text-[#2D2D2D]"
            >
              Nos expertises
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group p-8 border border-[#F0EAE2] rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                  style={{ backgroundColor: `${s.color}20` }}
                >
                  {s.icon}
                </div>
                <h3
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-xl font-medium text-[#2D2D2D] mb-3"
                >
                  {s.title}
                </h3>
                <p className="text-sm text-[#7A7A7A] leading-relaxed">{s.desc}</p>
                <p className="mt-4 text-xs text-[#C49A6C] tracking-wide group-hover:underline">
                  En savoir plus →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERIE ── */}
      <section className="py-20 px-6 bg-[#F9F5F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C49A6C] mb-3">Notre espace</p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl md:text-5xl font-light text-[#2D2D2D]"
            >
              Un cadre pensé pour vous
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {gallery.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 md:col-span-1 row-span-2" : ""}`}
                style={{ aspectRatio: i === 0 ? "auto" : "4/3", minHeight: i === 0 ? 400 : "auto" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTE & AVIS ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-4 text-2xl">
            {"★★★★★".split("").map((s, i) => (
              <span key={i} className="text-[#C49A6C]">{s}</span>
            ))}
          </div>
          <p
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl font-light text-[#2D2D2D] mb-2"
          >
            5 / 5
          </p>
          <p className="text-sm text-[#7A7A7A] mb-8">Note moyenne · Avis vérifiés Planity</p>
          <p
            style={{ fontFamily: "var(--font-display)" }}
            className="text-xl md:text-2xl font-light italic text-[#7A7A7A] leading-relaxed"
          >
            &ldquo;Un cadre professionnel et chaleureux, pensé pour le confort,
            l&apos;efficacité et le bien-être.&rdquo;
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 px-6 bg-[#2D2D2D] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Prêt à commencer ?</p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl font-light mb-6"
          >
            Réservez votre soin
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Consultation gratuite et obligatoire avant la première séance laser ou EstheLED.
            Prenez rendez-vous en ligne en quelques clics, disponible 24h/24.
          </p>
          <a
            href="https://www.planity.com/maison-sophie-31170-tournefeuille"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#C49A6C] text-white text-sm tracking-wide rounded-full hover:bg-[#A07848] transition-colors"
          >
            Prendre rendez-vous en ligne
          </a>
          <p className="mt-6 text-sm text-white/40">
            122, Av. du Marquisat · 31170 Tournefeuille ·{" "}
            <a href="tel:+33617805053" className="hover:text-white/70 transition-colors">
              06 17 80 50 53
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
