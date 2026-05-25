import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Print from "./pages/Print";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import KeyFacts from "./pages/KeyFacts";
import Social from "./pages/Social";
import About from "./pages/About";
import Team from "./pages/Team";
import ServiceArea from "./pages/ServiceArea";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/print" element={<Print />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/was-bedeutet-revisionssicherheit-wo-ist-sie-unverzichtbar" element={<Navigate to="/blog/was-bedeutet-revisionssicherheit-wo-ist-sie-unverzichtbar" replace />} />
          <Route path="/key-facts" element={<KeyFacts />} />
          <Route path="/social" element={<Social />} />
          <Route path="/ueber-uns" element={<About />} />
          <Route path="/ueber-uns/team" element={<Team />} />
          <Route path="/service-area" element={<ServiceArea />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
