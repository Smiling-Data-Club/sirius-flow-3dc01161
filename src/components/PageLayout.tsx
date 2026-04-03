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
}

const PageLayout = ({ children, title, description }: PageLayoutProps) => {
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
    <>
      <Header />
      <main className="pt-16 md:pt-20">{children}</main>
      <Footer />
      <ScrollToTop />
      <CookieBanner />
    </>
  );
};

export default PageLayout;
