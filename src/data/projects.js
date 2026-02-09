const projects = [
  {
    id: 1,
    tags: ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "Leaflet", "SOAP"],
    title: "Logística Pro: Tracking GPS & Facturación",
    cover: "/images/proyecto_logistico.jpg",
    shortDesc: "Plataforma integral de logística con rastreo en tiempo real y facturación AFIP.",
    longDesc: `
      Solución Enterprise para empresas de transporte. Este sistema resuelve la problemática de unificar la gestión operativa con la administrativa en una sola plataforma.\n
      \n
      🔥 Puntos Fuertes (High-Level):\n
      • Arquitectura de Microservicios desacoplada para máxima escalabilidad.\n
      • Procesamiento de datos GPS en tiempo real mediante Sockets TCP asíncronos.\n
      • Integración directa con ARCA (AFIP) para facturación electrónica legal.\n
      \n
      🛠️ Stack Tecnológico:\n
      🔹 Backend: Python (FastAPI), AsyncIO, WebSockets.\n
      🔹 Frontend: React, Redux, TailwindCSS, Leaflet (Mapas).\n
      🔹 Infraestructura: Docker, Nginx, PostgreSQL + MongoDB.\n
      🔹 Integraciones: SOAP/XML (Facturación), TCP (Hardware GPS).\n
    `,
    images: [
      "/images/proyecto_logistico.jpg",
      "/images/proyecto_logistico/dashboard.jpg",
      "/images/proyecto_logistico/Seguimiento.jpg", 
      "/images/proyecto_logistico/Conductores.jpg",
      "/images/proyecto_logistico/ConductoresModal.jpg", 
      "/images/proyecto_logistico/IniciarSesion.jpg",
      "/images/proyecto_logistico/ModoClaro.jpg",
      "/images/proyecto_logistico/Reportes.jpg",
      "/images/proyecto_logistico/reportes2.jpg", 
      "/images/proyecto_logistico/vehiculos.jpg",
      "/images/proyecto_logistico/vehiculosCargaDocumentosModal.jpg",
      "/images/proyecto_logistico/vehiculosCargaModal.jpg",
      "/images/proyecto_logistico/Viajes.jpg",
      "/images/proyecto_logistico/ViajesModal.jpg"
    ],
    demo: "https://blogistica.vercel.app/",
    github: "https://github.com/Brian13b/SistemaLogistico"
  },
  {
    id: 2,
    title: "Inmobiliaria Cloud: Gestión de Propiedades",
    tags: [".NET 9", "C#", "React", "PostgreSQL", "Clean Architecture"],
    cover: "/images/proyecto_inmobiliaria.png",
    shortDesc: "Sistema de gestión inmobiliaria de alto rendimiento con .NET 9 y React.",
    longDesc: `
      Plataforma moderna diseñada bajo los principios de Clean Architecture, garantizando mantenibilidad y testabilidad. \n
      El sistema permite la administración completa de un catálogo de propiedades con una experiencia de usuario fluida y tiempos de carga optimizados (Lighthouse 95+).\n
      \n
      🚀 Características Clave:\n
      🔹 Backend robusto en .NET 9 Web API con Entity Framework Core.\n
      🔹 Filtrado avanzado y búsqueda dinámica de propiedades.\n
      🔹 Panel de administración seguro con roles y permisos.\n
      🔹 Despliegue automatizado (CI/CD) en contenedores.\n
      \n
      🛠️ Stack Tecnológico:\n
      🔹 Core: C# .NET 9, React 19 + TypeScript.\n
      🔹 Datos: PostgreSQL (Supabase), Entity Framework.\n
      🔹 DevOps: Docker, Koyeb.\n
    `,
    images: [
      "/images/proyecto_inmobiliaria.png",
      "/images/proyecto_inmobiliaria/propiedadesdestacadas.png",
      "/images/proyecto_inmobiliaria/alquileres.jpg",
      "/images/proyecto_inmobiliaria/propiedadetalle.png",
      "/images/proyecto_inmobiliaria/contacto.jpg",
      "/images/proyecto_inmobiliaria/accesoadministrador.jpg",
      "/images/proyecto_inmobiliaria/paneldecontroladmin.jpg",
      "/images/proyecto_inmobiliaria/mispropiedades.jpg",
      "/images/proyecto_inmobiliaria/editarpropiedad.jpg",
      "/images/proyecto_inmobiliaria/editarpropiedad2.jpg",
      "/images/proyecto_inmobiliaria/editarpropiedad.jpg"
    ],
    demo: "https://inmobiliariabottazzi.vercel.app/",
    github: "https://github.com/Brian13b/inmobiliaria_frontend" 
  },
  {
    id: 3,
    tags: ["FastAPI", "React", "Firebase", "PostgreSQL", "SaaS"],
    title: "Quico Basquet: SaaS de Reservas",
    cover: "/images/proyecto_quicobasquet.jpg",
    shortDesc: "Software de gestión de clubes deportivos, reservas y membresías.",
    longDesc: `
      Aplicación Full Stack tipo SaaS para la digitalización de clubes deportivos. Permite automatizar la gestión de turnos, reduciendo la carga administrativa y eliminando errores de solapamiento.\n
      \n
      💼 Funcionalidades de Negocio:\n
      🔹 Motor de reservas en tiempo real para múltiples canchas (Básquet/Vóley).\n
      🔹 Gestión de suscripciones mensuales y control de acceso.\n
      🔹 Dashboard administrativo con métricas de ocupación.\n
      🔹 Autenticación híbrida (Social Login + Email).\n
      \n
      🛠️ Stack Tecnológico:\n
      🔹 Backend: Python (FastAPI), SQLAlchemy.\n
      🔹 Frontend: React, Vite, CSS Modules.\n
      🔹 Base de datos: PostgreSQL (Datos relacionales) + Firebase (Auth).\n
    `,
    images: [
      "/images/proyecto_quicobasquet.jpg",
      "/images/proyecto_quicobasquet/quicobasquet1.png",
      "/images/proyecto_quicobasquet/quicobasquet2.png",
      "/images/proyecto_quicobasquet/quicobasquet3.png",
      "/images/proyecto_quicobasquet/quicobasquet4.png"
    ],
    demo: "https://quicobasquet.vercel.app/",
    github: "https://github.com/Brian13b/QuicoBasquetProject"
  },
  {
    id: 4,
    tags: ["React", "Java Spring Boot", "PostgreSQL", "Cloudinary", "JWT", "TailwindCSS"],
    title: "Camel Shop | E-commerce Full Stack",
    cover: "/images/proyecto_ecommerce.jpeg", 
    shortDesc: "Plataforma de comercio electrónico con gestión de stock matricial (Color/Talle) y panel administrativo.",
    longDesc: `
      Desarrollo integral de una plataforma E-commerce para una marca de indumentaria ("Camel Shop"). El sistema conecta una experiencia de compra moderna con un potente panel de gestión de inventario.\n
      \n
      🚀 **Características Principales:**\n
      \n
      🛒 **Experiencia de Cliente (Frontend):**\n
      🔹 Catálogo inteligente con filtrado por URL (SEO Friendly) y búsqueda en tiempo real.\n
      🔹 Página de detalle inmersiva con selección dinámica de stock (bloqueo de talles sin stock).\n
      🔹 Carrito de compras persistente con lógica de variantes (Color + Talle).\n
      🔹 Checkout integrado con WhatsApp API para finalizar pedidos.\n
      \n
      ⚙️ **Panel de Administración (Back-office):**\n
      🔹 Dashboard protegido con autenticación JWT (Spring Security).\n
      🔹 **Gestión de Stock Matricial:** Carga de productos con múltiples variantes (Ej: Rojo/S, Rojo/M) y cálculo automático de totales.\n
      🔹 Integración con **Cloudinary** para almacenamiento y optimización de imágenes en la nube.\n
      🔹 Gestión de pedidos con estados (Pendiente, Enviado, Entregado) y carga de comprobantes.\n
      \n
      🛠️ **Arquitectura Técnica:**\n
      🔹 **Backend:** Java 21, Spring Boot 3, Hibernate/JPA, Spring Security.\n
      🔹 **Base de Datos:** PostgreSQL (alojada en Supabase).\n
      🔹 **Frontend:** React.js, TailwindCSS, Context API, Axios.\n
      🔹 **Infraestructura:** Despliegue en Railway (Backend) y Vercel (Frontend).\n
    `,
    images: [
      "/images/proyecto_ecommerce.jpeg", 
      "/images/proyecto_ecommerce/ecommerce1.jpeg",
      "/images/proyecto_ecommerce/ecommerce2.jpeg",
      "/images/proyecto_ecommerce/ecommerce3.jpeg",
      "/images/proyecto_ecommerce/ecommerce4.jpeg",
      "/images/proyecto_ecommerce/ecommerce5.jpeg",
      "/images/proyecto_ecommerce/ecommerce6.jpeg",
      "/images/proyecto_ecommerce/ecommerce7.jpeg",
      "/images/proyecto_ecommerce/ecommerce8.jpeg",
      "/images/proyecto_ecommerce/ecommerce9.jpeg"
    ],
    demo: "https://camelmodashop.vercel.app/", 
    github: "https://github.com/Brian13b/Ecommerce_Camel_Shop_Backend"
  }
];

export default projects;