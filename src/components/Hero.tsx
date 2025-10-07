import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 lg:pr-96">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Hola, Soy Brian Battauz
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Desarrollador Backend & Frontend
          </p>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Backend Developer apasionado con foco en Python, Java y C#, actualmente expandiendo mis horizontes hacia el mundo Full Stack.
          Me motiva crear soluciones escalables, limpias y con impacto real.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            Ver Proyectos
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contáctame
          </Button>
        </div>

        <div className="pt-12 animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
