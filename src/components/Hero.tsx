import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react"; // Asegúrate de importar el ícono si usas lucide-react

export const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    window.open("/cv/CV_Brian_Nicolas_Battauz.pdf", "_blank");
  };

  return (
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 bg-background">
        <div className="max-w-6xl w-full mx-auto animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* TEXTOS */}
            <div className="flex flex-col space-y-6 md:w-2/3">
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  Hola, soy <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Brian Battauz</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  Desarrollador Backend & Frontend
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl text-center md:text-left leading-relaxed">
                Transformo ideas en software robusto. Graduado técnico especializado en construir soluciones escalables con 
                <strong className="text-foreground"> Python (FastAPI)</strong>, 
                <strong className="text-foreground"> .NET</strong> y 
                <strong className="text-foreground"> React</strong>. 
                Enfocado en microservicios, logística y desarrollo de producto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-4">
                <Button
                  onClick={downloadCV}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg transition-all hover:scale-105"
                >
                  Descargar CV
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="border-primary/20 hover:bg-primary/5 hover:text-primary transition-all"
                >
                  Contáctame
                </Button>
              </div>
            </div>

            {/* IMAGEN DE PERFIL CON EFECTO GLOW */}
            <div className="flex justify-center md:justify-end md:w-1/3 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="/images/foto_perfil.png" 
                alt="Brian Battauz" 
                className="relative w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-background object-cover shadow-2xl" 
              />
            </div>
          </div>

          <div className="pt-20 animate-bounce hidden md:block">
            <button 
              onClick={() => scrollToProjects()}
              className="mx-auto block p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Ver proyectos"
            >
              <ArrowDown className="h-8 w-8 mx-auto text-muted-foreground/50" />
            </button>
          </div>
        </div>
      </section>
    );
  };