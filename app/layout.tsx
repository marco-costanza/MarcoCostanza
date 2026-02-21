import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
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
    <html lang="it" className={roboto.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
