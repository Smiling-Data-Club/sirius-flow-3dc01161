import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronDown, Download, ExternalLink, Info, Mail, Phone, Search, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import {
  hersteller,
  PDF_URL,
  PORTAL_URL,
  type ZBild,
  type ZGruppe,
  type ZHersteller,
} from "@/data/zaehlerstand";
import { istGueltigePortalUrl, normalisiere } from "@/lib/zaehlerstand";

/* Inhalte stehen in src/data/zaehlerstand.ts – hier nur die Darstellung. */

const BILD_PFAD = "/zaehlerstand/";

/** Großansicht eines Bildes: öffnet per Klick oder Antippen, schließt per X, Esc oder Klick daneben. */
const Grossansicht = ({ bild, breite, onClose }: { bild: ZBild | null; breite: number; onClose: () => void }) => (
  <DialogPrimitive.Root open={!!bild} onOpenChange={(auf) => !auf && onClose()}>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-[60] bg-black/80 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
      <DialogPrimitive.Content
        className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-3 p-4 outline-none sm:p-8"
        onClick={onClose}
      >
        {bild && (
          <>
            <DialogPrimitive.Title className="sr-only">{bild.beschriftung ?? "Bild vergrößert"}</DialogPrimitive.Title>
            <DialogPrimitive.Description className="sr-only">{bild.alt}</DialogPrimitive.Description>
            <img
              src={BILD_PFAD + bild.datei}
              alt={bild.alt}
              onClick={(e) => e.stopPropagation()}
              // Kleine Bilder bis zum 2,5-Fachen vergrößern, höchstens auf Fensterbreite.
              style={{ width: `min(92vw, ${Math.round(breite * 2.5)}px)` }}
              className="h-auto max-h-[85vh] rounded-lg bg-white object-contain shadow-2xl"
            />
            {bild.beschriftung && <p className="text-center text-sm font-medium text-white">{bild.beschriftung}</p>}
            <DialogPrimitive.Close
              className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-foreground shadow-lg hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Großansicht schließen"
            >
              <X className="h-5 w-5" aria-hidden />
            </DialogPrimitive.Close>
          </>
        )}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
);

const Bilder = ({ bilder }: { bilder: ZBild[] }) => {
  const [gross, setGross] = useState<ZBild | null>(null);
  const [breite, setBreite] = useState(0);
  return (
    <div className="flex flex-wrap items-start gap-4 mt-3">
      {bilder.map((b) => {
        const bild = (
          <button
            key={b.datei}
            type="button"
            onClick={(e) => {
              setBreite(e.currentTarget.querySelector("img")?.naturalWidth || 800);
              setGross(b);
            }}
            className="group relative block max-w-full cursor-zoom-in rounded-lg transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`Bild vergrößern: ${b.alt}`}
          >
            <img
              src={BILD_PFAD + b.datei}
              alt={b.alt}
              loading="lazy"
              decoding="async"
              className="max-w-full h-auto max-h-[420px] rounded-lg border bg-white transition-shadow duration-200 group-hover:shadow-lg"
            />
            <span
              className="pointer-events-none absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white opacity-80 transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100"
              aria-hidden
            >
              <ZoomIn className="h-4 w-4" />
            </span>
          </button>
        );
        return b.beschriftung ? (
          <figure key={b.datei} className="max-w-full">
            {bild}
            <figcaption className="mt-2 text-sm font-medium">{b.beschriftung}</figcaption>
          </figure>
        ) : (
          bild
        );
      })}
      <Grossansicht bild={gross} breite={breite} onClose={() => setGross(null)} />
    </div>
  );
};

const Aufklapper = ({
  id,
  titel,
  offen,
  onToggle,
  children,
  hervorheben,
}: {
  id: string;
  titel: string;
  offen: boolean;
  onToggle: (id: string, offen: boolean) => void;
  children: React.ReactNode;
  hervorheben?: boolean;
}) => (
  <details
    id={id}
    open={offen}
    onToggle={(e) => onToggle(id, (e.currentTarget as HTMLDetailsElement).open)}
    className={`group rounded-xl border bg-card shadow-sm scroll-mt-28 ${hervorheben ? "border-primary/40" : ""}`}
  >
    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 md:p-6 text-sm md:text-base font-semibold [&::-webkit-details-marker]:hidden">
      {/* Jeder Modellname bleibt zusammen; umgebrochen wird nur nach dem Komma. */}
      <span className="min-w-0 leading-relaxed">
        {titel.split(", ").map((teil, i, alle) => (
          <span key={i}>
            <span className={teil.includes(" ") ? undefined : "whitespace-nowrap"}>
              {teil}
              {i < alle.length - 1 ? "," : ""}
            </span>
            {i < alle.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
      <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden />
    </summary>
    <div className="border-t px-5 pb-6 pt-5 md:px-6">{children}</div>
  </details>
);

const Gruppeninhalt = ({ gruppe }: { gruppe: ZGruppe }) => (
  <>
    {gruppe.einleitung && <p className="mb-5 text-muted-foreground">{gruppe.einleitung}</p>}
    <ol className="space-y-8">
      {gruppe.schritte.map((s, i) => (
        <li key={i} className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            {i + 1}
          </span>
          <div className="min-w-0 flex-1 pt-1">
            <p className="break-words">{s.text}</p>
            {s.punkte && (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {s.punkte.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
            {s.bilder && s.bilder.length > 0 && <Bilder bilder={s.bilder} />}
          </div>
        </li>
      ))}
    </ol>
    {gruppe.abschluss && <p className="mt-6 font-medium">{gruppe.abschluss}</p>}
  </>
);

const Zaehlerstand = () => {
  const { hash } = useLocation();
  const [suche, setSuche] = useState("");
  const [offen, setOffen] = useState<Set<string>>(new Set());

  // Direktlink auf ein Modell, z. B. /zaehlerstand#toshiba-b-sa4tm, klappt es auf.
  useEffect(() => {
    const id = decodeURIComponent(hash.replace(/^#/, ""));
    if (!id) return;
    const istGruppe = hersteller.some((h) => h.gruppen.some((g) => g.id === id) || `${h.id}-statusseite` === id);
    if (istGruppe) setOffen((alt) => new Set(alt).add(id));
    const t = window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 150);
    return () => window.clearTimeout(t);
  }, [hash]);

  const toggle = (id: string, istOffen: boolean) =>
    setOffen((alt) => {
      if (alt.has(id) === istOffen) return alt;
      const neu = new Set(alt);
      if (istOffen) neu.add(id);
      else neu.delete(id);
      return neu;
    });

  // Suche: filtert nur, was angezeigt wird. Die Inhalte selbst bleiben unverändert.
  const q = normalisiere(suche);
  const treffer = useMemo(() => {
    if (!q) return null;
    const ids = new Set<string>();
    for (const h of hersteller) {
      const passt = (text: string) => h.gruppen.filter((g) => normalisiere(`${h.name} ${g.titel}`).includes(text));
      // Hersteller genannt (z. B. "Lexmark CX725" oder nur "Lexm"): passende Modelle zeigen,
      // ohne Treffer alle Anleitungen dieses Herstellers.
      if (q.startsWith(h.id)) {
        const rest = q.slice(h.id.length);
        const treffer = rest ? h.gruppen.filter((g) => normalisiere(g.titel).includes(rest)) : [];
        (treffer.length ? treffer : h.gruppen).forEach((g) => ids.add(g.id));
      } else if (q.length >= 3 && h.id.startsWith(q)) {
        h.gruppen.forEach((g) => ids.add(g.id));
      } else {
        passt(q).forEach((g) => ids.add(g.id));
      }
    }
    return ids;
  }, [q]);

  // Wenige Treffer: automatisch aufklappen.
  useEffect(() => {
    if (treffer && treffer.size > 0 && treffer.size <= 5) setOffen(new Set(treffer));
  }, [treffer]);

  const sichtbar = (g: ZGruppe) => !treffer || treffer.has(g.id);
  const herstellerSichtbar = (h: ZHersteller) => h.gruppen.some(sichtbar);
  const portalOk = istGueltigePortalUrl(PORTAL_URL);

  return (
    <PageLayout
      title="Zählerstände auslesen: Sharp, Lexmark, Epson, Toshiba | SIRIUS"
      description="So lesen Sie den Zählerstand Ihres Sharp-, Lexmark- oder Epson-Druckers oder Ihres Toshiba-Etikettendruckers aus und melden ihn im SIRIUS-Webportal."
    >
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          {/* Intro */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Zählerstände auslesen</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Für die Abrechnung brauchen wir regelmäßig die Zählerstände Ihrer Geräte. So geht es:
          </p>
          <ol className="grid gap-4 md:grid-cols-3 mb-10">
            {[
              ["Auslesen", "Drucken Sie an Ihrem Gerät die Statusseite mit den Zählerständen aus. Die Anleitung für Ihr Modell finden Sie unten."],
              ["Eintragen", "Tragen Sie die Werte im Webportal ein. Nutzen Sie dafür den persönlichen Link aus unserer E-Mail."],
              ["Fertig", "Mehr ist nicht zu tun. Wir übernehmen die Werte für Ihre Abrechnung."],
            ].map(([titel, text], i) => (
              <li key={titel} className="rounded-xl border bg-card p-5 shadow-sm">
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <p className="font-semibold mb-1">{titel}</p>
                <p className="text-sm text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>

          {/* Hinweisbox */}
          <aside className="rounded-xl border border-primary/30 bg-primary/5 p-6 mb-10" aria-labelledby="hinweise">
            <h2 id="hinweise" className="flex items-center gap-2 text-lg font-semibold mb-3">
              <Info className="h-5 w-5 text-primary" aria-hidden /> Bitte beachten Sie
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Tragen Sie nur Ziffern ein – ohne führende Nullen, Punkte oder Kommas. Beispiel: Aus „00,081,767“ wird
                „81767“.
              </li>
              <li>
                Ausnahme Etikettendrucker mit km-Zähler: Tragen Sie den Wert mit Komma und drei Nachkommastellen ein,
                z. B. „12,345“.
              </li>
              <li>Bitte melden Sie die Zählerstände innerhalb von 3 Werktagen nach unserer Aufforderung.</li>
              <li>Sie brauchen kein Passwort. Der persönliche Link aus unserer E-Mail genügt.</li>
              <li>Notieren Sie die ID-Nr. auf dem Ausdruck. Das erleichtert die Eingabe im Webportal.</li>
            </ul>
          </aside>

          {/* Webportal */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center mb-12">
            {portalOk ? (
              <Button variant="hero" size="lg" asChild>
                <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer">
                  Zum Webportal <ExternalLink className="ml-1" />
                </a>
              </Button>
            ) : null}
            <p className="text-muted-foreground">Nutzen Sie den persönlichen Link aus unserer E-Mail.</p>
          </div>

          {/* Sprungmarken und Suche */}
          <nav aria-label="Hersteller" className="mb-6 flex flex-wrap gap-2">
            {hersteller.map((h) => (
              <a
                key={h.id}
                href={`#${h.id}`}
                className="rounded-full border bg-card px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              >
                {h.name}
              </a>
            ))}
          </nav>

          <div className="mb-12">
            <label htmlFor="modellsuche" className="block text-sm font-medium mb-2">
              Modell suchen
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
              <input
                id="modellsuche"
                type="search"
                value={suche}
                onChange={(e) => setSuche(e.target.value)}
                placeholder="z. B. MX-3071, WF-C878 oder B-EX4"
                className="w-full rounded-lg border bg-background py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground" aria-live="polite">
              {treffer
                ? treffer.size === 0
                  ? "Kein passendes Modell gefunden. Wählen Sie oben Ihren Hersteller oder rufen Sie uns an – wir helfen Ihnen weiter."
                  : treffer.size === 1
                    ? "1 Modellgruppe gefunden"
                    : `${treffer.size} Modellgruppen gefunden`
                : "Tipp: Die Modellbezeichnung steht meist vorn oder oben am Gerät."}
            </p>
          </div>

          {/* Hersteller */}
          {hersteller.map((h) =>
            herstellerSichtbar(h) ? (
              <section key={h.id} id={h.id} className="mb-14 scroll-mt-28" aria-labelledby={`${h.id}-titel`}>
                <h2 id={`${h.id}-titel`} className="text-2xl md:text-3xl font-bold mb-1">
                  {h.name}
                </h2>
                {h.beschreibung && <p className="text-muted-foreground mb-5">{h.beschreibung}</p>}
                {h.hinweis && (
                  <p className="mb-5 flex gap-2 rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <span>{h.hinweis}</span>
                  </p>
                )}
                <div className="space-y-4">
                  {h.gruppen.filter(sichtbar).map((g) => (
                    <Aufklapper key={g.id} id={g.id} titel={g.titel} offen={offen.has(g.id)} onToggle={toggle}>
                      <Gruppeninhalt gruppe={g} />
                    </Aufklapper>
                  ))}
                  {h.statusseite && (
                    <Aufklapper
                      id={`${h.id}-statusseite`}
                      titel={`${h.name}: Statusseite lesen`}
                      offen={offen.has(`${h.id}-statusseite`)}
                      onToggle={toggle}
                      hervorheben
                    >
                      <p className="mb-3">Diese Werte tragen Sie im Webportal ein:</p>
                      <ul className="list-disc space-y-2 pl-5">
                        {h.statusseite.punkte.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                      <p className="mt-3">Notieren Sie die ID-Nr. auf dem Ausdruck. Das erleichtert die Eingabe im Webportal.</p>
                      <Bilder bilder={h.statusseite.bilder} />
                    </Aufklapper>
                  )}
                </div>
              </section>
            ) : null,
          )}

          {/* PDF */}
          <div className="rounded-xl border bg-card p-6 md:p-8 shadow-sm mb-10">
            <h2 className="text-xl font-semibold mb-2">Anleitung als PDF</h2>
            <p className="text-muted-foreground mb-5">Alle Anleitungen zum Ausdrucken oder Weitergeben.</p>
            <Button variant="hero-outline" size="lg" asChild>
              <a href={PDF_URL} download>
                <Download className="mr-1" /> PDF herunterladen
              </a>
            </Button>
          </div>

          {/* Kontakt */}
          <div className="rounded-xl bg-secondary p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-2">Fragen?</h2>
            <p className="mb-4 text-muted-foreground">Ihr Modell ist nicht dabei oder es klappt nicht? Wir helfen gern.</p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+49761704070" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" aria-hidden /> (0761) 704070
              </a>
              <a href="mailto:info@sirius-gmbh.de" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary" aria-hidden /> info@sirius-gmbh.de
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Zaehlerstand;
