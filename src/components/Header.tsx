import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiriusLogo from "./SiriusLogo";
import sdcLogo from "@/assets/sdc-logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [sdcOpen, setSdcOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setInsightsOpen(false);
    setAboutOpen(false);
    setSdcOpen(false);
  }, [location]);


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-xl shadow-[0px_20px_40px_rgba(25,28,30,0.06)]" : "bg-background/70 backdrop-blur-xl"
      }`}
    >
      <nav className="container flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="shrink-0" aria-label="Startseite">
          <SiriusLogo variant="blue" className="h-16 md:h-20 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-lg">
          {/* SDC Dropdown */}
          <div className="relative">
            <button
              onClick={() => { setSdcOpen(!sdcOpen); setInsightsOpen(false); setAboutOpen(false); }}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              <img src={sdcLogo} alt="SDC" className="w-5 h-5 shrink-0" />
              Smiling Data Club
              <ChevronDown className={`w-4 h-4 transition-transform ${sdcOpen ? "rotate-180" : ""}`} />
            </button>
            {sdcOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setSdcOpen(false)} />
                <div className="absolute top-full mt-2 left-0 bg-background border rounded-lg shadow-lg py-2 min-w-[200px] z-50">
                  <a
                    href="https://smiling-data-club.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-secondary transition-colors"
                  >
                    Website
                  </a>
                  <Link to="/smiling-data-club" className="block px-4 py-2 hover:bg-secondary transition-colors">
                    Community-Hub
                  </Link>
                  <Link to="/culture-and-code" className="block px-4 py-2 hover:bg-secondary transition-colors">
                    Culture &amp; Code
                  </Link>
                </div>
              </>
            )}
          </div>

          <Link to="/print" className="text-foreground hover:text-primary transition-colors font-medium">
            Print
          </Link>

          {/* Insights Dropdown */}
          <div className="relative">
            <button
              onClick={() => { setInsightsOpen(!insightsOpen); setAboutOpen(false); }}
              className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium"
            >
              Insights
              <ChevronDown className={`w-4 h-4 transition-transform ${insightsOpen ? "rotate-180" : ""}`} />
            </button>
            {insightsOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setInsightsOpen(false)} />
                <div className="absolute top-full mt-2 left-0 bg-background border rounded-lg shadow-lg py-2 min-w-[160px] z-50">
                  <Link to="/blog" className="block px-4 py-2 hover:bg-secondary transition-colors">Blog</Link>
                  <Link to="/key-facts" className="block px-4 py-2 hover:bg-secondary transition-colors">Key Facts</Link>
                  <Link to="/social" className="block px-4 py-2 hover:bg-secondary transition-colors">Social</Link>
                </div>
              </>
            )}
          </div>

          {/* Über uns Dropdown */}
          <div className="relative">
            <button
              onClick={() => { setAboutOpen(!aboutOpen); setInsightsOpen(false); }}
              className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium"
            >
              Über uns
              <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
            </button>
            {aboutOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setAboutOpen(false)} />
                <div className="absolute top-full mt-2 left-0 bg-background border rounded-lg shadow-lg py-2 min-w-[160px] z-50">
                  <Link to="/ueber-uns" className="block px-4 py-2 hover:bg-secondary transition-colors">Kultur</Link>
                  <Link to="/ueber-uns/team" className="block px-4 py-2 hover:bg-secondary transition-colors">Team</Link>
                  <Link to="/ueber-uns/karriere" className="block px-4 py-2 hover:bg-secondary transition-colors">Karriere</Link>
                </div>
              </>
            )}
          </div>

          <Button asChild variant="hero" size="default">
            <Link to="/service-area">Service Area</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menü öffnen"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Panel */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t shadow-lg">
          <div className="container py-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-foreground font-semibold pt-2">
              <img src={sdcLogo} alt="SDC" className="w-5 h-5" />
              Smiling Data Club
            </div>
            <a
              href="https://smiling-data-club.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground py-1 pl-7"
            >
              Website
            </a>
            <Link to="/smiling-data-club" className="text-foreground py-1 pl-7">Community-Hub</Link>
            <Link to="/culture-and-code" className="text-foreground py-1 pl-7">Culture & Code</Link>

            <Link to="/print" className="text-foreground font-medium py-2">Print</Link>
            <Link to="/blog" className="text-foreground font-medium py-2">Blog</Link>
            <Link to="/key-facts" className="text-foreground font-medium py-2">Key Facts</Link>
            <Link to="/social" className="text-foreground font-medium py-2">Social</Link>
            <Link to="/ueber-uns" className="text-foreground font-medium py-2">Kultur</Link>
            <Link to="/ueber-uns/team" className="text-foreground font-medium py-2">Team</Link>
            <Link to="/ueber-uns/karriere" className="text-foreground font-medium py-2">Karriere</Link>
            <Button asChild variant="hero" size="lg" className="mt-2">
              <Link to="/service-area">Service Area</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
