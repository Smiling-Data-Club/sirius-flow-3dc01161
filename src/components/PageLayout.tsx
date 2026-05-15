import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import CookieBanner from "./CookieBanner";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  jsonLd?: Record<string, unknown>;
}

const PageLayout = ({ children, title, description, jsonLd }: PageLayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative">
      <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        <link rel="canonical" href={pathname} />
        {title && <meta property="og:title" content={title} />}
        {description && <meta property="og:description" content={description} />}
        <meta property="og:url" content={pathname} />
        <meta property="og:type" content="website" />
        {jsonLd && (
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        )}
      </Helmet>
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
