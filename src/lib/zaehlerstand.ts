/* Hilfsfunktionen für die Seite /zaehlerstand */

/** Portal-Link nur zeigen, wenn eine echte Adresse ohne Zugangsdaten eingetragen ist. */
export function istGueltigePortalUrl(url: string): boolean {
  if (!/^https:\/\//i.test(url)) return false;
  return !/[?&](usr|user|pw|pwd|pass|passwort|password)=/i.test(url);
}

/** Für die Suche: Kleinbuchstaben, ohne Leerzeichen, Bindestriche, Schrägstriche, Kommas. */
export function normalisiere(text: string): string {
  return text.toLowerCase().replace(/[\s\-/,.()–]+/g, "");
}

/**
 * Modelle aus einer Modellliste (Titel, mit Komma getrennt), die zur Suche passen.
 * Beispiel: passendeModelle("MX-3070, MX-3071", "3071") → ["MX-3071"]
 */
export function passendeModelle(titel: string, suche: string): string[] {
  const q = normalisiere(suche);
  if (q.length < 2) return [];
  return titel.split(", ").filter((m) => normalisiere(m).includes(q));
}
