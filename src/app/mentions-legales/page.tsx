import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site Maison Sophie, centre technico-esthétique à Tournefeuille (31170).",
  alternates: { canonical: "https://maisonsophie.fr/mentions-legales" },
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <main className="pt-16">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1
          style={{ fontFamily: "var(--font-display)" }}
          className="text-4xl font-light text-[#1C1208] mb-10"
        >
          Mentions Légales
        </h1>

        <div className="space-y-8 text-sm text-[#7A7A7A] leading-relaxed">
          <section>
            <h2 className="text-base font-medium text-[#1C1208] mb-2">Éditeur du site</h2>
            <p>Maison Sophie</p>
            <p>122, Avenue du Marquisat</p>
            <p>31170 Tournefeuille</p>
            <p>Tél. : 06 17 80 50 53</p>
          </section>

          <section>
            <h2 className="text-base font-medium text-[#1C1208] mb-2">Hébergement</h2>
            <p>Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA.</p>
          </section>

          <section>
            <h2 className="text-base font-medium text-[#1C1208] mb-2">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, logos) sont la propriété
              exclusive de Maison Sophie. Toute reproduction est interdite sans autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-[#1C1208] mb-2">Données personnelles</h2>
            <p>
              Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre
              à vos demandes. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification
              et de suppression de vos données en nous contactant au 06 17 80 50 53.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
