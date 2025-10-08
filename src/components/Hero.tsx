import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    window.open("cv/CV_Brian_Battauz_Programador.pdf", "_blank");
  };

  return (
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full mx-auto animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col space-y-6 md:w-2/3">
              <div className="flex flex-col space-y-4 text-center md:text-left md:w-2/3">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Hola, soy Brian Battauz
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Desarrollador Backend & Frontend
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl">
                Soy desarrollador freelance Full Stack Junior, apasionado developer con foco en Python, C#, Java y React. 
                Me apasiona crear sitios web modernos y funcionales que ayuden a los usuarios y empresas a destacar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-4">
                <Button
                  onClick={downloadCV}
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  Ver CV
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Contáctame
                </Button>
              </div>
            </div>

            <div className="flex justify-center md:justify-end md:w-1/3">
              <img src="/images/foto_perfil.png" alt="Foto de perfil" className="w-48 h-48 md:w-72 md:h-72 rounded-full border-3-primary border-muted-foreground object-cover" />
            </div>
          </div>

          <div className="pt-12 animate-bounce">
            <button 
              onClick={() => scrollToProjects()}
              className="mx-auto block"
              aria-label="Desplazarse a proyectos"
            >
              <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
            </button>
          </div>
        </div>
      </section>
    );
  };
