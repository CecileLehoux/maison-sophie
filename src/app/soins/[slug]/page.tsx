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
    alternates: { canonical: `https://maisonsophie.fr/soins/${soin.slug}` },
    openGraph: {
      title: `${soin.title} | Maison Sophie`,
      description: soin.excerpt,
      url: `https://maisonsophie.fr/soins/${soin.slug}`,
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
      {/* ── Hero plein écran ───────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={soin.heroImage}
          alt={soin.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1208]/80 via-[#1C1208]/30 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-8 flex items-center gap-2 text-white/60 text-[10px] tracking-[0.3em] uppercase">
          <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/soins" className="hover:text-white transition-colors">Nos Soins</Link>
          <span>/</span>
          <span className="text-white">{soin.title}</span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 px-8 pb-16 max-w-7xl mx-auto w-full">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-3" style={{ color: soin.color }}>
            Maison Sophie
          </p>
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-5xl md:text-7xl font-light text-white leading-tight max-w-2xl"
          >
            {soin.title}
          </h1>
          <p
            style={{ fontFamily: "var(--font-display)" }}
            className="text-xl md:text-2xl italic mt-3 text-white/70"
          >
            {soin.tagline}
          </p>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8963E] mb-5">Le soin</p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl font-light text-[#1C1208] leading-tight mb-6"
            >
              Ce qu&apos;est<br />
              <em>{soin.title}</em>
            </h2>
            <p className="text-[#8A7D6B] leading-relaxed text-[15px]">{soin.intro}</p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href={RDV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3.5 border border-[#C8963E] text-[#C8963E] text-[11px] tracking-[0.2em] uppercase hover:bg-[#C8963E] hover:text-white transition-all duration-300"
              >
                {soin.cta}
              </a>
              <Link
                href="/tarifs"
                className="text-[11px] tracking-[0.15em] uppercase text-[#8A7D6B] hover:text-[#1C1208] transition-colors"
              >
                Voir les tarifs →
              </Link>
            </div>
          </div>

          {/* Réassurance rapide */}
          <div className="bg-[#F2EDE4] p-10">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8963E] mb-6">Nos engagements</p>
            <ul className="space-y-4">
              {soin.reassurance.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full border border-[#C8963E] flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#C8963E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[13px] text-[#8A7D6B] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Bénéfices ─────────────────────────────────────────── */}
      <section className="bg-[#1C1208] py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8963E] mb-4">Les atouts</p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl md:text-5xl font-light text-white"
            >
              Pourquoi choisir<br />
              <em style={{ color: soin.color }}>{soin.title}</em>&nbsp;?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {soin.benefits.map((b, i) => (
              <div key={i} className="bg-[#1C1208] p-8 flex flex-col gap-4">
                <span className="text-2xl" style={{ color: soin.color }}>{b.icon}</span>
                <h3
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-xl font-light text-white"
                >
                  {b.title}
                </h3>
                <p className="text-[13px] text-white/50 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comment ça marche ─────────────────────────────────── */}
      <section className="bg-[#FAF7F2] py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8963E] mb-4">Le protocole</p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl md:text-5xl font-light text-[#1C1208]"
            >
              Comment ça<br />se passe ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E8DDD0]">
            {soin.howItWorks.map((step, i) => (
              <div key={i} className="bg-[#FAF7F2] p-10 flex gap-8">
                <span
                  style={{ fontFamily: "var(--font-display)", color: soin.color }}
                  className="text-5xl font-light leading-none shrink-0 mt-1 opacity-40"
                >
                  {step.step}
                </span>
                <div>
                  <h3
                    style={{ fontFamily: "var(--font-display)" }}
                    className="text-2xl font-light text-[#1C1208] mb-3"
                  >
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-[#8A7D6B] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="bg-[#F2EDE4] py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8963E] mb-4">Questions fréquentes</p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl font-light text-[#1C1208]"
            >
              Vos questions,<br />nos réponses
            </h2>
          </div>
          <div className="space-y-px">
            {soin.faq.map((item, i) => (
              <div key={i} className="bg-[#FAF7F2] border border-[#E8DDD0]">
                <div className="px-8 py-6">
                  <div className="flex items-start gap-5">
                    <span
                      style={{ fontFamily: "var(--font-display)", color: soin.color }}
                      className="text-2xl font-light shrink-0 mt-0.5"
                    >
                      Q.
                    </span>
                    <div>
                      <p className="text-[#1C1208] font-medium text-[14px] mb-3">{item.q}</p>
                      <p className="text-[13px] text-[#8A7D6B] leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ─────────────────────────────────────────── */}
      <section className="bg-[#1C1208] py-24 px-8 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C8963E] mb-6">Prêt(e) à commencer ?</p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl font-light text-white mb-6"
          >
            La consultation<br />
            <em className="text-white/60">est gratuite.</em>
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-md mx-auto">
            Pas d&apos;engagement, pas de surprise. Sophie prend le temps de comprendre
            vos besoins avant de vous proposer quoi que ce soit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={RDV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#C8963E] text-white text-[11px] tracking-[0.2em] uppercase hover:bg-[#A07030] transition-colors"
            >
              {soin.cta}
            </a>
            <Link
              href="/soins"
              className="px-10 py-4 border border-white/20 text-white/60 text-[11px] tracking-[0.2em] uppercase hover:border-white/50 hover:text-white transition-all"
            >
              Voir tous nos soins
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
