import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marco Costanza – Nella vita ci vuole Costanza",
  description:
    "Formazione di alto livello su Bitcoin e mercati finanziari. Divulgazione, consulenza 1to1, WhaleStreet Academy, Bailout Academy.",
  keywords: [
    "Marco Costanza",
    "Bitcoin",
    "formazione finanziaria",
    "WhaleStreet",
    "Bailout",
    "consulenza Bitcoin",
  ],
  authors: [{ name: "Marco Costanza" }],
  openGraph: {
    title: "Marco Costanza – Nella vita ci vuole Costanza",
    description:
      "Formazione di alto livello su Bitcoin e mercati finanziari.",
    type: "website",
    locale: "it_IT",
    url: "https://marcocostanza.it",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
