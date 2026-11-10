import { useEffect, useRef, useState } from "react";

const techStack = {
  backend: [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  ],
  frontend: [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  ],
  databases: [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  ],
  cloud: [
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "CI/CD & Actions", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
    { name: "Railway", icon: "https://cdn.simpleicons.org/railway/0B0D0E" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  ],
  tools: [
    { name: "Visual Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Swagger", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },
  ],
};

export const About = () => {
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
    <section id="about" ref={ref} className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 after:block after:w-20 after:h-1 after:bg-primary after:rounded-full after:mt-5">
            Sobre Mí
          </h2>
          <div className="space-y-4 text-xl text-muted-foreground">
            <p>
              ¡Hola! Soy <strong className="text-foreground">Brian Battauz</strong>, Técnico Universitario en Programación graduado en la UTN.
            </p>
            <p>
              Me especializo como <strong className="text-foreground">Backend & Frontend Developer</strong>. Más que encasillarme en un solo rol, me enfoco en tener la capacidad de diseñar soluciones tecnológicas de extremo a extremo: desde una sólida arquitectura de base de datos hasta una interfaz de usuario fluida e intuitiva.
            </p>
            <p>
              Creo en el desarrollo de software como una herramienta clave para la transformación digital. Mi objetivo no es solo programar, sino diseñar <strong className="text-foreground">arquitecturas eficientes y adaptables</strong> que resuelvan la lógica de negocio más compleja, garantizando sistemas que crezcan a la par de las necesidades del cliente.
            </p>
          </div>
        </div>

        <div className="space-y-12">
           {/* Backend */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-primary">🔧</span> Backend
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {techStack.backend.map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary hover:scale-110 transition-all duration-300">
                  <img src={tech.icon} alt={tech.name} className="h-12 w-12" />
                  <span className="text-xs text-center text-muted-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-primary">🎨</span> Frontend
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {techStack.frontend.map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary hover:scale-110 transition-all duration-300">
                  <img src={tech.icon} alt={tech.name} className="h-12 w-12" />
                  <span className="text-xs text-center text-muted-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-primary">🗃️</span> Bases de Datos
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {techStack.databases.map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary hover:scale-110 transition-all duration-300">
                  <img src={tech.icon} alt={tech.name} className="h-12 w-12" />
                  <span className="text-xs text-center text-muted-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-primary">☁️</span> Cloud & DevOps
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {techStack.cloud.map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary hover:scale-110 transition-all duration-300">
                  <img src={tech.icon} alt={tech.name} className="h-12 w-12" />
                  <span className="text-xs text-center text-muted-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* IDEs & Herramientas */}
          <div className={`transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-primary">⚙️</span> IDEs & Herramientas
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {techStack.tools.map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary hover:scale-110 transition-all duration-300">
                  <img src={tech.icon} alt={tech.name} className="h-12 w-12" />
                  <span className="text-xs text-center text-muted-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};