import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";

const NotFound = () => (
  <PageLayout title="Seite nicht gefunden — SIRIUS GmbH">
    <section className="py-32 md:py-48">
      <div className="container text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Diese Seite existiert leider nicht.</p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/">Zur Startseite</Link>
        </Button>
      </div>
    </section>
  </PageLayout>
);

export default NotFound;
