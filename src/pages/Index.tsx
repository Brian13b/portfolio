import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2025 Brian Battauz.</p>
      </footer>
    </div>
  );
};

export default Index;
