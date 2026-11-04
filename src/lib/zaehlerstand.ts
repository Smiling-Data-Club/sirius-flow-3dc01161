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
