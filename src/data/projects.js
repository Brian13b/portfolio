const projects = [
  {
    id: 1,
    tags: [
      "Python", 
      "FastAPI", 
      "React", 
      "PostgreSQL", 
      "Docker",
      "TCP/IP", 
      "Microservicios",
      "AFIP/ARCA"
    ],
    title: "Sistema Logístico Integral | Gestión, Tracking GPS & Facturación",
    cover: "/images/proyecto_logistico.jpg",
    shortDesc: "Solución End-to-End para logística: ERP administrativo, Facturación Electrónica y Tracking GPS con hardware propio.",
    longDesc: `
      Esta plataforma no es solo un dashboard; es un ecosistema operativo completo diseñado para empresas de transporte que necesitan unificar su gestión administrativa con la operativa en tiempo real.
      
      \n### 🚀 Visión General
      El sistema resuelve la fragmentación de datos integrando el flujo de trabajo completo: desde que se da de alta un chofer y se asigna un viaje, hasta el seguimiento minuto a minuto de la carga y la facturación final validada por ARCA (ex AFIP).
      
      \n### 🔥 Desafíos Técnicos & Soluciones (High-Level)
      
      \n**1. Motor de Tracking:**
      • Desarrollo de un **Servidor TCP asíncrono en Python** propio (sin depender de plataformas de terceros como Traccar).
      • Decodificación binaria de tramas de hardware GPS (Protocolo GT06) a nivel de byte.
      • Gestión de conexiones persistentes, heartbeats y reconexión automática ante pérdida de señal en ruta ("Zonas Muertas").
      
      \n**2. Arquitectura & Performance:**
      • **Microservicios:** Separación de lógica crítica (Ingesta de datos GPS vs. Gestión Administrativa) desplegados independientemente en Render y Fly.io.
      • **Optimización de Frontend:** Estrategias de renderizado eficiente en React para visualizar flotas en mapas sin congelar la UI, manejando cientos de actualizaciones de estado.
      • **Base de Datos Eficiente:** Schemas optimizados ("Ligero" vs "Completo") para reducir tiempos de carga de 15s a <0.8s en consultas masivas.
      
      \n**3. Negocio & Compliance:**
      • Integración SOAP/XML directa con los servidores de Facturación Electrónica de Argentina (Web Services de ARCA).
      • Sistema de alertas automatizadas para vencimientos de documentación de vehículos y conductores.
      
      \n### 🛠️ Stack Tecnológico Detallado
      • **Backend:** Python (FastAPI), AsyncIO (para concurrencia masiva), SQLAlchemy.
      • **Frontend:** React.js, TailwindCSS, Context API, Axios (Interceptors), Leaflet (Mapas Interactivos).
      • **Datos:** PostgreSQL (Relacional), Google Drive API (Almacenamiento de Docs).
      • **Infraestructura:** Docker Containers, Nginx (Reverse Proxy), CI/CD básico.
      • **Hardware:** Integración con trackers serie GT06 y compatibles.
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
    title: "Bottazzi Inmobiliaria | Plataforma Digital End-to-End",
    tags: [".NET 9", "React 19", "PostgreSQL", "Clean Architecture", "Cloudinary"],
    cover: "/images/proyecto_inmobiliaria.png",
    shortDesc: "Ecosistema inmobiliario profesional: Gestión administrativa, catálogo dinámico y optimización SEO.",
    longDesc: `
      Plataforma integral diseñada para el sector inmobiliario bajo un enfoque de **Clean Architecture**, priorizando la escalabilidad y el desacoplamiento de la lógica de negocio. \n
      
      El proyecto resuelve problemáticas reales como la gestión eficiente de activos multimedia, la visibilidad en buscadores (SEO) y una experiencia de usuario (UX) premium de estilo 'Wealth'.\n
      \n
      🚀 **Características de Ingeniería:**\n
      🔹 **Arquitectura Limpia:** Separación estricta de capas (Domain, Application, Infrastructure, API) para facilitar el mantenimiento y la evolución del sistema.\n
      🔹 **Filtros de Alto Rendimiento:** Implementación de búsqueda dinámica por múltiples criterios (servicios, comodidades, rangos de precio y estado del inmueble).\n
      🔹 **Gestión Multimedia Pro:** Integración con **Cloudinary** para el procesamiento, optimización y entrega de imágenes en la nube, garantizando tiempos de carga mínimos.\n
      🔹 **SEO Dinámico:** Implementación de metatags y datos estructurados dinámicos por propiedad para maximizar el posicionamiento orgánico.\n
      🔹 **Admin Panel 'Full Control':** Panel privado para la gestión de catálogo, configuración de portadas (Hero) y recepción de consultas vía API con integración a WhatsApp.\n
      \n
      🛠️ **Stack Tecnológico y Herramientas:**\n
      🔹 **Backend:** C# .NET 9 Web API, Entity Framework Core (Code First), JWT Auth.\n
      🔹 **Frontend:** React 19, TypeScript, Tailwind CSS, Lucide Icons, Swiper.js.\n
      🔹 **Base de Datos:** PostgreSQL administrado vía **Supabase**.\n
      🔹 **Infraestructura:** CI/CD automatizado, Hosting en **Koyeb** (Backend) y **Vercel** (Frontend).\n
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
      "/images/proyecto_inmobiliaria/editarpropiedad2.jpg"
    ],
    demo: "https://inmobiliariabottazzi.vercel.app/",
    github: "https://github.com/Brian13b/inmobiliaria_frontend" 
  },
  {
    id: 3,
    tags: ["FastAPI", "React", "Firebase", "PostgreSQL", "SaaS"],
    title: "Quico Basquet | SaaS de Reservas",
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
    shortDesc: "Plataforma de comercio electrónico con gestión de stock matricial y panel administrativo.",
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