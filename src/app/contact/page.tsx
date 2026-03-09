import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Accès",
  description:
    "Maison Sophie — 122 Av. du Marquisat, 31170 Tournefeuille. Tél : 06 17 80 50 53. Ouvert lun–ven 9h–19h, sam 9h–12h. RDV en ligne 24h/24.",
  alternates: { canonical: "https://maisonsophie.fr/contact" },
  openGraph: {
    title: "Contact & Accès | Maison Sophie",
    description:
      "122 Av. du Marquisat, 31170 Tournefeuille. Tél : 06 17 80 50 53. Lun–ven 9h–19h, sam 9h–12h.",
    url: "https://maisonsophie.fr/contact",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "Maison Sophie — Contact et accès Tournefeuille" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Accès | Maison Sophie",
    description: "122 Av. du Marquisat, 31170 Tournefeuille. Tél : 06 17 80 50 53.",
    images: ["/images/hero.jpg"],
  },
};

const RDV_URL = "https://www.planity.com/maison-sophie-31170-tournefeuille";

const hours = [
  { day: "Lundi", time: "9h – 19h" },
  { day: "Mardi", time: "9h – 19h" },
  { day: "Mercredi", time: "9h – 19h" },
  { day: "Jeudi", time: "9h – 19h" },
  { day: "Vendredi", time: "9h – 19h" },
  { day: "Samedi", time: "9h – 12h" },
  { day: "Dimanche", time: "Fermé" },
];

export default function ContactPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-[#EAE5DC] py-20 px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C9A5A0] mb-4">
          Nous trouver
        </p>
        <h1
          style={{ fontFamily: "var(--font-display)" }}
          className="text-5xl md:text-6xl font-light text-[#1C1208] mb-4"
        >
          Contact & Accès
        </h1>
        <p className="text-[#7A7A7A] max-w-md mx-auto">
          Prenez rendez-vous en ligne ou contactez-nous directement.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Infos de contact */}
        <div className="space-y-10">
          {/* Adresse */}
          <div>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-2xl font-light text-[#1C1208] mb-4"
            >
              Où nous trouver
            </h2>
            <div className="space-y-2 text-[#7A7A7A]">
              <p className="text-[#1C1208] font-medium">Maison Sophie</p>
              <p>122, Avenue du Marquisat</p>
              <p>31170 Tournefeuille</p>
              <a
                href="tel:+33617805053"
                className="block mt-3 text-[#C9A5A0] hover:text-[#A8857F] transition-colors font-medium"
              >
                06 17 80 50 53
              </a>
            </div>
            <a
              href="https://maps.google.com/?q=122+Av.+du+Marquisat,+31170+Tournefeuille"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[#7A7A7A] hover:text-[#1C1208] transition-colors"
            >
              <span>Voir sur Google Maps</span>
              <span>↗</span>
            </a>
          </div>

          {/* Horaires */}
          <div>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-2xl font-light text-[#1C1208] mb-4"
            >
              Horaires d&apos;ouverture
            </h2>
            <ul className="divide-y divide-[#D4CFC8]">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between py-3 text-sm">
                  <span className="text-[#7A7A7A]">{h.day}</span>
                  <span
                    className={
                      h.time === "Fermé"
                        ? "text-[#7A7A7A]/50"
                        : "text-[#1C1208] font-medium"
                    }
                  >
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RDV */}
          <div className="p-6 bg-[#EAE5DC] rounded-2xl">
            <h3
              style={{ fontFamily: "var(--font-display)" }}
              className="text-xl font-light text-[#1C1208] mb-2"
            >
              Prise de rendez-vous
            </h3>
            <p className="text-sm text-[#7A7A7A] mb-4">
              Réservation en ligne disponible 24h/24 via Planity.
              La consultation de diagnostic est gratuite et obligatoire avant la première
              séance laser ou EstheLED.
            </p>
            <a
              href={RDV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#C9A5A0] text-white text-sm tracking-wide rounded-full hover:bg-[#A8857F] transition-colors"
            >
              Réserver en ligne
            </a>
          </div>
        </div>

        {/* Carte Google Maps */}
        <div className="rounded-2xl overflow-hidden border border-[#D4CFC8] min-h-[400px] lg:min-h-0">
          <iframe
            title="Localisation Maison Sophie — 122 Av. du Marquisat, Tournefeuille"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.0!2d1.350462!3d43.5770367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM0JzM3LjMiTiAxwrAyMScwMS43IkU!5e0!3m2!1sfr!2sfr!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 400 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
}
