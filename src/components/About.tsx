import { useInView } from "react-intersection-observer";

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
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  ],
  databases: [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  ],
  tools: [
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "IntelliJ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
  ],
};

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sections = [
    { title: "Backend", icon: "🔧", data: techStack.backend, delay: 100 },
    { title: "Frontend", icon: "🎨", data: techStack.frontend, delay: 200 },
    { title: "Bases de Datos", icon: "🗃️", data: techStack.databases, delay: 300 },
    { title: "Herramientas", icon: "⚙️", data: techStack.tools, delay: 400 },
  ];

  return (
    <section id="about" ref={ref} className="min-h-screen py-20 px-4 lg:pr-96">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mí</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estudiante avanzado de la Tecnicatura Universitaria en Programación en la UTN, con una sólida formación en desarrollo de software.
            Me considero una persona proactiva y adaptable, con capacidad para resolver problemas y aprender nuevas tecnologías de manera autónoma.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${section.delay}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-primary">{section.icon}</span> {section.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                {section.data.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary hover:scale-110 transition-all duration-300"
                  >
                    <img src={tech.icon} alt={tech.name} className="h-12 w-12" />
                    <span className="text-xs text-center text-muted-foreground">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
