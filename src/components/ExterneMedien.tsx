import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { erlaubeMedienEinmalig, oeffneCookieEinstellungen, useExterneMedien } from "@/lib/consent";

// Zwei-Klick-Lösung: Externe Inhalte (YouTube, Social-Feed) erst nach Klick oder
// mit Einwilligung in „Externe Medien“ laden. Vorher wird keine Verbindung zum
// Anbieter aufgebaut.
const ExterneMedien = ({
  anbieter,
  children,
  className = "",
}: {
  anbieter: string;
  children: ReactNode;
  className?: string;
}) => {
  const erlaubt = useExterneMedien();
  if (erlaubt) return <>{children}</>;

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border bg-muted p-6 text-center ${className}`}
    >
      <p className="text-sm text-muted-foreground max-w-md">
        Hier wird ein Inhalt von {anbieter} angezeigt. Beim Laden werden Daten, z. B. Ihre IP-Adresse, an {anbieter}{" "}
        übertragen. Mehr in der{" "}
        <Link to="/datenschutz" className="text-primary underline underline-offset-2">
          Datenschutzerklärung
        </Link>
        .
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <Button size="sm" onClick={erlaubeMedienEinmalig}>
          Inhalt laden
        </Button>
        <Button size="sm" variant="outline" onClick={oeffneCookieEinstellungen}>
          Cookie-Einstellungen
        </Button>
      </div>
    </div>
  );
};

export default ExterneMedien;
