import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (type: "all" | "necessary") => {
    localStorage.setItem("cookie-consent", type);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-background border-t shadow-2xl">
      <div className="container flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-sm flex-1">
          Wir verwenden Cookies, um unsere Website optimal zu gestalten. Technisch notwendige Cookies sind bereits aktiv. Analyse-Cookies werden nur mit Ihrer Zustimmung gesetzt.{" "}
          <a href="/datenschutz" className="text-primary underline">Mehr erfahren</a>
        </p>
        <div className="flex gap-3 shrink-0">
          <Button variant="outline" size="sm" onClick={() => accept("necessary")}>
            Nur notwendige
          </Button>
          <Button variant="default" size="sm" onClick={() => accept("all")}>
            Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
