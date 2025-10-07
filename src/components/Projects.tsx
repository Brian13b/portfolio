import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Sistema Logístico",
    description: "Plataforma robusta de microservicios diseñada para la gestión completa de flotas, viajes, facturación y rastreo en tiempo real.",
    tags: ["FastAPI", "PostgreSQL", "Microservicios"],
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    github: "https://github.com/Brian13b/SistemaLogistico",
  },
  {
    title: "Quico Basquet",
    description: "Aplicación Fullstack para reservas de canchas deportivas con un calendario interactivo y gestión de usuarios.",
    tags: ["FastAPI", "React", "PostgreSQL", "Firebase"],
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    github: "https://github.com/Brian13b/QuicoBasquetProject",
    demo: "https://quicobasquet.vercel.app/",
  },
  {
    title: "Charity Landing Page",
    description: "Landing page moderna y responsive para una organización sin fines de lucro, enfocada en promover donaciones y voluntariado.",
    tags: ["React", "TailwindCSS", "UI/UX"],
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80",
    github: "https://github.com/Brian13b/charity-landing-page",
  },
  {
    title: "API Gestión Clientes/Pedidos",
    description: "API REST en C#/.NET con arquitectura en capas para la gestión de clientes y pedidos.",
    tags: ["C#", ".NET", "Entity Framework", "Swagger"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    github: "https://github.com/Brian13b/SistemaGestionClientesPedidosAPI",
  },
];

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-xl text-muted-foreground">Algunos de mis trabajos recientes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
