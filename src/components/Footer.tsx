import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import SiriusLogo from "./SiriusLogo";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/79397257/", icon: <Linkedin size={18} /> },
  { label: "Instagram", href: "https://www.instagram.com/sirius.freiburg/", icon: <Instagram size={18} /> },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@gopaperlessbysirius",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.8a4.84 4.84 0 01-1-.11z" />
      </svg>
    ),
  },
  { label: "Facebook", href: "https://www.facebook.com/sirius.freiburg/", icon: <Facebook size={18} /> },
  { label: "YouTube", href: "https://www.youtube.com/@sirius.freiburg", icon: <Youtube size={18} /> },
];

const Footer = () => (
  <footer className="bg-dark text-dark-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left */}
        <div>
          <SiriusLogo variant="white" className="h-10 w-auto mb-2" />
        </div>

        {/* Center */}
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
          <Link to="/" className="hover:text-primary transition-colors">Startseite</Link>
          <Link to="/service-area" className="hover:text-primary transition-colors">Service Area</Link>
          <Link to="/ueber-uns/team#bewerbung" className="hover:text-primary transition-colors">Bewerbung</Link>
        </div>

        {/* Right */}
        <div className="flex md:justify-end flex-wrap gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-dark-foreground/20 hover:border-primary hover:text-primary transition-colors"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-dark-foreground/10 mt-12 pt-6 text-center text-xs text-dark-foreground/50">
        © 2026 SIRIUS GmbH document solutions. Alle Rechte vorbehalten.
      </div>
    </div>
  </footer>
);

export default Footer;
