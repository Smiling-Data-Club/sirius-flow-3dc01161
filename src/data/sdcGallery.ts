// Culture & Code — Event-Galerie (Smiling Data Club)
// Neue Batches einfach als weitere Einträge unten ergänzen.
// category-Werte bitte aus GALLERY_CATEGORIES nehmen (oder dort erweitern).

// Batch 01 — Reportage
import photoArrival from "@/assets/sdc/004_culture_code_01_07431_20260701_goldencutmedia_2026.jpg";
import photoNeon from "@/assets/sdc/015_culture_code_01_07483_20260701_goldencutmedia_2026.jpg";
import photoStage from "@/assets/sdc/019_culture_code_01_07510_20260701_goldencutmedia_2026.jpg";
import photoKeynote from "@/assets/sdc/037_culture_code_01_07689_20260701_goldencutmedia_2026.jpg";

// Batch 02 — Reportage
import photoNeonGroup from "@/assets/sdc/059_culture_code_2026_07576_20260701_goldencutmedia_2026.jpg";
import photoSpeakerMic from "@/assets/sdc/070_culture_code_2026_07605_20260701_goldencutmedia_2026.jpg";
import photoRetroCube from "@/assets/sdc/079_culture_code_2026_07629_20260701_goldencutmedia_2026.jpg";
import photoAudienceLaughing from "@/assets/sdc/095_culture_code_2026_07673_20260701_goldencutmedia_2026.jpg";
import photoCourtyardMural from "@/assets/sdc/103_culture_code_2026_07699_20260701_goldencutmedia_2026.jpg";
import photoFriesHand from "@/assets/sdc/109_culture_code_2026_07727_20260701_goldencutmedia_2026.jpg";

// Batch 03 — Reportage
import photoCoffeeBikeGreet from "@/assets/sdc/003_culture_code_2026_07429_20260701_goldencutmedia_2026.jpg";
import photoHugSdcShirt from "@/assets/sdc/024_culture_code_2026_07469_20260701_goldencutmedia_2026.jpg";
import photoCoffeeChat from "@/assets/sdc/030_culture_code_2026_07486_20260701_goldencutmedia_2026.jpg";
import photoHandshakeGroup from "@/assets/sdc/033_culture_code_2026_07492_20260701_goldencutmedia_2026.jpg";
import photoOpeningDuo from "@/assets/sdc/043_culture_code_2026_07520_20260701_goldencutmedia_2026.jpg";
import photoLanyardProgram from "@/assets/sdc/057_culture_code_2026_07572_20260701_goldencutmedia_2026.jpg";

// Batch 04 — Reportage
import photoStepBahadirLaugh from "@/assets/sdc/120_culture_code_2026_07755_20260701_goldencutmedia_2026.jpg";
import photoNikeSdc from "@/assets/sdc/127_culture_code_2026_07777_20260701_goldencutmedia_2026.jpg";
import photoCupcakeBite from "@/assets/sdc/135_culture_code_2026_08029_20260701_goldencutmedia_2026.jpg";
import photoSpeakerAuto from "@/assets/sdc/150_culture_code_2026_08065_20260701_goldencutmedia_2026.jpg";
import photoAudienceNeon from "@/assets/sdc/159_culture_code_2026_08094_20260701_goldencutmedia_2026.jpg";
import photoSpeakerPortrait from "@/assets/sdc/166_culture_code_2026_08124_20260701_goldencutmedia_2026.jpg";

// Batch 05 — Reportage
import photoSofaPhone from "@/assets/sdc/176_culture_code_2026_08157_20260701_goldencutmedia_2026.jpg";
import photoBaristaBike from "@/assets/sdc/183_culture_code_2026_08185_20260701_goldencutmedia_2026.jpg";
import photoSpeakerHannah from "@/assets/sdc/201_culture_code_2026_08250_20260701_goldencutmedia_2026.jpg";
import photoSpeakerClaude from "@/assets/sdc/204_culture_code_2026_08265_20260701_goldencutmedia_2026.jpg";
import photoSpeakerHands from "@/assets/sdc/207_culture_code_2026_08273_20260701_goldencutmedia_2026.jpg";
import photoApplause from "@/assets/sdc/221_culture_code_2026_08327_20260701_goldencutmedia_2026.jpg";
import photoPosterDanke from "@/assets/sdc/222_culture_code_2026_08332_20260701_goldencutmedia_2026.jpg";
import photoNeonTable from "@/assets/sdc/224_culture_code_2026_08338_20260701_goldencutmedia_2026.jpg";

// Batch 06 — Reportage
import photoBackstageSelfie from "@/assets/sdc/225_culture_code_2026_08341_20260701_goldencutmedia_2026.jpg";
import photoTeamGroupNeon from "@/assets/sdc/226_culture_code_2026_08362_20260701_goldencutmedia_2026.jpg";
import photoTeamGroupFunny from "@/assets/sdc/227_culture_code_2026_08370_20260701_goldencutmedia_2026.jpg";
import photoGuestBottle from "@/assets/sdc/230_culture_code_2026_08386_20260701_goldencutmedia_2026.jpg";
import photoKalteSofieMan from "@/assets/sdc/244_culture_code_2026_08436_20260701_goldencutmedia_2026.jpg";
import photoNetworkChat from "@/assets/sdc/246_culture_code_2026_08442_20260701_goldencutmedia_2026.jpg";
import photoKalteSofieCheers from "@/assets/sdc/249_culture_code_2026_08452_20260701_goldencutmedia_2026.jpg";

export type GalleryCategoryKey =
  | "arrival"
  | "opening"
  | "impulse"
  | "deepdives"
  | "closing"
  | "transition"
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
  { src: photoHandshakeGroup, alt: "Networking beim Ankommen auf dem Parkplatz", category: "arrival" },
  { src: photoCoffeeBikeGreet, alt: "Begrüßung an der Coffee Bike", category: "networking" },
  { src: photoCoffeeChat, alt: "Gespräch bei Kaffee und Espresso vor dem Opening", category: "networking" },

  // Sessions
  { src: photoOpeningDuo, alt: "Opening Keynote — Fabian Schüler und Bahadir Alaz auf der Bühne", category: "opening" },
  { src: photoStage, alt: "Bahadir Alaz während der Opening Keynote", category: "opening" },
  { src: photoKeynote, alt: "Betül Hanisch beim Impulsvortrag „Der Mensch nach der Maschine“", category: "impulse" },
  { src: photoSpeakerMic, alt: "Betül Hanisch im Austausch mit dem Publikum", category: "impulse" },
  { src: photoRetroCube, alt: "Betül Hanisch mit Würfel-Motiv beim Impulsvortrag", category: "impulse" },
  { src: photoAudienceLaughing, alt: "Lachendes Publikum in der Session", category: "impulse" },
  { src: photoSpeakerAuto, alt: "Josef R. Schneider beim Impulsvortrag „AI meets EQ“", category: "impulse" },
  { src: photoSpeakerPortrait, alt: "Josef R. Schneider — Portrait während des Impulsvortrags", category: "impulse" },
  { src: photoAudienceNeon, alt: "Publikum in der Session vor der Neon-Greenwall", category: "impulse" },
  { src: photoSpeakerHannah, alt: "Prof. Dr. Hannah Bast bei der Closing Keynote", category: "closing" },
  { src: photoSpeakerClaude, alt: "Prof. Dr. Hannah Bast während der Closing Keynote mit Live-Demo", category: "closing" },
  { src: photoSpeakerHands, alt: "Prof. Dr. Hannah Bast im Q&A nach der Closing Keynote", category: "closing" },
  { src: photoApplause, alt: "Applaus nach der Closing Keynote", category: "closing" },
  { src: photoPosterDanke, alt: "Danke-Poster wird nach der Closing Keynote betrachtet", category: "closing" },

  // Details
  { src: photoLanyardProgram, alt: "Programm-Lanyard mit Timetable in der Hand", category: "details" },
  { src: photoNikeSdc, alt: "Custom Nike-Sneaker mit SDC-Stick", category: "details" },
  { src: photoNeon, alt: "Neon-Signet Smiling Data Club im Innenhof", category: "details" },

  // Catering — max. 1 pro Station
  { src: photoFriesHand, alt: "Pulled Beef auf Fritten — Belly & Bun", category: "catering" },
  { src: photoBaristaBike, alt: "Barista an der roten Coffee Bike", category: "catering" },
  { src: photoCupcakeBite, alt: "Erster Bissen — Cupcake mit Buttercreme", category: "catering" },
  { src: photoKalteSofieCheers, alt: "Cheers mit Kalter Sofie — Slush-Getränke am Belly-&-Bun-Truck", category: "catering" },

  // Networking & Ausklang
  { src: photoStepBahadirLaugh, alt: "Lachender Austausch am Stehtisch — STEP & SDC", category: "networking" },
  { src: photoHugSdcShirt, alt: "Umarmung — Moment im SDC-Shirt", category: "networking" },
  { src: photoSofaPhone, alt: "SDC-Team auf dem Sofa im Innenhof", category: "networking" },
  { src: photoNeonTable, alt: "Gespräch am Stehtisch vor der Neon-Greenwall", category: "networking" },
  { src: photoKalteSofieMan, alt: "Gast mit Kalter Sofie im SDC-Shirt", category: "networking" },
  { src: photoNetworkChat, alt: "Networking-Gespräch am Stehtisch", category: "networking" },
  { src: photoBackstageSelfie, alt: "Backstage-Selfie mit dem Orga-Team", category: "networking" },

  // Atmosphäre im Innenhof
  { src: photoGuestBottle, alt: "Lächelnder Gast beim Ausklang im Innenhof", category: "atmosphere" },
  { src: photoNeonGroup, alt: "Team vor dem Neon-Signet", category: "atmosphere" },
  { src: photoTeamGroupNeon, alt: "Orga-Team-Foto vor der Neon-Greenwall", category: "atmosphere" },
  { src: photoTeamGroupFunny, alt: "Orga-Team — Grimassen-Version vor der Neon-Wall", category: "atmosphere" },
];
