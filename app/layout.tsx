import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://scioly.hydeptsa.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hyde Science Olympiad | Cupertino, CA",
    template: "%s | Hyde Science Olympiad",
  },
  description:
    "Official website of the Hyde Middle School Science Olympiad team in Cupertino, California. Two-time NorCal State qualifier with competition results, team roster, and resources.",
  keywords: [
    "Hyde Science Olympiad",
    "Hyde Middle School",
    "Science Olympiad",
    "Cupertino",
    "NorCal State",
    "middle school science competition",
    "Hyde SciOly",
    "Santa Clara County",
  ],
  openGraph: {
    title: "Hyde Science Olympiad | Cupertino, CA",
    description:
      "Official website of the Hyde Middle School Science Olympiad team in Cupertino, California. Two-time NorCal State qualifier.",
    url: siteUrl,
    siteName: "Hyde Science Olympiad",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hyde Science Olympiad | Cupertino, CA",
    description:
      "Official website of the Hyde Middle School Science Olympiad team in Cupertino, California.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsTeam",
              name: "Hyde Science Olympiad",
              alternateName: "Hyde SciOly",
              url: siteUrl,
              sport: "Science Olympiad",
              memberOf: {
                "@type": "SportsOrganization",
                name: "Science Olympiad",
              },
              parentOrganization: {
                "@type": "MiddleSchool",
                name: "Hyde Middle School",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Cupertino",
                  addressRegion: "CA",
                  addressCountry: "US",
                },
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
