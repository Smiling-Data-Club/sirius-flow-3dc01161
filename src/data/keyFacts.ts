import entgelttransparenzImg from "@/assets/key-facts/entgelttransparenz-2026.jpg";
import eRechnungImg from "@/assets/key-facts/e-rechnung.jpg";

export interface KeyFact {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
  /** Path to the static lead magnet HTML inside /public */
  href: string;
}

export const keyFacts: KeyFact[] = [
  {
    slug: "entgelttransparenz-2026",
    title: "Entgelttransparenz 2026: Sind Sie vorbereitet?",
    date: "2026-05-01",
    excerpt:
      "Die EU-Entgelttransparenzrichtlinie läuft im Juni 2026 ab — und der Handlungsbedarf besteht bereits heute. Was das für Ihr Unternehmen bedeutet.",
    image: entgelttransparenzImg,
    tags: ["Compliance", "HR", "EU-Richtlinie", "2026"],
    href: "/lead-magnets/entgelttransparenz-2026.html",
  },
  {
    slug: "e-rechnung",
    title: "E-Rechnung: Pflicht ab 2025 — was Sie jetzt wissen müssen.",
    date: "2025-01-15",
    excerpt:
      "Ab 2025 wird die elektronische Rechnung im B2B-Bereich verpflichtend. Formate, Fristen und konkrete Schritte zur Umsetzung im Überblick.",
    image: eRechnungImg,
    tags: ["Compliance", "Digitalisierung", "B2B", "2025"],
    href: "/e-rechnung.html",
  },
];

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
