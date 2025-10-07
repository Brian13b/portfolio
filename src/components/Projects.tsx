import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ProjectModal } from "./ProjectModal";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Sistema Logístico",
    description: "Plataforma robusta de microservicios diseñada para la gestión completa de flotas, viajes, facturación y rastreo en tiempo real.",
    longDescription: "Sistema completo de gestión logística que integra múltiples microservicios para ofrecer una solución escalable y eficiente. Implementa arquitectura de microservicios con comunicación asíncrona, autenticación JWT y monitoreo en tiempo real.",
    tags: ["FastAPI", "PostgreSQL", "Microservicios", "Docker", "Redis"],
    images: [
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&q=80",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    ],
    github: "https://github.com/Brian13b/SistemaLogistico",
    features: [
      "Arquitectura basada en microservicios para escalabilidad",
      "Sistema de autenticación y autorización robusto",
      "Rastreo GPS en tiempo real de flotas",
      "Dashboard interactivo con métricas y analíticas",
      "Sistema de notificaciones automáticas",
      "Gestión completa de facturación y reportes",
    ],
  },
  {
    title: "Quico Basquet",
    description: "Aplicación Fullstack para reservas de canchas deportivas con un calendario interactivo y gestión de usuarios.",
    longDescription: "Plataforma web completa que permite a los usuarios reservar canchas de básquet de manera fácil e intuitiva. Incluye sistema de pagos, calendario de disponibilidad, gestión de usuarios y notificaciones por email.",
    tags: ["FastAPI", "React", "PostgreSQL", "Firebase", "Vercel"],
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80",
      "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=1200&q=80",
      "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=1200&q=80",
    ],
    github: "https://github.com/Brian13b/QuicoBasquetProject",
    demo: "https://quicobasquet.vercel.app/",
    features: [
      "Calendario interactivo con disponibilidad en tiempo real",
      "Sistema de reservas con confirmación automática",
      "Autenticación con Firebase (email y Google)",
      "Panel de administración para gestión de canchas",
      "Notificaciones por email para confirmaciones",
      "Diseño responsive optimizado para móviles",
    ],
  },
  {
    title: "Charity Landing Page",
    description: "Landing page moderna y responsive para una organización sin fines de lucro, enfocada en promover donaciones y voluntariado.",
    longDescription: "Página web diseñada con un enfoque en UI/UX para maximizar las conversiones de donaciones. Implementa principios de diseño persuasivo y accesibilidad web.",
    tags: ["React", "TailwindCSS", "UI/UX", "Responsive Design"],
    images: [
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&q=80",
    ],
    github: "https://github.com/Brian13b/charity-landing-page",
    features: [
      "Diseño moderno y atractivo optimizado para conversiones",
      "Sección de historias de impacto con testimonios",
      "Formulario de donación integrado",
      "Contador de impacto en tiempo real",
      "Galería de proyectos y eventos",
      "Optimización SEO para mejor visibilidad",
    ],
  },
  {
    title: "API Gestión Clientes/Pedidos",
    description: "API REST en C#/.NET con arquitectura en capas para la gestión de clientes y pedidos.",
    longDescription: "API robusta implementada siguiendo principios SOLID y patrón Repository. Incluye validaciones, manejo de errores, logging y documentación completa con Swagger.",
    tags: ["C#", ".NET", "Entity Framework", "Swagger", "SQL Server"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    ],
    github: "https://github.com/Brian13b/SistemaGestionClientesPedidosAPI",
    features: [
      "Arquitectura en capas (Presentación, Negocio, Datos)",
      "Implementación del patrón Repository y Unit of Work",
      "Validaciones robustas con FluentValidation",
      "Documentación interactiva con Swagger/OpenAPI",
      "Logging centralizado para debugging",
      "Manejo de errores global con middleware personalizado",
    ],
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" ref={ref} className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-xl text-muted-foreground">Algunos de mis trabajos recientes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.images[0]}
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
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                <Button className="w-full" variant="outline">
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          open={modalOpen}
          onOpenChange={setModalOpen}
        />
      )}
    </section>
  );
};
