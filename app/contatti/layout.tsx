import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti – Marco Costanza",
  description: "Contatta Marco Costanza: email, social, form.",
};

export default function ContattiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
