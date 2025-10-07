import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { InteractiveAvatar } from "@/components/InteractiveAvatar";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <InteractiveAvatar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <footer className="py-8 text-center text-muted-foreground border-t border-border lg:pr-96">
        <p>© 2024 Brian Battauz. Creado con ❤️ usando React y Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default Index;
