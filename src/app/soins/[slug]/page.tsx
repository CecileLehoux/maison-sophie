import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { soins, getSoinBySlug } from "@/data/soins";

const RDV_URL = "https://www.planity.com/maison-sophie-31170-tournefeuille";

// ─── Static params ───────────────────────────────────────────────
export function generateStaticParams() {
  return soins.map((s) => ({ slug: s.slug }));
}

// ─── Metadata ────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const soin = getSoinBySlug(slug);
  if (!soin) return {};
  return {
    title: soin.title,
    description: soin.excerpt,
    alternates: { canonical: `https://maison-sophie.fr/soins/${soin.slug}` },
    openGraph: {
      title: `${soin.title} | Maison Sophie`,
      description: soin.excerpt,
      url: `https://maison-sophie.fr/soins/${soin.slug}`,
      images: [{ url: soin.heroImage, width: 1200, height: 630, alt: soin.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${soin.title} | Maison Sophie`,
      description: soin.excerpt,
      images: [soin.heroImage],
    },
  };
}

// ─── Page ────────────────────────────────────────────────────────
export default async function SoinDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const soin = getSoinBySlug(slug);
  if (!soin) notFound();

  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[85vh] min-h-[560px] overflow-hidden">
        <Image
          src={soin.heroImage}
          alt={soin.title}
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* Dégradé bas → haut pour lisibilité du titre */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-8 flex items-center gap-2 text-white/50 text-[10px] tracking-[0.3em] uppercase">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/soins" className="hover:text-white transition-colors">Nos Soins</Link>
          <span>/</span>
          <span className="text-white/80">{soin.title}</span>
        </div>

        {/* Titre — centré verticalement */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 pb-12">
          <p className="text-[10px] tracking-[0.5em] uppercase text-white/60 mb-5">
            Maison Sophie · Tournefeuille
          </p>
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight max-w-3xl"
          >
            {soin.title}
          </h1>
          <div className="mt-6 w-12 h-px bg-white/30" />
          <p
            style={{ fontFamily: "var(--font-display)" }}
            className="text-lg md:text-xl italic mt-5 text-white/65 max-w-xl"
          >
            {soin.tagline}
          </p>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-start">

          {/* Texte principal */}
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A5A0] mb-6">
              Le soin
            </p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl md:text-5xl font-light text-[#1C1208] leading-tight mb-8"
            >
              {soin.title}
            </h2>
            <p className="text-[#7A7A7A] leading-relaxed text-[15px] max-w-xl">
              {soin.intro}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={RDV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-9 py-3.5 bg-[#C9A5A0] text-white text-[11px] tracking-[0.2em] uppercase hover:bg-[#A8857F] transition-colors duration-300"
              >
                {soin.cta}
              </a>
              <Link
                href="/tarifs"
                className="text-[11px] tracking-[0.15em] uppercase text-[#7A7A7A] hover:text-[#1C1208] transition-colors border-b border-[#D4CFC8] pb-px"
              >
                Voir les tarifs →
              </Link>
            </div>
          </div>

          {/* Engagements — barre latérale */}
          <div className="border-l border-[#D4CFC8] pl-10 pt-1">
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A5A0] mb-7">
              Nos engagements
            </p>
            <ul className="space-y-5">
              {soin.reassurance.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 text-[#C9A5A0] text-sm leading-none">—</span>
                  <span className="text-[13px] text-[#7A7A7A] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Bénéfices ─────────────────────────────────────────────── */}
      <section className="bg-[#EAE5DC] py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A5A0] mb-4">
              Les atouts
            </p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl md:text-5xl font-light text-[#1C1208]"
            >
              Pourquoi choisir<br />
              <em>{soin.title}&nbsp;?</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {soin.benefits.map((b, i) => (
              <div key={i} className="flex flex-col gap-4">
                <span className="text-3xl">{b.icon}</span>
                <h3
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-xl font-light text-[#1C1208]"
                >
                  {b.title}
                </h3>
                <div className="w-8 h-px bg-[#C9A5A0]" />
                <p className="text-[13px] text-[#7A7A7A] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comment ça marche ─────────────────────────────────────── */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A5A0] mb-4">
              Le protocole
            </p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl md:text-5xl font-light text-[#1C1208]"
            >
              Comment ça<br />se passe ?
            </h2>
          </div>

          <div>
            {soin.howItWorks.map((step, i) => (
              <div
                key={i}
                className="flex gap-10 py-10 border-t border-[#EAE5DC]"
              >
                <span
                  style={{ fontFamily: "var(--font-display)", color: soin.color }}
                  className="text-6xl font-light leading-none shrink-0 mt-1 opacity-25 select-none"
                >
                  {step.step}
                </span>
                <div className="pt-2">
                  <h3
                    style={{ fontFamily: "var(--font-display)" }}
                    className="text-2xl font-light text-[#1C1208] mb-3"
                  >
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-[#7A7A7A] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="bg-[#EAE5DC] py-24 px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14">
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A5A0] mb-4">
              Questions fréquentes
            </p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl font-light text-[#1C1208]"
            >
              Vos questions,<br />nos réponses
            </h2>
          </div>

          <div className="divide-y divide-[#D4CFC8]">
            {soin.faq.map((item, i) => (
              <details key={i} className="group py-1">
                <summary className="flex items-center justify-between py-5 cursor-pointer list-none gap-6">
                  <span className="text-[14px] text-[#1C1208] font-medium leading-snug">
                    {item.q}
                  </span>
                  <span className="shrink-0 w-6 h-6 rounded-full border border-[#C9A5A0] flex items-center justify-center text-[#C9A5A0] transition-transform duration-200 group-open:rotate-45">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </span>
                </summary>
                <p className="pb-6 text-[13px] text-[#7A7A7A] leading-relaxed pr-10">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ─────────────────────────────────────────────── */}
      <section className="bg-white py-28 px-8">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-px h-16 bg-[#D4CFC8] mx-auto mb-10" />
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A5A0] mb-6">
            Prêt(e) à commencer ?
          </p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl font-light text-[#1C1208] mb-6 leading-tight"
          >
            La consultation<br />
            <em className="text-[#C9A5A0]">est gratuite.</em>
          </h2>
          <p className="text-[#7A7A7A] text-sm leading-relaxed mb-10 max-w-sm mx-auto">
            Consultation offerte et sans engagement afin d&apos;analyser vos besoins
            et vous orienter vers la technologie la plus adaptée.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={RDV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#C9A5A0] text-white text-[11px] tracking-[0.2em] uppercase hover:bg-[#A8857F] transition-colors duration-300"
            >
              {soin.cta}
            </a>
            <Link
              href="/soins"
              className="px-10 py-4 border border-[#D4CFC8] text-[#7A7A7A] text-[11px] tracking-[0.2em] uppercase hover:border-[#C9A5A0] hover:text-[#C9A5A0] transition-all duration-300"
            >
              Tous nos soins
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
