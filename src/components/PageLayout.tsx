import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import CookieBanner from "./CookieBanner";
import FloatingPapers from "./FloatingPapers";


interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  hideFloatingPapers?: boolean;
}

const PageLayout = ({ children, title, description, hideFloatingPapers }: PageLayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }, [title, description]);

  return (
    <div className="relative">
      {!hideFloatingPapers && <FloatingPapers />}
      <Header />
      <main className="pt-20 md:pt-24 relative">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <CookieBanner />
    </div>
  );
};

export default PageLayout;
