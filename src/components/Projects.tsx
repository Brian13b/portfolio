import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { ProjectModal } from "./ProjectModal";
import projects from "../data/projects";
import { useInView } from "react-intersection-observer";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false); 
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const INITIAL_COUNT = 4;
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" ref={ref} className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:rounded-full after:mt-5`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-muted-foreground text-lg">Una selección de mis desarrollos recientes en software a medida, SaaS y sistemas de gestión.</p>
        </div>

        {/* Grilla de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedProjects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index % INITIAL_COUNT) * 150}ms` }}
              onClick={() => handleProjectClick(project)}
            >
              <div>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.shortDesc}</CardDescription>
                </CardHeader>
              </div>
              
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
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, "_blank");
                    }}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demo, "_blank");
                      }}
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

        {projects.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="gap-2 group transition-all"
            >
              {showAll ? (
                <>
                  Ver menos proyectos
                  <ChevronUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  Ver más proyectos ({projects.length - INITIAL_COUNT} más)
                  <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      )}
    </section>
  );
};