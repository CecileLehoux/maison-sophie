import type { Metadata } from "next";
import { Raleway, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const raleway = Raleway({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maisonsophie.fr"),
  title: {
    default: "Maison Sophie | Centre Technico-Esthétique à Tournefeuille",
    template: "%s | Maison Sophie — Tournefeuille",
  },
  description:
    "Maison Sophie, centre technico-esthétique à Tournefeuille (31170). Épilation laser, photobiomodulation LED, pressothérapie, soins sportifs. RDV en ligne 24h/24.",
  keywords:
    "épilation laser Tournefeuille, institut beauté Tournefeuille, photobiomodulation LED, EstheLED, pressothérapie, soins sportifs 31170, Maison Sophie",
  authors: [{ name: "Maison Sophie" }],
  openGraph: {
    title: "Maison Sophie | Centre Technico-Esthétique",
    description:
      "Centre technico-esthétique à Tournefeuille. Épilation laser, EstheLED, pressothérapie, soins sportifs.",
    url: "https://maisonsophie.fr",
    siteName: "Maison Sophie",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Maison Sophie - Centre technico-esthétique Tournefeuille",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Sophie | Centre Technico-Esthétique à Tournefeuille",
    description:
      "Épilation laser, EstheLED, pressothérapie et soins sportifs à Tournefeuille. RDV en ligne 24h/24.",
    images: ["/images/hero.jpg"],
  },
  alternates: {
    canonical: "https://maisonsophie.fr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              name: "Maison Sophie",
              description:
                "Centre technico-esthétique expert en soins du corps et technologies bien-être. Épilation laser définitive, photobiomodulation LED, pressothérapie et soins sportifs.",
              url: "https://maisonsophie.fr",
              telephone: "+33617805053",
              priceRange: "25€ – 300€",
              address: {
                "@type": "PostalAddress",
                streetAddress: "122, Av. du Marquisat",
                addressLocality: "Tournefeuille",
                postalCode: "31170",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 43.5770367,
                longitude: 1.350462,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "09:00",
                  closes: "12:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "5",
                bestRating: "5",
                worstRating: "1",
              },
              image: "https://maisonsophie.fr/images/hero.jpg",
              sameAs: [
                "https://www.planity.com/maison-sophie-31170-tournefeuille",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${raleway.variable} ${dmSans.variable}`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
