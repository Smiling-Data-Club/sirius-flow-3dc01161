// Culture & Code — Event-Galerie (Smiling Data Club)
// Neue Batches einfach als weitere Einträge unten ergänzen.
// category-Werte bitte aus GALLERY_CATEGORIES nehmen (oder dort erweitern).

// Batch 01 — Reportage
import photoArrival from "@/assets/sdc/004_culture_code_01_07431_20260701_goldencutmedia_2026.jpg";
import photoHug from "@/assets/sdc/012_culture_code_01_07470_20260701_goldencutmedia_2026.jpg";
import photoNeon from "@/assets/sdc/015_culture_code_01_07483_20260701_goldencutmedia_2026.jpg";
import photoStage from "@/assets/sdc/019_culture_code_01_07510_20260701_goldencutmedia_2026.jpg";
import photoKeynote from "@/assets/sdc/037_culture_code_01_07689_20260701_goldencutmedia_2026.jpg";

// Batch 02 — Reportage
import photoNeonGroup from "@/assets/sdc/059_culture_code_2026_07576_20260701_goldencutmedia_2026.jpg";
import photoOpeningStage from "@/assets/sdc/061_culture_code_2026_07580_20260701_goldencutmedia_2026.jpg";
import photoSpeakerMic from "@/assets/sdc/070_culture_code_2026_07605_20260701_goldencutmedia_2026.jpg";
import photoRetroCube from "@/assets/sdc/079_culture_code_2026_07629_20260701_goldencutmedia_2026.jpg";
import photoAudienceLaughing from "@/assets/sdc/095_culture_code_2026_07673_20260701_goldencutmedia_2026.jpg";
import photoCourtyardMural from "@/assets/sdc/103_culture_code_2026_07699_20260701_goldencutmedia_2026.jpg";
import photoFriesHand from "@/assets/sdc/109_culture_code_2026_07727_20260701_goldencutmedia_2026.jpg";
import photoChefPlating from "@/assets/sdc/110_culture_code_2026_07730_20260701_goldencutmedia_2026.jpg";
import photoChefSprinkle from "@/assets/sdc/111_culture_code_2026_07732_20260701_goldencutmedia_2026.jpg";
import photoBellyBun from "@/assets/sdc/119_culture_code_2026_07752_20260701_goldencutmedia_2026.jpg";

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

// Reihenfolge folgt grob dem Tagesablauf — Ankommen → Sessions → Catering → Ausklang.
export const galleryItems: GalleryItem[] = [
  // Ankommen
  { src: photoArrival, alt: "Ankommen im Innenhof", category: "arrival" },
  { src: photoCourtyardMural, alt: "Innenhof mit Smiling-Data-Club-Mural und Coffee Bike", category: "arrival" },

  // Sessions
  { src: photoStage, alt: "Blick auf die Bühne beim Opening", category: "opening" },
  { src: photoOpeningStage, alt: "Opening Keynote auf der Leinwand", category: "opening" },
  { src: photoRetroCube, alt: "Speakerin mit Würfel — Today's complexity. Retro simplicity.", category: "opening" },
  { src: photoKeynote, alt: "Impulsvortrag", category: "impulse" },
  { src: photoSpeakerMic, alt: "Speakerin im Dialog mit dem Publikum", category: "impulse" },
  { src: photoAudienceLaughing, alt: "Lachendes Publikum in der Session", category: "impulse" },

  // Catering
  { src: photoBellyBun, alt: "Belly & Bun — Food Truck-Signet", category: "catering" },
  { src: photoChefPlating, alt: "Anrichten am Food Truck", category: "catering" },
  { src: photoChefSprinkle, alt: "Finishing Touch am Food Truck", category: "catering" },
  { src: photoFriesHand, alt: "Pulled Beef auf Fritten — Belly & Bun", category: "catering" },

  // Ausklang
  { src: photoNeon, alt: "Neon-Signet Smiling Data Club im Innenhof", category: "details" },
  { src: photoNeonGroup, alt: "SDC-Team vor dem Neon-Signet", category: "publicviewing" },
  { src: photoHug, alt: "Persönlicher Moment beim Ausklang", category: "publicviewing" },
];
