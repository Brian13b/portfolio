import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico completa con carrito de compras, pagos y administración.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.",
    tags: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    title: "Portfolio Template",
    description: "Plantilla de portfolio moderna y totalmente personalizable con animaciones.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
