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

// Batch 03 — Reportage
import photoCoffeeBikeGreet from "@/assets/sdc/003_culture_code_2026_07429_20260701_goldencutmedia_2026.jpg";
import photoHugSdcShirt from "@/assets/sdc/024_culture_code_2026_07469_20260701_goldencutmedia_2026.jpg";
import photoCoffeeChat from "@/assets/sdc/030_culture_code_2026_07486_20260701_goldencutmedia_2026.jpg";
import photoHandshakeGroup from "@/assets/sdc/033_culture_code_2026_07492_20260701_goldencutmedia_2026.jpg";
import photoOpeningDuo from "@/assets/sdc/043_culture_code_2026_07520_20260701_goldencutmedia_2026.jpg";
import photoLanyardProgram from "@/assets/sdc/057_culture_code_2026_07572_20260701_goldencutmedia_2026.jpg";
import photoTeamNeonWall from "@/assets/sdc/058_culture_code_2026_07575_20260701_goldencutmedia_2026.jpg";

// Batch 04 — Reportage
import photoStepBahadirLaugh from "@/assets/sdc/120_culture_code_2026_07755_20260701_goldencutmedia_2026.jpg";
import photoCupcakeTrayClose from "@/assets/sdc/122_culture_code_2026_07758_20260701_goldencutmedia_2026.jpg";
import photoCupcakeServer from "@/assets/sdc/123_culture_code_2026_07760_20260701_goldencutmedia_2026.jpg";
import photoGuestFries from "@/assets/sdc/126_culture_code_2026_07772_20260701_goldencutmedia_2026.jpg";
import photoNikeSdc from "@/assets/sdc/127_culture_code_2026_07777_20260701_goldencutmedia_2026.jpg";
import photoCupcakeBite from "@/assets/sdc/135_culture_code_2026_08029_20260701_goldencutmedia_2026.jpg";
import photoSpeakerAuto from "@/assets/sdc/150_culture_code_2026_08065_20260701_goldencutmedia_2026.jpg";
import photoAudienceNeon from "@/assets/sdc/159_culture_code_2026_08094_20260701_goldencutmedia_2026.jpg";
import photoSpeakerPortrait from "@/assets/sdc/166_culture_code_2026_08124_20260701_goldencutmedia_2026.jpg";

// Batch 05 — Reportage
import photoSlushMachine from "@/assets/sdc/175_culture_code_2026_08156_20260701_goldencutmedia_2026.jpg";
import photoSofaPhone from "@/assets/sdc/176_culture_code_2026_08157_20260701_goldencutmedia_2026.jpg";
import photoBaristaBike from "@/assets/sdc/183_culture_code_2026_08185_20260701_goldencutmedia_2026.jpg";
import photoEspressoPour from "@/assets/sdc/185_culture_code_2026_08194_20260701_goldencutmedia_2026.jpg";
import photoSpeakerHannah from "@/assets/sdc/201_culture_code_2026_08250_20260701_goldencutmedia_2026.jpg";
import photoSpeakerClaude from "@/assets/sdc/204_culture_code_2026_08265_20260701_goldencutmedia_2026.jpg";
import photoSpeakerHands from "@/assets/sdc/207_culture_code_2026_08273_20260701_goldencutmedia_2026.jpg";
import photoApplause from "@/assets/sdc/221_culture_code_2026_08327_20260701_goldencutmedia_2026.jpg";
import photoPosterDanke from "@/assets/sdc/222_culture_code_2026_08332_20260701_goldencutmedia_2026.jpg";
import photoNeonTable from "@/assets/sdc/224_culture_code_2026_08338_20260701_goldencutmedia_2026.jpg";

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
  { src: photoHandshakeGroup, alt: "Networking beim Ankommen auf dem Parkplatz", category: "arrival" },
  { src: photoCoffeeBikeGreet, alt: "Begrüßung an der Coffee Bike", category: "networking" },
  { src: photoCoffeeChat, alt: "Gespräch bei Kaffee und Espresso vor dem Opening", category: "networking" },

  // Sessions
  { src: photoOpeningDuo, alt: "Willkommen — Fabian & Bahadir auf der Bühne", category: "opening" },
  { src: photoStage, alt: "Blick auf die Bühne beim Opening", category: "opening" },
  { src: photoOpeningStage, alt: "Opening Keynote auf der Leinwand", category: "opening" },
  { src: photoRetroCube, alt: "Speakerin mit Würfel — Today's complexity. Retro simplicity.", category: "opening" },
  { src: photoKeynote, alt: "Impulsvortrag", category: "impulse" },
  { src: photoSpeakerMic, alt: "Speakerin im Dialog mit dem Publikum", category: "impulse" },
  { src: photoAudienceLaughing, alt: "Lachendes Publikum in der Session", category: "impulse" },
  { src: photoSpeakerAuto, alt: "Impulsvortrag — Speaker mit Slide „Das Auto\"", category: "impulse" },
  { src: photoSpeakerPortrait, alt: "Speaker-Portrait im Gespräch", category: "impulse" },
  { src: photoAudienceNeon, alt: "Publikum vor der Neon-Greenwall", category: "impulse" },

  // Details
  { src: photoLanyardProgram, alt: "Programm-Lanyard mit Timetable in der Hand", category: "details" },
  { src: photoNikeSdc, alt: "Custom Nike-Sneaker mit SDC-Stick", category: "details" },

  // Catering
  { src: photoBellyBun, alt: "Belly & Bun — Food Truck-Signet", category: "catering" },
  { src: photoChefPlating, alt: "Anrichten am Food Truck", category: "catering" },
  { src: photoChefSprinkle, alt: "Finishing Touch am Food Truck", category: "catering" },
  { src: photoFriesHand, alt: "Pulled Beef auf Fritten — Belly & Bun", category: "catering" },
  { src: photoGuestFries, alt: "Gast mit Pulled-Beef-Fritten am Foodtruck", category: "catering" },
  { src: photoCupcakeTrayClose, alt: "Tablett mit SDC-Cupcakes", category: "catering" },
  { src: photoCupcakeServer, alt: "SDC-Cupcakes werden serviert", category: "catering" },
  { src: photoCupcakeBite, alt: "Erster Bissen — Cupcake mit Buttercreme", category: "catering" },

  // Ausklang & Networking
  { src: photoStepBahadirLaugh, alt: "Lachender Austausch am Stehtisch — STEP & SDC", category: "networking" },
  { src: photoNeon, alt: "Neon-Signet Smiling Data Club im Innenhof", category: "details" },
  { src: photoTeamNeonWall, alt: "SDC-Team vor der Neon-Greenwall", category: "publicviewing" },
  { src: photoNeonGroup, alt: "SDC-Team vor dem Neon-Signet", category: "publicviewing" },
  { src: photoHugSdcShirt, alt: "Umarmung — Moment im SDC-Shirt", category: "publicviewing" },
  { src: photoHug, alt: "Persönlicher Moment beim Ausklang", category: "publicviewing" },

  // Batch 05
  { src: photoSofaPhone, alt: "SDC-Team auf dem Sofa im Innenhof", category: "networking" },
  { src: photoNeonTable, alt: "Gespräch am Stehtisch vor der Neon-Greenwall", category: "networking" },
  { src: photoBaristaBike, alt: "Barista an der roten Coffee Bike", category: "catering" },
  { src: photoEspressoPour, alt: "Espresso läuft — Detail an der Coffee Bike", category: "catering" },
  { src: photoSlushMachine, alt: "Slush-Maschine im Innenhof — ohne Alkohol", category: "catering" },
  { src: photoSpeakerHannah, alt: "Speakerin im Impulsvortrag", category: "impulse" },
  { src: photoSpeakerClaude, alt: "Live-Demo mit Claude auf der Bühne", category: "impulse" },
  { src: photoSpeakerHands, alt: "Speakerin gestikuliert vor Code-Screen", category: "impulse" },
  { src: photoApplause, alt: "Applaus im Publikum", category: "impulse" },
  { src: photoPosterDanke, alt: "„Danke, Helmut\" — Abschieds-Poster wird betrachtet", category: "publicviewing" },
];
