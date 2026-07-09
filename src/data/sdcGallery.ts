// Culture & Code — Event-Galerie (Smiling Data Club)
// Neue Batches einfach als weitere Einträge unten ergänzen.
// category-Werte bitte aus GALLERY_CATEGORIES nehmen (oder dort erweitern).

import photoArrival from "@/assets/sdc/004_culture_code_01_07431_20260701_goldencutmedia_2026.jpg";
import photoHug from "@/assets/sdc/012_culture_code_01_07470_20260701_goldencutmedia_2026.jpg";
import photoNeon from "@/assets/sdc/015_culture_code_01_07483_20260701_goldencutmedia_2026.jpg";
import photoStage from "@/assets/sdc/019_culture_code_01_07510_20260701_goldencutmedia_2026.jpg";
import photoKeynote from "@/assets/sdc/037_culture_code_01_07689_20260701_goldencutmedia_2026.jpg";

export type GalleryCategoryKey =
  | "arrival"
  | "opening"
  | "impulse"
  | "deepdives"
  | "closing"
  | "transition"
  | "publicviewing"
  | "networking"
  | "catering"
  | "atmosphere"
  | "details";

export const GALLERY_CATEGORIES: Record<GalleryCategoryKey, string> = {
  arrival: "Ankommen & Empfang",
  opening: "Opening Keynote",
  impulse: "Impulsvortrag",
  deepdives: "Deep Dives / Expert Lounge",
  closing: "Abschluss-Keynote",
  transition: "Übergang in den offenen Teil",
  publicviewing: "Public Viewing & Ausklang",
  networking: "Networking & Gespräche",
  catering: "Coffee Bike & Catering",
  atmosphere: "Stimmung im Innenhof",
  details: "Details — Neon, Sticker, Merch",
};

export type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategoryKey;
};

export const galleryItems: GalleryItem[] = [
  { src: photoArrival, alt: "Ankommen im Innenhof", category: "arrival" },
  { src: photoStage, alt: "Opening Keynote auf der Bühne", category: "opening" },
  { src: photoKeynote, alt: "Impulsvortrag", category: "impulse" },
  { src: photoNeon, alt: "Neon-Signet Smiling Data Club im Innenhof", category: "details" },
  { src: photoHug, alt: "Persönlicher Moment beim Ausklang", category: "publicviewing" },
];
