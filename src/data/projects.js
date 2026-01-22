const projects = [
  {
    id: 1,
    tags: ["FastAPI", "React", "PostgreSQL", "Firebase", "Vite", "JavaScript", "Python"],
    title: "Quico Basquet - RESERVAS",
    cover: "/images/proyecto1.jpg",
    shortDesc: "Sistema fullstack (FastAPI + React) para reservas de cancha.",
    longDesc: `
Aplicación integral para la gestión de reservas, suscripciones y administración del club Quico Básquet.\n

📦 Estructura del proyecto\n
    quico_basquet_frontend/ → Aplicación web desarrollada en React + Vite para la gestión de reservas, suscripciones y administración por parte de usuarios y staff.\n
    quico_basquet_backend/ → API REST construida con FastAPI, integra autenticación, pagos, notificaciones y persistencia en Firebase y PostgreSQL.\n
\n
🚀 Funcionalidades principales\n
 🔹 Registro e inicio de sesión (email/Google)\n
 🔹 Reserva de turnos para básquet o vóley\n
 🔹 Suscripciones mensuales\n
 🔹 Notificaciones automáticas\n
 🔹 Panel administrativo para gestión de usuarios, reservas y suscripciones\n

 🛠️ Tecnologías utilizadas\n
 🔹 Frontend → React, Vite, JavaScript, CSS\n
 🔹 Backend → Python, FastAPI, SQLAlchemy\n
 🔹 Base de datos → PostgreSQL, Firebase\n
    `,
    images: [
      "/images/proyecto1.jpg",
      "/images/proyecto1/quicobasquet1.png",
      "/images/proyecto1/quicobasquet2.png",
      "/images/proyecto1/quicobasquet3.png",
      "/images/proyecto1/quicobasquet4.png"
    ],
    demo: "https://quicobasquet.vercel.app/",
    github: "https://github.com/Brian13b/QuicoBasquetProject"
  },
  {
    id: 2,
    tags: ["FastAPI", "React", "PostgreSQL", "Leaflet", "TailwindCSS", "Python", "JavaScript"],
    title: "Sistema Gestión Logístico",
    cover: "/images/proyecto2.jpg",
    shortDesc: "Plataforma fullstack para transporte de carga y flota.",
    longDesc: `
El Sistema Logístico es un conjunto de microservicios diseñados para la gestión completa de flotas, viajes, facturación y rastreo en tiempo real.\n
Está diseñado bajo una arquitectura de microservicios, integrados a través de un API Gateway, garantizando escalabilidad, seguridad y flexibilidad.\n
\n
🔧 Tecnologías principales\n
  🔹 Backend → FastAPI (Python), PostgreSQL, JWT\n
  🔹 Frontend → React, Redux, Leaflet, TailwindCSS\n
  🔹 Facturación → SOAP (AFIP / ARCA Argentina)\n
  🔹 Tracking → TCP Socket Server + FastAPI\n
  🔹 Gateway → FastAPI + JWT\n
    `,
    images: [
      "/images/proyecto2.jpg",
      "/images/proyecto2/dashboard.jpg",
      "/images/proyecto2/Conductores.jpg",
      "/images/proyecto2/Seguimiento.jpg"
    ],
    demo: "https://blogistica.vercel.app/",
    github: "https://github.com/Brian13b/SistemaLogistico"
  },
  {
    id: 3,
    title: "Plataforma Inmobiliaria Full Stack",
    tags: [".NET 9", "React", "PostgreSQL", "Docker", "Tailwind"],
    cover: "/images/proyecto3.png",
    shortDesc: "Plataforma de gestión de propiedades con .NET 9, React y PostgreSQL.",
    longDesc: `
Sistema integral de visualización y gestión inmobiliaria con arquitectura moderna y alto rendimiento (Lighthouse 95+).\n
\n
📋 Funcionalidades principales\n
 🔹 Exploración de propiedades con filtros avanzados (ubicación, precio, tipo)\n
 🔹 Carruseles de imágenes dinámicos y optimizados\n
 🔹 Arquitectura Clean Architecture en Backend\n
 🔹 Base de datos relacional en la nube (Supabase)\n
 🔹 Despliegue CI/CD automatizado\n
\n
🛠️ Tecnologías utilizadas\n
 🔹 Frontend → React 19 + TypeScript + Tailwind CSS\n
 🔹 Backend → .NET 9 Web API + Entity Framework\n
 🔹 Base de datos → PostgreSQL (Supabase)\n
 🔹 Infraestructura → Docker + Koyeb + Netlify\n
    `,
    images: [
      "/images/proyecto3.png",
      "/images/proyecto3/propiedadesdestacadas.png",
      "/images/proyecto3/alquileres.jpg",
      "/images/proyecto3/propiedadetalle.jpg",
      "/images/proyecto3/contacto.jpg",
      "/images/proyecto3/accesoadministrador.jpg",
      "/images/proyecto3/paneldecontroladmin.jpg",
      "/images/proyecto3/mispropiedades.png",
      "/images/proyecto3/editarpropiedad.jpg",
      "/images/proyecto3/editarpropiedad2.jpg",
    ],
    demo: "https://inmobiliariabattauz.netlify.app",
    github: "https://github.com/Brian13b/inmobiliaria_frontend" 
  },
  {
    id: 4,
    tags: ["React", "Vite", "TailwindCSS", "JavaScript"],
    title: "Charity - Landing Page",
    cover: "/images/proyecto4.png",
    shortDesc: "Landing moderna para organización benéfica.",
    longDesc: `
Landing page moderna y responsiva desarrollada con React, Vite y TailwindCSS, diseñada para una organización benéfica ficticia como proyecto final del curso Fullstack de UTN.\n
\n
El diseño fue proporcionado en Figma y la implementación se realizó cuidando cada detalle visual, priorizando la fidelidad del diseño, el código limpio y la estructura escalable.\n
\n
✨ Características principales\n
 🔹 Componentes reutilizables y optimizados\n
 🔹 Diseño limpio, profesional y adaptable a cualquier dispositivo\n
 🔹 Estilizado con Tailwind CSS para un desarrollo rápido\n
 🔹 Secciones de campañas, estadísticas, equipo y testimonios\n
\n
📂 Estructura del proyecto\n
 🔹 Frontend → React + Vite\n
 🔹 Estilos → Tailwind CSS\n
 🔹 src/components → Componentes principales organizados modularmente\n
 🔹 public/ → Imágenes y recursos estáticos\n
\n
    `,
    images: [
      "/images/proyecto4.png",
      "/images/proyecto4/landing1.png",
      "/images/proyecto4/landing2.png",
      "/images/proyecto4/landing3.png",
      "/images/proyecto4/landing4.png",
      "/images/proyecto4/landing5.png"
    ],
    demo: "https://charity-landing-page-gold.vercel.app/",
    github: "https://github.com/Brian13b/charity-landing-page"
  }
];

export default projects;
