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
    title: "Task API",
    tags: ["Java", "Spring Boot", "PostgreSQL", "JWT", "DTO Pattern"],
    cover: "/images/proyecto3.jpg",
    shortDesc: "API Rest de lista de tareas con autenticación.",
    longDesc: `
Backend de una aplicación ToDo diseñada para organizar tareas y gestionar usuarios con seguridad y eficiencia.\n
\n
📋 Funcionalidades principales\n
 🔹 Crear, editar, eliminar y marcar tareas como completadas\n
 🔹 Registro y autenticación de usuarios con JWT\n
 🔹 Rutas protegidas para manejo personalizado de tareas\n
 🔹 Validación de datos mediante DTOs\n
 🔹 Base de datos relacional con persistencia robusta\n
\n
🛠️ Tecnologías utilizadas\n
 🔹 Lenguaje → Java\n
 🔹 Framework → Spring Boot\n
 🔹 Seguridad → Spring Security + JWT\n
 🔹 Base de datos → PostgreSQL\n
 🔹 Arquitectura → Patrón DTO para separación de lógica\n
    `,
    images: [
      "/images/proyecto3.jpg"
    ],
    demo: "https://github.com/Brian13b/tasks-api",
    github: "https://github.com/Brian13b/tasks-api"
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
