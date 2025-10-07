import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Github, href: "https://github.com/brian13b", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/brian-battauz-75691a217", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:brian.nbattauz@gmail.com", label: "Email" },
];

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaré pronto. Gracias por tu mensaje.",
    });
  };

  return (
    <section id="contact" ref={ref} className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h2>
          <p className="text-xl text-muted-foreground">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`space-y-6 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Conectemos</h3>
              <p className="text-muted-foreground mb-6">
                Estoy siempre abierto a nuevas oportunidades y colaboraciones.
                No dudes en contactarme a través de cualquiera de estos medios.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={`space-y-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div>
              <Input placeholder="Tu nombre" required />
            </div>
            <div>
              <Input type="email" placeholder="Tu email" required />
            </div>
            <div>
              <Textarea placeholder="Tu mensaje" rows={5} required />
            </div>
            <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
