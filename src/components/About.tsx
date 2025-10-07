import { useEffect, useRef, useState } from "react";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Desarrollo Frontend",
    description: "React, TypeScript, Next.js, Tailwind CSS",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Diseño Responsive",
  },
  {
    icon: Rocket,
    title: "Desarrollo Backend",
    description: "Node.js, Express, PostgreSQL, MongoDB",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Git, Agile, Code Review, Documentación",
  },
];

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
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mí</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desarrollador apasionado por crear soluciones digitales que marquen la diferencia.
            Con más de 5 años de experiencia en desarrollo web full stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border border-border bg-card hover:bg-accent transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
