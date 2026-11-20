# AGENTS.md – sirius-gmbh.de

Regeln für alle, die an dieser Seite arbeiten: Menschen, Lovable, Claude.
Kurz halten, bei Änderungen an der Struktur hier nachziehen.

## Was das ist

Website der SIRIUS GmbH document solutions, Freiburg. Vite + React + TypeScript,
Tailwind, shadcn/ui, react-router. Gehostet auf **Netlify**, an **Lovable** angebunden.
Social-Feeds kommen aus Supabase (`supabase/functions/sync-social-feeds`).

**SIRIUS** immer in Großbuchstaben. Die Seite **siezt**.

## Datenschutz – verbindlich

- **Einwilligung:** `src/lib/consent.ts` (Logik), `src/components/CookieBanner.tsx` (Banner),
  Link „Cookie-Einstellungen“ im Footer. Kategorien: Notwendig, „Statistik & Marketing“
  (Zoho PageSense), „Externe Medien“ (YouTube, Social-Feed).
- **Tracking-Scripts nie direkt in `index.html`** – nur über `ladeTracking()` in `consent.ts`.
  Nur **ein** PageSense-Script pro Seite (Zoho erkennt Duplikate). Routenwechsel zählt
  PageSense selbst, keine eigenen Aufrufe nötig.
- **Externe Inhalte** (YouTube, Instagram, TikTok, LinkedIn, Karten, Fremd-Bilder …) nur
  über `src/components/ExterneMedien.tsx` einbinden – erst nach Klick oder Einwilligung.
  Keine direkten `<iframe>` oder Bilder von fremden Servern.
- **Formulare mit Personendaten** bekommen `zps-mask="true"` am `<form>`, damit PageSense
  sie in Sitzungsaufzeichnungen ausblendet.
- Ändert sich der Tracking-Umfang (Datenschutzerklärung), `VERSION` in `consent.ts`
  hochzählen – frühere Zustimmungen werden dann einmal neu abgefragt.
- Neue Formulare, Tracking oder externe Dienste: vorher klären, ob
  `src/pages/Datenschutz.tsx` das abdeckt.
- **Keine Webhook-URLs, API-Keys oder Tokens in den Code** – auch nicht als `VITE_*`-Variable,
  die landen im ausgelieferten JavaScript. Formulare über eine eigene Serverfunktion schicken.

## Arbeitsweise

- Nicht direkt auf `main` arbeiten: Branch → Pull Request → Merge. Was in `main` landet, ist live.
- Keine gepushte History umschreiben (Lovable ist angebunden).
- Vor dem Pull Request: `npm run build` muss durchlaufen. Mobil prüfen (390 px), kein horizontales Scrollen.
- Commit-Nachrichten auf Deutsch.
