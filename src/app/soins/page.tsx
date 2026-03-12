import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { soins } from "@/data/soins";

export const metadata: Metadata = {
  title: "Nos Soins",
  description:
    "Découvrez tous les soins de Maison Sophie : épilation laser, EstheLED, pressothérapie et soins sportifs à Tournefeuille. Protocoles personnalisés, technologies certifiées.",
  alternates: { canonical: "https://maison-sophie.fr/soins" },
  openGraph: {
    title: "Nos Soins | Maison Sophie",
    description: "Épilation laser, EstheLED, pressothérapie et soins sportifs à Tournefeuille.",
    url: "https://maison-sophie.fr/soins",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "Soins Maison Sophie Tournefeuille" }],
  },
};

export default function SoinsPage() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-[#E2DCD3] py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A5A0] mb-4">Maison Sophie</p>
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-6xl md:text-7xl font-light text-[#1C1208] leading-tight max-w-2xl"
          >
            Nos soins<br />& expertises
          </h1>
          <p className="mt-6 text-[#7A7A7A] max-w-xl leading-relaxed">
            Chaque soin commence par une consultation gratuite. Nous prenons le temps
            de comprendre vos objectifs avant de vous proposer le protocole le plus adapté.
          </p>
        </div>
      </section>

      {/* Liste des soins */}
      <section className="bg-[#EAE5DC] py-4 px-4">
        <div className="max-w-7xl mx-auto space-y-px">
          {soins.map((soin, i) => (
            <Link
              key={soin.slug}
              href={`/soins/${soin.slug}`}
              className="group flex flex-col md:flex-row bg-[#EAE5DC] border border-[#D4CFC8] hover:border-[#C9A5A0] transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className={`relative w-full md:w-72 h-56 md:h-auto shrink-0 overflow-hidden ${i % 2 === 1 ? "md:order-last" : ""}`}>
                <Image
                  src={soin.image}
                  alt={soin.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 288px"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#7A7A7A]">0{i + 1}</span>
                    <span className="block w-8 h-px bg-[#D4CFC8]" />
                  </div>
                  <h2
                    style={{ fontFamily: "var(--font-display)" }}
                    className="text-4xl font-light text-[#1C1208] mb-2"
                  >
                    {soin.title}
                  </h2>
                  <p
                    style={{ fontFamily: "var(--font-display)" }}
                    className="text-xl italic text-[#C9A5A0] mb-5"
                  >
                    {soin.tagline}
                  </p>
                  <p className="text-[14px] text-[#7A7A7A] leading-relaxed max-w-lg">{soin.excerpt}</p>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#1C1208] group-hover:text-[#C9A5A0] transition-colors">
                    Découvrir ce soin
                  </span>
                  <span className="block w-8 h-px bg-[#1C1208] group-hover:bg-[#C9A5A0] group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C1208] py-20 px-8 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 style={{ fontFamily: "var(--font-display)" }} className="text-4xl font-light mb-4">
            Pas sûre par où commencer ?
          </h2>
          <p className="text-white/60 mb-8 text-sm leading-relaxed">
            La consultation de diagnostic est gratuite et sans engagement.
            Sophie vous guidera vers le soin le plus adapté à vos besoins.
          </p>
          <a
            href="https://www.planity.com/maison-sophie-31170-tournefeuille"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-[#C9A5A0] text-[#C9A5A0] text-[11px] tracking-[0.2em] uppercase hover:bg-[#C9A5A0] hover:text-white transition-all"
          >
            Prendre rendez-vous
          </a>
        </div>
      </section>
    </main>
  );
}
