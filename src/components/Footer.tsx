import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook, Youtube, Send, Check } from "lucide-react";
import SiriusLogo from "./SiriusLogo";
import { toast } from "@/hooks/use-toast";

// Webhook-URL für Newsletter-Anmeldungen (z. B. Zapier, Make, n8n, Zoho Flow).
// Hier eintragen — der Footer schickt dann bei jeder Anmeldung ein POST mit { email, source, timestamp }.
const NEWSLETTER_WEBHOOK_URL =
  (import.meta.env.VITE_NEWSLETTER_WEBHOOK_URL as string | undefined) ?? "";

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
  { label: "Facebook", href: "https://www.facebook.com/siriusgmbh", icon: <Facebook size={18} /> },
  { label: "YouTube", href: "https://www.youtube.com/@sirius.freiburg", icon: <Youtube size={18} /> },
];

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    if (!NEWSLETTER_WEBHOOK_URL) {
      toast({
        title: "Newsletter noch nicht konfiguriert",
        description: "Bitte hinterlegen Sie die Webhook-URL im Footer-Code.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      await fetch(NEWSLETTER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
          email: email.trim(),
          source: "sirius-gmbh.de Footer",
          timestamp: new Date().toISOString(),
        }),
      });
      setSuccess(true);
      setEmail("");
      toast({
        title: "Vielen Dank!",
        description: "Ihre Anmeldung wurde übermittelt.",
      });
    } catch {
      toast({
        title: "Anmeldung fehlgeschlagen",
        description: "Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <label htmlFor="newsletter-email" className="text-xs uppercase tracking-[0.2em] text-dark-foreground/50 mb-3 block">
        Newsletter
      </label>
      <div className="flex items-center gap-2 bg-dark-foreground/5 border border-dark-foreground/15 rounded-full p-1 focus-within:border-primary transition-colors">
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="Ihre E-Mail-Adresse"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setSuccess(false); }}
          className="flex-1 bg-transparent px-4 py-2 text-sm text-dark-foreground placeholder:text-dark-foreground/40 focus:outline-none"
        />
        <button
          type="submit"
          disabled={submitting}
          aria-label="Anmelden"
          className="shrink-0 bg-primary text-primary-foreground p-2.5 rounded-full hover:scale-[1.03] active:scale-95 transition-transform disabled:opacity-60"
        >
          {success ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
        </button>
      </div>
      <p className="text-xs text-dark-foreground/40 mt-2">
        Mit der Anmeldung stimmen Sie unserer{" "}
        <Link to="/datenschutz" className="underline underline-offset-2 hover:text-primary">
          Datenschutzerklärung
        </Link>{" "}
        zu.
      </p>
    </form>
  );
};

const Footer = () => (
  <footer className="bg-dark text-dark-foreground">
    <div className="container py-16">
      {/* Top: Logo + Socials + Newsletter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div>
          <SiriusLogo variant="white" className="h-10 w-auto" />
        </div>

        <div className="flex md:justify-center flex-wrap gap-3">
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

        <div className="md:flex md:justify-end">
          <NewsletterForm />
        </div>
      </div>

      {/* Sitemap */}
      <div className="border-t border-dark-foreground/10 mt-12 pt-10">
        <h2 className="text-xs uppercase tracking-[0.2em] text-dark-foreground/50 mb-6">Sitemap</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="flex flex-col gap-2">
            <span className="text-dark-foreground/40 text-xs uppercase tracking-wider mb-1">Start</span>
            <Link to="/" className="hover:text-primary transition-colors">Startseite</Link>
            <Link to="/print" className="hover:text-primary transition-colors">Print &amp; Document</Link>
            <Link to="/service-area" className="hover:text-primary transition-colors">Service Area</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-dark-foreground/40 text-xs uppercase tracking-wider mb-1">Insights</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <Link to="/key-facts" className="hover:text-primary transition-colors">Key Facts</Link>
            <Link to="/social" className="hover:text-primary transition-colors">Social Hub</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-dark-foreground/40 text-xs uppercase tracking-wider mb-1">Über uns</span>
            <Link to="/ueber-uns" className="hover:text-primary transition-colors">Über uns</Link>
            <Link to="/ueber-uns/team" className="hover:text-primary transition-colors">Team</Link>
            <Link to="/ueber-uns/karriere" className="hover:text-primary transition-colors">Karriere</Link>
            <Link to="/ueber-uns/karriere#initiativbewerbung" className="hover:text-primary transition-colors">Bewerbung</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-dark-foreground/40 text-xs uppercase tracking-wider mb-1">Rechtliches</span>
            <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
            <Link to="/agb" className="hover:text-primary transition-colors">AGB</Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">sitemap.xml</a>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-foreground/10 mt-10 pt-6 text-center text-xs text-dark-foreground/50">
        © 2026 SIRIUS GmbH document solutions. Alle Rechte vorbehalten.
      </div>
    </div>
  </footer>
);

export default Footer;
