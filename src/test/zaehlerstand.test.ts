import { existsSync, readdirSync } from "fs";
import { resolve } from "path";
import { describe, expect, it } from "vitest";
import { hersteller, PDF_URL, PORTAL_URL } from "@/data/zaehlerstand";
import { istGueltigePortalUrl, normalisiere, passendeModelle } from "@/lib/zaehlerstand";

const bildOrdner = resolve(__dirname, "../../public/zaehlerstand");
const alleBilder = hersteller.flatMap((h) => [
  ...h.gruppen.flatMap((g) => g.schritte.flatMap((s) => s.bilder ?? [])),
  ...(h.statusseite?.bilder ?? []),
]);

describe("Zählerstand-Daten", () => {
  it("jedes eingetragene Bild liegt in public/zaehlerstand", () => {
    const fehlend = alleBilder.filter((b) => !existsSync(resolve(bildOrdner, b.datei)));
    expect(fehlend.map((b) => b.datei)).toEqual([]);
  });

  it("jedes Bild hat einen Alt-Text", () => {
    expect(alleBilder.filter((b) => b.alt.trim().length < 5).map((b) => b.datei)).toEqual([]);
  });

  it("keine Bilddatei im Ordner ist verwaist", () => {
    const eingetragen = new Set(alleBilder.map((b) => b.datei));
    const verwaist = readdirSync(bildOrdner).filter((f) => !eingetragen.has(f));
    expect(verwaist).toEqual([]);
  });

  it("IDs sind eindeutig und adresstauglich", () => {
    const ids = hersteller.flatMap((h) => [h.id, ...h.gruppen.map((g) => g.id)]);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(id).toMatch(/^[a-z0-9-]+$/);
  });

  it("PDF liegt unter dem festen Namen", () => {
    expect(existsSync(resolve(__dirname, "../../public", PDF_URL.replace(/^\//, "")))).toBe(true);
  });

  it("Portal-Link enthält keine Zugangsdaten", () => {
    expect(PORTAL_URL).not.toMatch(/(usr|pw)=/i);
  });
});

describe("Hilfsfunktionen", () => {
  it("Portal-Links mit Zugangsdaten werden nicht angezeigt", () => {
    expect(istGueltigePortalUrl("[PORTAL-URL]")).toBe(false);
    expect(istGueltigePortalUrl("https://portal.example.de/?USR=a&PW=b")).toBe(false);
    expect(istGueltigePortalUrl("https://portal.example.de/zaehler")).toBe(true);
  });

  it("Suche ignoriert Bindestriche und Leerzeichen", () => {
    expect(normalisiere("MX-B350P, MX-B450P")).toContain(normalisiere("mx b450"));
    expect(normalisiere("B-EX4T1")).toBe("bex4t1");
  });
});

describe("Modellsuche Sharp/Epson", () => {
  it("findet einzelne Modelle in der Modellliste", () => {
    expect(passendeModelle("MX-3070, MX-3071, MX-M3071", "mx-3071")).toEqual(["MX-3071"]);
    expect(passendeModelle("MX-3070, MX-3071, MX-M3071", "3071")).toEqual(["MX-3071", "MX-M3071"]);
    expect(passendeModelle("WF-C878RDTWF, WF-C879RDTWF", "wf c878")).toEqual(["WF-C878RDTWF"]);
    expect(passendeModelle("MX-3070", "m")).toEqual([]);
  });

  it("jede Gruppe bei Sharp und Epson ist über ihr erstes Modell auffindbar", () => {
    for (const h of hersteller.filter((x) => x.nurSuche))
      for (const g of h.gruppen) expect(passendeModelle(g.titel, g.titel.split(", ")[0]).length).toBeGreaterThan(0);
  });
});
