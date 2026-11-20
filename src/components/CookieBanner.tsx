import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  OEFFNEN_EVENT,
  leseEinwilligung,
  speichereEinwilligung,
  starteEinwilligung,
  type Einwilligung,
} from "@/lib/consent";

// Einwilligungs-Banner: „Notwendig“ (immer an), „Statistik & Marketing“ (Zoho PageSense)
// und „Externe Medien“ (YouTube, Social-Feed). „Ablehnen“ und „Alle akzeptieren“ sind
// bewusst gleich gestaltet. Logik in src/lib/consent.ts.

const KATEGORIEN = [
  {
    key: "statistik" as const,
    titel: "Statistik & Marketing",
    text: "Zoho PageSense: Seitenaufrufe, Klick- und Scrollverhalten, Heatmaps und Sitzungsaufzeichnungen. Hilft uns, die Website zu verbessern.",
  },
  {
    key: "medien" as const,
    titel: "Externe Medien",
    text: "Videos von YouTube und Beiträge aus unseren Social-Media-Kanälen (LinkedIn, Instagram, TikTok, YouTube). Beim Laden werden Daten an diese Anbieter übertragen.",
  },
];

const CookieBanner = () => {
  const [offen, setOffen] = useState(false);
  const [einstellungen, setEinstellungen] = useState(false);
  const [auswahl, setAuswahl] = useState<Einwilligung>({ statistik: false, medien: false });
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    starteEinwilligung();
    if (!leseEinwilligung()) setOffen(true);
    const oeffnen = () => {
      setAuswahl(leseEinwilligung() ?? { statistik: false, medien: false });
      setEinstellungen(true);
      setOffen(true);
    };
    window.addEventListener(OEFFNEN_EVENT, oeffnen);
    return () => window.removeEventListener(OEFFNEN_EVENT, oeffnen);
  }, []);

  useEffect(() => {
    if (offen) boxRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
  }, [offen, einstellungen]);

  if (!offen) return null;

  const waehle = (wert: Einwilligung) => {
    speichereEinwilligung(wert);
    setOffen(false);
    setEinstellungen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom, 0px))" }}
    >
      <div
        ref={boxRef}
        className="container max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto rounded-2xl border bg-background p-5 md:p-6 shadow-2xl"
      >
        <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">
          {einstellungen ? "Cookie-Einstellungen" : "Cookies & externe Inhalte"}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Technisch notwendige Cookies sind immer aktiv. Mit Ihrer Zustimmung nutzen wir zusätzlich Zoho PageSense zur
          Analyse und laden Videos und Social-Media-Beiträge externer Anbieter. Sie können Ihre Entscheidung jederzeit
          über „Cookie-Einstellungen“ unten auf der Seite ändern. Mehr in der{" "}
          <Link to="/datenschutz" className="text-primary underline underline-offset-2">
            Datenschutzerklärung
          </Link>
          .
        </p>

        {einstellungen && (
          <div className="mt-4 divide-y border-t">
            <div className="flex items-start gap-4 py-4">
              <div className="flex-1">
                <p className="text-sm font-semibold">
                  Notwendig <span className="ml-2 text-xs font-normal text-muted-foreground">immer aktiv</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Damit die Website funktioniert, z. B. um Ihre Cookie-Auswahl zu speichern. Kein Tracking.
                </p>
              </div>
              <Switch checked disabled aria-label="Notwendig" className="mt-1" />
            </div>
            {KATEGORIEN.map((k) => (
              <div key={k.key} className="flex items-start gap-4 py-4">
                <div className="flex-1">
                  <p className="text-sm font-semibold">{k.titel}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{k.text}</p>
                </div>
                <Switch
                  checked={auswahl[k.key]}
                  onCheckedChange={(v) => setAuswahl((a) => ({ ...a, [k.key]: v }))}
                  aria-label={k.titel}
                  className="mt-1"
                />
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-col sm:flex-row sm:justify-end gap-3">
          <Button variant="outline" onClick={() => waehle({ statistik: false, medien: false })}>
            Ablehnen
          </Button>
          {einstellungen ? (
            <Button variant="outline" onClick={() => waehle(auswahl)}>
              Auswahl speichern
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setEinstellungen(true)}>
              Einstellungen
            </Button>
          )}
          <Button variant="outline" onClick={() => waehle({ statistik: true, medien: true })}>
            Alle akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
