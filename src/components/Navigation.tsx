import { Home, Briefcase, User, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { icon: Home, label: "Inicio", href: "#home" },
  { icon: Briefcase, label: "Proyectos", href: "#projects" },
  { icon: User, label: "Sobre Mí", href: "#about" },
  { icon: Mail, label: "Contacto", href: "#contact" },
];

export const Navigation = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="flex items-center gap-2 bg-card/80 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-lg">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            className="p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            aria-label={item.label}
          >
            <item.icon className="h-5 w-5" />
          </button>
        ))}
        <div className="w-px h-6 bg-border mx-2" />
        <ThemeToggle />
      </div>
    </nav>
  );
};
