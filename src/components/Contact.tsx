import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";


const socialLinks = [
  { icon: Github, href: "https://github.com/brian13b", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/brian-battauz-75691a217", label: "LinkedIn" },
  { icon: Mail, href: "mailto:brian.nbattauz@gmail.com", label: "Email" },
  { icon: Phone, href: "https://wa.me/5491136323030", label: "WhatsApp" },
];

const EMAILJS_CONFIG = {
  serviceId: "service_mwzg6ls",
  templateId: "template_d3bvqvm",
  publicKey: "RAeyrWItVRfOglG7h",
};

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;

    const formData = new FormData(e.currentTarget);
    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      message: formData.get("message"),
      to_email: "brian.nbattauz@gmail.com",
      time: new Date().toLocaleString("es-ES", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaré pronto. Gracias por tu mensaje.",
      });
      form.reset();
    } catch (error) {
      console.error("Error enviando email:", error);
      toast({
        title: "Error al enviar",
        description: "Por favor, intenta nuevamente más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 after:block after:w-20 after:h-1 after:bg-primary after:rounded-full after:mt-5">
            Contacto
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Lado Izquierdo */}
          <div
            className={`space-y-6 transition-all duration-700 delay-150 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div>
              <h3 className="text-2xl text-muted-foreground font-semibold mb-4">
                ¿Tienes un proyecto en mente? ¡Hablemos!
              </h3>
              <p className="text-xl text-muted-foreground mb-6">
                Estoy siempre abierto a nuevas oportunidades y colaboraciones.
                No dudes en contactarme a través de cualquiera de estos medios.
              </p>
              <div className="flex gap-6">
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

          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-4 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <Input name="name" placeholder="Tu nombre" required disabled={isLoading} />
            <Input
              type="email"
              name="email"
              placeholder="Tu email"
              required
              disabled={isLoading}
            />
            <Textarea
              name="message"
              placeholder="Tu mensaje"
              rows={5}
              required
              disabled={isLoading}
            />
            <Button
              type="submit"
              className="w-full bg-gradient-primary hover:opacity-90"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Enviando...
                </>
              ) : (
                "Enviar Mensaje"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};