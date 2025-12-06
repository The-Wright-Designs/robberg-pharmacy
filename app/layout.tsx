import type { Metadata } from "next";

import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

import "@/_styles/globals.css";
import Header from "@/_components/navigation/header";
import Footer from "@/_components/navigation/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.robbergpharmacy.co.za"),
  title: "Robberg Pharmacy",
  description:
    "Robberg Pharmacy is part of the Pharmacy at Spar network, conveniently located at the Beacon Island Centre on Beacon Isle Drive in Plettenberg Bay. We combine the personal touch of independent pharmacy care with the strength and reliability of the Spar group's extensive network.",
  keywords:
    "pharmacy, Plettenberg Bay, Beacon Island Centre, medicine delivery, pharmacist, pharmaceutical services, wound care, ear syringing, baby clinic, paediatric vaccines, dispensary, healthcare, Spar pharmacy, BPharm, pharmacogenomics, functional medicine, emergency pharmacy",
  openGraph: {
    description:
      "Robberg Pharmacy is part of the Pharmacy at Spar network, conveniently located at the Beacon Island Centre on Beacon Isle Drive in Plettenberg Bay.",
    type: "website",
    locale: "en_ZA",
    siteName: "Robberg Pharmacy",
    images: [
      {
        url: "/open-graph-image.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${lato.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
