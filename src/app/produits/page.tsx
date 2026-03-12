import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Produits & Compléments | Maison Sophie",
  description:
    "Découvrez notre sélection de produits cosmétiques mesoestetic et de compléments alimentaires Novoma, recommandés par Sophie pour prolonger les résultats de vos soins.",
};

export default function ProduitsPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-[#EAE5DC] pt-32 pb-16 px-8">
        <div className="max-w-3xl">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A5A0] mb-4">
            Nos produits
          </p>
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-5xl md:text-7xl font-light text-[#1C1208] leading-tight mb-6"
          >
            Prolonger les résultats
            <br />
            <span className="italic">à la maison.</span>
          </h1>
          <div className="w-8 h-px bg-[#C9A5A0] mb-6" />
          <p className="text-[14px] text-[#7A7A7A] leading-relaxed max-w-xl">
            Chez Maison Sophie, les soins réalisés en cabine peuvent être complétés par une
            sélection de cosmétiques professionnels et de compléments alimentaires afin de
            prolonger et optimiser les résultats au quotidien.
          </p>
        </div>
      </section>

      {/* ── MESOESTETIC ── */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Photo */}
          <div className="relative h-[480px] lg:h-auto min-h-[480px] order-first lg:order-first">
            <Image
              src="/images/mesoestetic-products.jpg"
              alt="Produits mesoestetic disponibles à Maison Sophie"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          {/* Texte */}
          <div className="px-10 py-16 lg:px-16 lg:py-20 flex flex-col justify-center">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A5A0] mb-4">
              Cosmétiques professionnels
            </p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl lg:text-5xl font-light text-[#1C1208] mb-2"
            >
              mesoestetic<sup className="text-xl">®</sup>
            </h2>
            <div className="w-8 h-px bg-[#C9A5A0] my-5" />
            <p className="text-[13px] text-[#7A7A7A] leading-relaxed mb-5">
              J&apos;ai choisi de travailler avec la marque mesoestetic, reconnue
              internationalement pour son expertise en dermocosmétique et utilisée par de
              nombreux professionnels de la peau. Les formules associent des actifs hautement
              concentrés et des technologies avancées pour agir de manière ciblée sur les
              principales préoccupations cutanées.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Imperfections et acné",
                "Taches pigmentaires",
                "Signes de l'âge",
                "Déshydratation et manque d'éclat",
                "Protection et prévention du vieillissement cutané",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px] text-[#1C1208]">
                  <span className="mt-1.5 shrink-0 w-4 h-px bg-[#C9A5A0]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[13px] text-[#7A7A7A] leading-relaxed">
              Chaque produit est sélectionné avec exigence afin de s&apos;intégrer dans une
              routine adaptée à votre peau et à vos objectifs. Lors de votre consultation ou
              de votre soin, un diagnostic personnalisé permet de vous orienter vers les
              produits les plus adaptés.
            </p>
          </div>
        </div>
      </section>

      {/* ── NOVOMA ── */}
      <section className="bg-[#EAE5DC]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Texte */}
          <div className="px-10 py-16 lg:px-16 lg:py-20 flex flex-col justify-center">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A5A0] mb-4">
              Compléments alimentaires
            </p>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl lg:text-5xl font-light text-[#1C1208] mb-2"
            >
              Novoma
            </h2>
            <div className="w-8 h-px bg-[#C9A5A0] my-5" />
            <p className="text-[13px] text-[#7A7A7A] leading-relaxed mb-5">
              Chez Maison Sophie, l&apos;approche de la peau ne se limite pas uniquement aux
              soins réalisés en cabine. L&apos;équilibre cutané et la qualité de la peau
              dépendent aussi de nombreux facteurs internes : alimentation, stress, récupération
              ou encore qualité du sommeil.
            </p>
            <p className="text-[13px] text-[#7A7A7A] leading-relaxed mb-5">
              C&apos;est pourquoi j&apos;ai sélectionné les compléments alimentaires de la marque
              Novoma, reconnue pour la qualité de ses formulations et la traçabilité de ses
              ingrédients.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Soutien de la peau, des cheveux et des ongles",
                "Récupération et bien-être musculaire",
                "Équilibre du système nerveux et gestion du stress",
                "Soutien articulaire et vitalité globale",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px] text-[#1C1208]">
                  <span className="mt-1.5 shrink-0 w-4 h-px bg-[#C9A5A0]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[13px] text-[#7A7A7A] leading-relaxed">
              Lors de votre venue chez Maison Sophie, je peux vous conseiller sur les
              compléments les plus adaptés à vos besoins, en complément des soins réalisés
              en cabine.
            </p>
          </div>
          {/* Photo Novoma */}
          <div className="relative h-[480px] lg:h-auto min-h-[480px]">
            <Image
              src="/images/novoma-products.jpg"
              alt="Compléments alimentaires Novoma disponibles à Maison Sophie"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── CONSEIL PERSO ── */}
      <section className="bg-[#1C1208] py-20 px-8 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A5A0] mb-6">
            Un conseil sur mesure
          </p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl font-light mb-6 leading-tight"
          >
            Votre routine, adaptée
            <br />
            <span className="italic">à votre peau.</span>
          </h2>
          <p className="text-[13px] text-white/60 leading-relaxed mb-10 max-w-lg mx-auto">
            À chaque consultation ou soin, Sophie prend le temps d&apos;analyser votre peau
            et de vous orienter vers les produits et compléments les plus adaptés à vos
            objectifs.
          </p>
          <Link
            href="https://www.planity.com/maison-sophie-31170-tournefeuille"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A5A0] text-white text-[11px] tracking-[0.25em] uppercase px-8 py-4 hover:bg-[#b8918c] transition-colors duration-200"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </main>
  );
}
