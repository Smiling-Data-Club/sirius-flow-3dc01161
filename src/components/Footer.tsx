import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import SiriusLogo from "./SiriusLogo";

const Footer = () => (
  <footer className="bg-dark text-dark-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left */}
        <div>
          <SiriusLogo variant="white" className="h-10 w-auto mb-2" />
          <p className="text-dark-foreground/60 text-sm mt-1">document solutions.</p>
        </div>

        {/* Center */}
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
          <Link to="/" className="hover:text-primary transition-colors">Startseite</Link>
          <Link to="/service-area" className="hover:text-primary transition-colors">Service Area</Link>
        </div>

        {/* Right */}
        <div className="flex md:justify-end">
          <a
            href="https://www.linkedin.com/company/79397257/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-dark-foreground/20 hover:border-primary hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <div className="border-t border-dark-foreground/10 mt-12 pt-6 text-center text-xs text-dark-foreground/50">
        © 2026 SIRIUS GmbH document solutions. Alle Rechte vorbehalten.
      </div>
    </div>
  </footer>
);

export default Footer;
