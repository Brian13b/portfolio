const projects = [
  {
    id: 1,
    tags: ["PWA", "React", "Vite", "Tailwind CSS", "Docker", "Zustand", "C#", ".NET", "Clean Architecture", "PostgreSQL", "Entity Framework", "JWT", "Web Push", "Vercel", "Railway"],
    title: "MM Entrenamiento | Gestión de Gimnasio y Entrenamiento Personalizado",
    cover: "/images/proyecto_mmentrenamiento.png",
    shortDesc: "PWA para un centro de entrenamiento personalizado que permite a los usuarios gestionar sus turnos, a los instructores gestionar la asistencia y a la administración del gimnasio tener un control completo de la operación.",
    longDesc: `
Progressive Web App a medida que digitaliza la operación de un gimnasio de entrenamiento personalizado. Gestiona turnos fijos y clases libres con control de cupos por horario, y maneja las membresías como “billeteras” de créditos. Si el alumno cancela a tiempo, el crédito se devuelve automáticamente.

Tiene tres roles (RBAC). Los alumnos reservan clases y ven sus créditos y la cartelera de avisos. Los profesores toman asistencia con una interfaz rápida e idempotente, que evita duplicados, y consultan fichas técnicas con historial de lesiones y objetivos, además de los planes de entrenamiento embebidos desde la nube. Los administradores controlan membresías, finanzas y ajustes, y cuentan con un panel de retención que detecta alumnos en riesgo de abandono por ausencias consecutivas, con acceso rápido a WhatsApp. La comunicación se completa con anuncios con soporte Markdown y notificaciones Web Push.

Como PWA, incluye un flujo de actualización controlado: el Service Worker detecta una nueva versión y la app avisa al usuario, que decide cuándo aplicarla. También maneja la rotación de suscripciones push para no perder notificaciones.

### 🛠️ Stack Tecnológico

- **Frontend:** React + Vite, Tailwind CSS v4, Zustand, Headless UI, Heroicons, React-Hot-Toast.
- **PWA:** vite-plugin-pwa (estrategia injectManifest), Service Worker, Web Push.
- **Backend:** C# / .NET con Clean Architecture, Entity Framework Core.
- **Datos:** PostgreSQL.
- **Seguridad:** JWT (access y refresh tokens), BCrypt.
- **Servicios externos:** API REST de Brevo.
- **Infraestructura:** Vercel (frontend), Railway (backend con contenedores).
    `,
    images: [
      "/images/proyecto_mmentrenamiento.png",
      "/images/proyecto_mmentrenamiento/Admin_Dashboard.png",
      "/images/proyecto_mmentrenamiento/Admin_Horarios.png",
      "/images/proyecto_mmentrenamiento/Admin_Ajustes.png",
      "/images/proyecto_mmentrenamiento/Alumno_Dashboard.png",
      "/images/proyecto_mmentrenamiento/Alumno_Horarios.png",
      "/images/proyecto_mmentrenamiento/Alumno_Turnos.png",
      "/images/proyecto_mmentrenamiento/Alumno_Perfil.png",
      "/images/proyecto_mmentrenamiento/Profe_Horarios.png",
      "/images/proyecto_mmentrenamiento/Profe_Asistencia.png",
    ],
    demo: "https://mm-entrenamiento.vercel.app/",
    github: "https://github.com/Brian13b/MM_Entrenamiento"
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

- **Arquitectura Limpia:** Separación estricta de capas (Domain, Application, Infrastructure, API) para un mantenimiento eficiente.
- **Motor de Búsqueda:** Filtros de alto rendimiento con múltiples criterios dinámicos (servicios, precios, estado).
- **Gestión Multimedia:** Integración directa con Cloudinary para procesamiento, optimización y entrega rápida de imágenes.
- **SEO Dinámico:** Implementación automatizada de metatags y datos estructurados por cada propiedad para maximizar el posicionamiento orgánico.
- **Admin Panel:** Panel privado para gestión completa del catálogo y recepción de leads vía API integrados con WhatsApp.

### 🛠️ Stack Tecnológico

- **Backend:** C# .NET 9 Web API, Entity Framework Core, JWT Auth.
- **Frontend:** React 19, TypeScript, Tailwind CSS, Swiper.js.
- **Datos:** PostgreSQL (Supabase).
- **Infraestructura:** CI/CD automatizado, Koyeb (Backend), Vercel (Frontend).
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
    title: "DaniPak | Sistema de Gestión Logística con Contingencia Offline",
    tags: ["PWA", "Offline-First", "Service Worker", "IndexedDB", "React", "Vite", "Tailwind CSS", "FastAPI", "Python", "PostgreSQL", "Docker", "GitHub Actions", "Railway", "Logística", "ERP"],
    cover: "/images/proyecto_danipak.png",
    shortDesc: "Plataforma web y PWA para Expreso DaniPak que centraliza comprobantes de envío, remitos, facturas y cuentas corrientes, con auditoría y capacidad de seguir operando sin conexión.",
    longDesc: `
Sistema integral de gestión logística y administrativa desarrollado a medida para Expreso DaniPak, una empresa de encomiendas. Cubre la emisión de comprobantes de envío, carga de remitos, el control de cuentas corrientes, la facturación y la auditoría de operaciones. El sistema prioriza una gestión validada manualmente, sin pasarelas de pago automatizadas.

Está diseñado con contingencia offline: gracias al caché de Service Worker, el almacenamiento local en IndexedDB y una cola de sincronización, los operadores pueden seguir trabajando ante problemas de conectividad y los cambios se sincronizan al recuperar la conexión. La interfaz es mobile-first y funciona como PWA, con la misma agilidad en escritorio o en el celular.

El proyecto es un monorepo dockerizado, con un flujo de CI/CD y la rama main protegida: cada Pull Request corre en GitHub Actions la instalación y compilación de backend y frontend, y al mergear se despliega automáticamente en Railway.

### 🛠️ Stack Tecnológico

- **Backend:** FastAPI, SQLAlchemy, Pydantic, autenticación OAuth2/JWT.
- **Frontend:** React + Vite (PWA), Tailwind CSS, React Router v6, Context API con JWT, Axios con interceptores.
- **Datos:** PostgreSQL.
- **Offline:** Service Worker (caché), IndexedDB, cola de sincronización.
- **Infraestructura:** Docker y Docker Compose, GitHub Actions (CI), Railway (CD).
    `,
    images: [
      "/images/proyecto_danipak.png",
    ],
    demo: "",
    github: "https://github.com/GB-Soluciones-Digitales/sistema_gestion_logistica_danipak"
  },
  {
    id: 4,
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

- **Motor de Tracking:** Desarrollo de un servidor TCP asíncrono en Python propio para decodificación binaria de tramas GPS y gestión de conexiones persistentes en "Zonas Muertas".
- **Arquitectura de Microservicios:** Separación de la ingesta de datos GPS y la gestión administrativa, optimizando esquemas de BD para reducir consultas masivas a menos de 0.8s.
- **Performance Frontend:** Estrategias de renderizado eficiente en React para manejar cientos de actualizaciones de estado en el mapa sin congelar la interfaz.
- **Compliance Empresarial:** Integración SOAP/XML directa con los Web Services de ARCA (ex AFIP) para facturación electrónica automatizada.

### 🛠️ Stack Tecnológico

- **Backend:** Python (FastAPI), AsyncIO, SQLAlchemy.
- **Frontend:** React.js, TailwindCSS, Context API, Leaflet.
- **Datos:** PostgreSQL, Google Drive API.
- **Infraestructura:** Docker, Nginx, Render, Fly.io.
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
    id: 5,
    tags: ["SaaS", "Multi-tenant", "PWA", "Offline-First", "Service Worker", "IndexedDB", "FastAPI", "Python", "React", "Vite", "PostgreSQL", "JWT", "OAuth2", "Pydantic", "Logística"],
    title: "DripGestion | SaaS Multi-tenant para Distribuidores de Agua y Bebidas",
    cover: "/images/proyecto_dripgestion.png",
    shortDesc: "SaaS multi-tenant para distribuidoras de agua y soda: una sola instancia sirve a múltiples empresas, con branding propio por subdominio, panel administrativo, portal de clientes y contingencia offline. En fase de prueba.",
    longDesc: `
DripGestion es un SaaS pensado para distribuidoras de agua y soda. Una única instancia de la API atiende a múltiples empresas (tenants), cada una con su propia identidad visual: colores, logo y WhatsApp configurables, con branding dinámico por subdominio.

El aislamiento de datos usa la estrategia de base de datos y esquema compartidos. Las tablas críticas (clientes, pedidos, movimientos) llevan un tenant_id, que el middleware de autenticación extrae del token del usuario, y el acceso a datos filtra por ese ID para que ninguna empresa vea información de otra. Hay tres roles (admin, chofer y cliente) y módulos de gestión de cuentas corrientes, envases prestados con geolocalización, registro de recorridos y ventas, y cierres de caja diarios. Incluye dashboard administrativo y portal de clientes.

Está diseñado como PWA con contingencia offline, mediante caché de Service Worker, IndexedDB y una cola de sincronización, pensado para que la operación en ruta no dependa de tener conexión permanente. El proyecto está en fase de prueba, y el roadmap incluye facturación electrónica con ARCA (ex AFIP), optimización de rutas, notificaciones push y reportes en PDF.

### 🛠️ Stack Tecnológico

- **Backend:** FastAPI, SQLAlchemy, Pydantic v2.
- **Frontend:** React + Vite (PWA).
- **Datos:** PostgreSQL.
- **Seguridad:** OAuth2 con JWT, Bcrypt, aislamiento por tenant_id.
- **Offline:** Service Worker (caché), IndexedDB, cola de sincronización.
    `,
    images: [
      "/images/proyecto_dripgestion.png",
    ],
    demo: "",
    github: "https://github.com/GB-Soluciones-Digitales/dripgestion_backend"
  },
  {
    id: 6,
    tags: ["React", "Java Spring Boot", "PostgreSQL", "Cloudinary", "JWT", "TailwindCSS"],
    title: "Camel Shop | E-commerce",
    cover: "/images/proyecto_ecommerce.jpeg",
    shortDesc: "Plataforma de comercio electrónico con gestión de stock y panel administrativo.",
    longDesc: `
Desarrollo integral de una plataforma E-commerce para una marca de indumentaria. El sistema conecta una experiencia de compra moderna con un potente panel de gestión de inventario.

### 🚀 Características Principales

- **Experiencia de Cliente:** Catálogo inteligente con filtrado SEO Friendly, búsqueda en tiempo real y bloqueo dinámico de talles sin stock.
- **Carrito Avanzado:** Lógica persistente de variantes (Color + Talle) y checkout optimizado integrado con la API de WhatsApp.
- **Back-office de Inventario:** Gestión de stock matricial para carga de productos con múltiples variantes y cálculo automático de totales.
- **Gestión Multimedia & Pedidos:** Almacenamiento en Cloudinary y seguimiento de estados de pedidos (Pendiente, Enviado, Entregado) con carga de comprobantes.

### 🛠️ Stack Tecnológico

- **Backend:** Java 21, Spring Boot 3, Hibernate/JPA, Spring Security (JWT).
- **Frontend:** React.js, TailwindCSS, Context API, Axios.
- **Datos:** PostgreSQL (Supabase).
- **Infraestructura:** Railway (Backend) y Vercel (Frontend).
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
    id: 7,
    tags: ["React 19", "Vite", "Tailwind CSS v4", "SPA"],
    title: "GB Soluciones Digitales | Landing Page Corporativa",
    cover: "/images/proyecto_gbsolucionesdigitales.png",
    shortDesc: "Single Page Application (SPA) moderna y responsiva diseñada como la cara digital oficial de la agencia.",
    longDesc: `
Single Page Application (SPA) corporativa que sirve como carta de presentación oficial de la marca. El desarrollo fue concebido bajo una premisa clara: comunicar visual y técnicamente la capacidad de construir soluciones de software limpias que impulsan el crecimiento empresarial.

### 🚀 Características de Ingeniería

- **Rendimiento:** Construida con Vite como entorno de desarrollo y empaquetado, para lograr tiempos de carga inicial bajos.
- **Diseño Tech Premium:** Interfaz de usuario totalmente responsiva (Mobile-First) que utiliza fuentes tipográficas como 'Inter' y 'Space Grotesk' para lograr una estética moderna, limpia y minimalista.
- **Calidad de Código:** Estructuración modular y semántica de componentes de UI (Navbar, Hero, Services) junto con la configuración de ESLint para mantener un código consistente, mantenible y escalable.

### 🛠️ Stack Tecnológico

- **Frontend:** React 19 (biblioteca principal de UI) y Vite.
- **Estilos & Iconos:** Tailwind CSS v4 (framework de estilos utility-first) y Lucide React.
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
  },
  {
    id: 8,
    tags: ["FastAPI", "React", "Firebase", "PostgreSQL"],
    title: "Quico Basquet | Aplicación de Reservas",
    cover: "/images/proyecto_quicobasquet.jpg",
    shortDesc: "Software de gestión de cancha deportiva, reservas y suscripciones.",
    longDesc: `
Aplicación web para la digitalización de canchas deportivas. Permite automatizar la gestión de turnos, reduciendo la carga administrativa y eliminando errores de solapamiento.

### 🚀 Funcionalidades de Negocio

- **Motor de Reservas:** Sistema en tiempo real para múltiples canchas (Básquet/Vóley) evitando conflictos de horarios.
- **Suscripciones:** Gestión automatizada de membresías mensuales y control de acceso de usuarios.
- **Dashboard Administrativo:** Panel de control con métricas de ocupación e ingresos.
- **Seguridad Híbrida:** Sistema de autenticación seguro combinando Social Login y Email.

### 🛠️ Stack Tecnológico

- **Backend:** Python (FastAPI), SQLAlchemy.
- **Frontend:** React, Vite, CSS Modules.
- **Datos & Auth:** PostgreSQL (relacional) y Firebase (autenticación).
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
  }
];

export default projects;