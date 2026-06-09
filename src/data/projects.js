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

### 🚀 Desafíos Técnicos & Soluciones
  \n• **Motor de Tracking:** Desarrollo de un servidor TCP asíncrono en Python propio para decodificación binaria de tramas GPS y gestión de conexiones persistentes en "Zonas Muertas".
  \n• **Arquitectura de Microservicios:** Separación de la ingesta de datos GPS y la gestión administrativa, optimizando esquemas de BD para reducir consultas masivas a menos de 0.8s.
  \n• **Performance Frontend:** Estrategias de renderizado eficiente en React para manejar cientos de actualizaciones de estado en el mapa sin congelar la interfaz.
  \n• **Compliance Empresarial:** Integración SOAP/XML directa con los Web Services de ARCA (ex AFIP) para facturación electrónica automatizada.

### 🛠️ Stack Tecnológico
  \n• **Backend:** Python (FastAPI), AsyncIO, SQLAlchemy.
  \n• **Frontend:** React.js, TailwindCSS, Context API, Leaflet.
  \n• **Datos:** PostgreSQL, Google Drive API.
  \n• **Infraestructura:** Docker, Nginx, Render, Fly.io.
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
    title: "Bottazzi Inmobiliaria | Plataforma Digital",
    tags: [".NET 9", "React 19", "PostgreSQL", "Clean Architecture", "Cloudinary"],
    cover: "/images/proyecto_inmobiliaria.png",
    shortDesc: "Ecosistema inmobiliario profesional: Gestión administrativa, catálogo dinámico y optimización SEO.",
    longDesc: `
Plataforma integral diseñada para el sector inmobiliario bajo un enfoque de Clean Architecture, priorizando la escalabilidad y el desacoplamiento de la lógica de negocio.

### 🚀 Características de Ingeniería
  \n• **Arquitectura Limpia:** Separación estricta de capas (Domain, Application, Infrastructure, API) para un mantenimiento eficiente.
  \n• **Motor de Búsqueda:** Filtros de alto rendimiento con múltiples criterios dinámicos (servicios, precios, estado).
  \n• **Gestión Multimedia:** Integración directa con Cloudinary para procesamiento, optimización y entrega rápida de imágenes.
  \n• **SEO Dinámico:** Implementación automatizada de metatags y datos estructurados por cada propiedad para maximizar el posicionamiento orgánico.
  \n• **Admin Panel:** Panel privado para gestión completa del catálogo y recepción de leads vía API integrados con WhatsApp.

### 🛠️ Stack Tecnológico
  \n• **Backend:** C# .NET 9 Web API, Entity Framework Core, JWT Auth.
  \n• **Frontend:** React 19, TypeScript, Tailwind CSS, Swiper.js.
  \n• **Datos:** PostgreSQL (Supabase).
  \n• **Infraestructura:** CI/CD automatizado, Koyeb (Backend), Vercel (Frontend).
    `,
    images: [
      "/images/proyecto_inmobiliaria.png",
      "/images/proyecto_inmobiliaria/propiedadesdestacadas.png",
      "/images/proyecto_inmobiliaria/ventas.png",
      "/images/proyecto_inmobiliaria/propiedadetalles.png",
      "/images/proyecto_inmobiliaria/propiedadetalles2.png",
      "/images/proyecto_inmobiliaria/tasaciones.png",
      "/images/proyecto_inmobiliaria/contacto.png",
      "/images/proyecto_inmobiliaria/contacto2.png",
      "/images/proyecto_inmobiliaria/footer.png",
      "/images/proyecto_inmobiliaria/accesoadministrador.png",
      "/images/proyecto_inmobiliaria/paneldecontroladmin.png",
      "/images/proyecto_inmobiliaria/mispropiedades.png",
      "/images/proyecto_inmobiliaria/nuevapropiedad.png",
      "/images/proyecto_inmobiliaria/nuevapropiedad2.png",
    ],
    demo: "https://inmobiliariabottazzi.com.ar/",
    github: "https://github.com/Brian13b/inmobiliaria_frontend" 
  },
  {
    id: 3,
    tags: ["FastAPI", "React", "Firebase", "PostgreSQL", "SaaS"],
    title: "Quico Basquet | Aplicación de Reservas",
    cover: "/images/proyecto_quicobasquet.jpg",
    shortDesc: "Software de gestión de cancha deportiva, reservas y suscripciones.",
    longDesc: `
Aplicación Full Stack tipo Aplicación para la digitalización de canchas deportivas. Permite automatizar la gestión de turnos, reduciendo la carga administrativa y eliminando errores de solapamiento.

### 🚀 Funcionalidades de Negocio
  \n• **Motor de Reservas:** Sistema en tiempo real para múltiples canchas (Básquet/Vóley) evitando conflictos de horarios.
  \n• **Suscripciones:** Gestión automatizada de membresías mensuales y control de acceso de usuarios.
  \n• **Dashboard Administrativo:** Panel de control con métricas de ocupación e ingresos.
  \n• **Seguridad Híbrida:** Sistema de autenticación seguro combinando Social Login y Email.

### 🛠️ Stack Tecnológico
  \n• **Backend:** Python (FastAPI), SQLAlchemy.
  \n• **Frontend:** React, Vite, CSS Modules.
  \n• **Datos & Auth:** PostgreSQL (Relacional) y Firebase (Autenticación).
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
    shortDesc: "Plataforma de comercio electrónico con gestión de stock y panel administrativo.",
    longDesc: `
Desarrollo integral de una plataforma E-commerce para una marca de indumentaria. El sistema conecta una experiencia de compra moderna con un potente panel de gestión de inventario.

### 🚀 Características Principales
  \n• **Experiencia de Cliente:** Catálogo inteligente con filtrado SEO Friendly, búsqueda en tiempo real y bloqueo dinámico de talles sin stock.
  \n• **Carrito Avanzado:** Lógica persistente de variantes (Color + Talle) y checkout optimizado integrado con la API de WhatsApp.
  \n• **Back-office de Inventario:** Gestión de stock matricial para carga de productos con múltiples variantes y cálculo automático de totales.
  \n• **Gestión Multimedia & Pedidos:** Almacenamiento en Cloudinary y seguimiento de estados de pedidos (Pendiente, Enviado, Entregado) con carga de comprobantes.

### 🛠️ Stack Tecnológico
  \n• **Backend:** Java 21, Spring Boot 3, Hibernate/JPA, Spring Security (JWT).
  \n• **Frontend:** React.js, TailwindCSS, Context API, Axios.
  \n• **Datos:** PostgreSQL (Supabase).
  \n• **Infraestructura:** Railway (Backend) y Vercel (Frontend).
    `,
    images: [
      "/images/proyecto_ecommerce.jpeg", 
      "/images/proyecto_ecommerce/ecommerce-inicio-2.jpeg",
      "/images/proyecto_ecommerce/ecommerce-catalogo.jpeg",
      "/images/proyecto_ecommerce/ecommerce-prenda-detalle.jpeg",
      "/images/proyecto_ecommerce/ecommerce-carrito.jpeg",
      "/images/proyecto_ecommerce/ecommerce-checkout.jpeg",
      "/images/proyecto_ecommerce/ecommerce-contacto.jpeg",
      "/images/proyecto_ecommerce/ecommerce-contacto-2.jpeg",
      "/images/proyecto_ecommerce/ecommerce-mobile.jpeg",
      "/images/proyecto_ecommerce/ecommerce-mobile-2.jpeg"
    ],
    demo: "https://camelmodashop.vercel.app/", 
    github: "https://github.com/Brian13b/Ecommerce_Camel_Shop_Backend"
  },
  {
    id: 5,
    tags: ["React 19", "Vite", "Tailwind CSS v4", "SPA"],
    title: "GB Soluciones Digitales | Landing Page Corporativa",
    cover: "/images/proyecto_gbsolucionesdigitales.png",
    shortDesc: "Single Page Application (SPA) moderna y responsiva diseñada como la cara digital oficial de la agencia.",
    longDesc: `
Single Page Application (SPA) corporativa de alto rendimiento que sirve como carta de presentación oficial de la marca. El desarrollo fue concebido bajo una premisa clara: comunicar visual y técnicamente la capacidad de construir soluciones de software limpias que impulsan el crecimiento empresarial.

### 🚀 Características de Ingeniería
  \n• **Performance Extrema:** Optimizada meticulosamente utilizando Vite como entorno de desarrollo y empaquetado para lograr tiempos de carga inicial casi instantáneos.
  \n• **Diseño Tech Premium:** Interfaz de usuario totalmente responsiva (Mobile-First) que utiliza fuentes tipográficas como 'Inter' y 'Space Grotesk' para lograr una estética moderna, limpia y minimalista.
  \n• **Calidad de Código:** Estructuración modular y semántica de componentes de UI (Navbar, Hero, Services) junto con la configuración de ESLint para asegurar un código mantenible, escalable y libre de errores.

### ⚙️ Detalles de Implementación
  \n• **Frontend:** React 19 (Biblioteca principal de UI) y Vite.
  \n• **Estilos & Iconos:** Tailwind CSS v4 (Framework de estilos utility-first) y Lucide React.
    `,
    images: [
      "/images/proyecto_gbsolucionesdigitales.png",
      "/images/proyecto_gbsolucionesdigitales/gbsolucionesdigitales1.png",
      "/images/proyecto_gbsolucionesdigitales/gbsolucionesdigitales2.png",
      "/images/proyecto_gbsolucionesdigitales/gbsolucionesdigitales3.png",
      "/images/proyecto_gbsolucionesdigitales/gbsolucionesdigitales4.png"
    ],
    demo: "https://www.gbsolucionesdigitales.com.ar/", 
    github: "https://github.com/GB-Soluciones-Digitales/GB-Soluciones-Digitales-Landing-Page.git"
  }
];

export default projects;