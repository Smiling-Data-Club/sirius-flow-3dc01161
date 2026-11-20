// Cookie-Einwilligung für sirius-gmbh.de
//
// Kategorien:
// - notwendig:  immer an (speichert nur diese Auswahl)
// - statistik:  „Statistik & Marketing“ – Zoho PageSense (Projekt „SIRIUS HP ab 05/2026“)
// - medien:     „Externe Medien“ – YouTube-Videos und Social-Feed (Bilder von
//               YouTube, Instagram, TikTok, LinkedIn und images.weserv.nl)
//
// Ohne Zustimmung wird nichts davon geladen. Die Entscheidung liegt nur im
// Browser (localStorage). Muster wie auf smiling-data-club.de
// (Repo Smiling-Data-Club/smilingdataclub, src/lib/consent.ts).
//
// Seitenwechsel in der React-App muss man nicht von Hand melden: Das
// PageSense-Script hängt sich selbst an history.pushState und zählt jeden
// Routenwechsel als Seitenaufruf.

import { useEffect, useState } from "react";

export type Einwilligung = { statistik: boolean; medien: boolean };

const KEY = "sirius-einwilligung";
// Hochzählen, wenn sich der Umfang ändert (Datenschutzerklärung): frühere
// Zustimmungen werden dann einmal neu abgefragt. Ablehnungen bleiben gültig.
const VERSION = 1;
const ALTER_KEY = "cookie-consent"; // alter Hinweis-Banner, hatte keine Wirkung

// PageSense-Projekt „SIRIUS HP ab 05/2026“. Schlüssel aus der Script-Adresse
// https://cdn-eu.pagesense.io/js/siriusgmbh/<SCHLÜSSEL>.js – leer = nichts laden.
// Nur EIN PageSense-Script pro Seite (Zoho erkennt Duplikate, das zweite bleibt wirkungslos).
const PAGESENSE_PROJEKT = "2300da9d6f6942f8a806fe3fd9c9a52c";

const ZOHO_PREFIXE = ["zab", "zps", "zpc", "zsc", "zft", "z_user_info"];
const AENDERUNG_EVENT = "sirius:einwilligung";
export const OEFFNEN_EVENT = "sirius:cookie-einstellungen";

type Gespeichert = Einwilligung & { v: number };

const leseGespeichert = (): Gespeichert | null => {
  try {
    const roh = localStorage.getItem(KEY);
    if (!roh) return null;
    const d = JSON.parse(roh);
    if (typeof d?.statistik !== "boolean" || typeof d?.medien !== "boolean") return null;
    return { statistik: d.statistik, medien: d.medien, v: Number(d.v) || 0 };
  } catch {
    return null;
  }
};

/** Gültige Entscheidung oder null (noch nicht entschieden / Zustimmung veraltet). */
export const leseEinwilligung = (): Einwilligung | null => {
  const d = leseGespeichert();
  if (!d) return null;
  const hatZugestimmt = d.statistik || d.medien;
  if (hatZugestimmt && d.v !== VERSION) return null;
  return { statistik: d.statistik, medien: d.medien };
};

export const speichereEinwilligung = (neu: Einwilligung) => {
  const vorher = leseEinwilligung();
  const vorherGespeichert = leseGespeichert();
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...neu, v: VERSION }));
    localStorage.removeItem(ALTER_KEY);
  } catch {
    // ohne Speicher fragt der Banner beim nächsten Besuch erneut
  }
  window.dispatchEvent(new Event(AENDERUNG_EVENT));
  if (neu.statistik) ladeTracking();
  if (!neu.statistik && vorherGespeichert?.statistik) {
    entferneZohoSpuren();
    // ein bereits geladenes Script lässt sich nur per Neuladen entfernen
    if (vorher?.statistik) {
      window.location.reload();
      return;
    }
  }
  // Externe Medien widerrufen: bereits geladene Videos/Bilder per Neuladen entfernen
  if (!neu.medien && vorher?.medien) window.location.reload();
};

/** Beim Start aufrufen: Tracking laden, wenn erlaubt; Reste veralteter Zustimmungen entfernen. */
export const starteEinwilligung = () => {
  const d = leseGespeichert();
  const gueltig = leseEinwilligung();
  if (d?.statistik && !gueltig) entferneZohoSpuren();
  if (gueltig?.statistik) ladeTracking();
};

export const ladeTracking = () => {
  if (!PAGESENSE_PROJEKT) return;
  // Zohos eigenen Cookie-Banner überspringen: unsere Einwilligung weitergeben (2 = angenommen)
  setzeCookie(`zpc${PAGESENSE_PROJEKT}`, "2", 365);
  const src = `https://cdn-eu.pagesense.io/js/siriusgmbh/${PAGESENSE_PROJEKT}.js`;
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  document.head.appendChild(s);
};

const setzeCookie = (name: string, wert: string, tage: number) => {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${wert}; path=/; max-age=${tage * 86400}; SameSite=Lax${secure}`;
};

const entferneZohoSpuren = () => {
  const istZoho = (name: string) => ZOHO_PREFIXE.some((p) => name.startsWith(p));
  const teile = location.hostname.split(".");
  const domains = [""];
  for (let i = 0; i < teile.length - 1; i++) domains.push(`; domain=.${teile.slice(i).join(".")}`);
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0].trim();
    if (!istZoho(name)) continue;
    for (const d of domains) document.cookie = `${name}=; path=/; max-age=0${d}`;
  }
  for (const speicher of [localStorage, sessionStorage]) {
    try {
      Object.keys(speicher).filter(istZoho).forEach((k) => speicher.removeItem(k));
    } catch {
      // Speicher nicht verfügbar
    }
  }
};

/** Externe Medien für dieses eine Mal erlauben (ohne die Einwilligung dauerhaft zu speichern). */
let medienEinmalig = false;
export const erlaubeMedienEinmalig = () => {
  medienEinmalig = true;
  window.dispatchEvent(new Event(AENDERUNG_EVENT));
};

/** Hook: Darf externer Inhalt geladen werden? Aktualisiert sich bei Änderungen. */
export const useExterneMedien = () => {
  const lese = () => medienEinmalig || !!leseEinwilligung()?.medien;
  const [erlaubt, setErlaubt] = useState(lese);
  useEffect(() => {
    const neu = () => setErlaubt(lese());
    window.addEventListener(AENDERUNG_EVENT, neu);
    return () => window.removeEventListener(AENDERUNG_EVENT, neu);
  }, []);
  return erlaubt;
};

/** Banner erneut öffnen (Link „Cookie-Einstellungen“ im Footer) */
export const oeffneCookieEinstellungen = () => window.dispatchEvent(new Event(OEFFNEN_EVENT));
