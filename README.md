# JMBQ Construcciones S.A.S. - Sitio Web Empresarial

## 📋 Descripción del Proyecto

Sitio web empresarial moderno y profesional para **JMBQ Construcciones S.A.S.**, empresa especializada en instalación y mantenimiento de adoquines para proyectos industriales.

**Eslogan:** "20 años pavimentando confianza"

## 🎨 Características del Diseño

### Identidad Visual
- **Colores corporativos:** Azul (#1E3A8A) y Amarillo (#FCD34D)
- **Tipografía:** Inter (Google Fonts)
- **Estilo:** Moderno, profesional, orientado a conversión

### Estructura de la Página

1. **Hero Section** - Mensaje de valor principal con estadísticas
2. **Quiénes Somos** - Información institucional y diferenciadores
3. **Servicios** - Instalación, mantenimiento y asesoría técnica
4. **Proyectos** - Galería de trabajos realizados (destacando clientes como Sociedad Portuaria y Contecar)
5. **Por Qué Elegirnos** - 6 razones principales
6. **Seguridad y Calidad** - Compromiso con estándares
7. **Contacto** - Módulo con botón directo a WhatsApp

## 🚀 Funcionalidades

- ✅ Diseño 100% responsive (Desktop, Tablet, Móvil)
- ✅ Navegación suave entre secciones
- ✅ Menú móvil hamburguesa
- ✅ Botón flotante de WhatsApp visible en todas las páginas
- ✅ Animaciones al hacer scroll
- ✅ Contador animado de estadísticas
- ✅ Optimización de imágenes
- ✅ Accesibilidad mejorada

## 📱 Módulo de Contacto WhatsApp

El sitio incluye múltiples puntos de contacto:

1. **Botón flotante** (esquina inferior derecha) - Visible en todas las secciones
2. **Botón principal en Hero** - "Solicitar Cotización"
3. **Sección de Contacto** - Botón destacado con información completa

**Número de WhatsApp:** +57 320 246 7052

**Mensaje predefinido:**
```
Hola, estoy interesado en conocer más sobre sus servicios de instalación y mantenimiento de adoquines. Me gustaría recibir una cotización para mi proyecto.
```

## 📁 Estructura de Archivos

```
jmbqconsturcciones/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interactividad
├── README.md           # Este archivo
└── PAGINA_WEB/
    ├── LOGOS/          # Logos de la empresa
    └── REGISTRO_FOTOGRAFICO/  # Fotografías de proyectos
```

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Diseño moderno con variables CSS, Grid y Flexbox
- **JavaScript (Vanilla)** - Interactividad sin dependencias
- **Google Fonts** - Tipografía Inter

## 📦 Instalación y Uso

### Opción 1: Servidor Local Simple

1. Abrir `index.html` directamente en el navegador
2. O usar un servidor local:
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server
   ```

### Opción 2: Servidor de Desarrollo

Para desarrollo con recarga automática, usar herramientas como:
- Live Server (VS Code Extension)
- BrowserSync
- Vite (modo estático)

## 🌐 Recomendaciones para Despliegue

### 1. Hosting Recomendado

**Opciones gratuitas:**
- **Netlify** - Deploy automático desde Git, SSL gratuito
- **Vercel** - Similar a Netlify, excelente rendimiento
- **GitHub Pages** - Gratis para repositorios públicos

**Opciones de pago (más control):**
- **Hostinger** - Económico y confiable
- **SiteGround** - Excelente soporte
- **AWS S3 + CloudFront** - Escalable y profesional

### 2. Optimizaciones Pre-Despliegue

#### Imágenes
```bash
# Optimizar imágenes antes de subir
# Herramientas recomendadas:
# - TinyPNG (https://tinypng.com/)
# - ImageOptim
# - Squoosh (https://squoosh.app/)
```

#### Minificación
```bash
# Minificar CSS y JS (opcional pero recomendado)
# Herramientas:
# - CSS Minifier
# - JS Minifier
# - O usar build tools como Vite, Webpack
```

### 3. Configuración del Dominio

1. **Registrar dominio** (ej: jmbqconstrucciones.com)
2. **Configurar DNS** según las instrucciones del hosting
3. **Habilitar SSL/HTTPS** (gratis con Let's Encrypt en la mayoría de hostings)

### 4. SEO Básico

El sitio ya incluye:
- Meta description
- Títulos semánticos (H1, H2, H3)
- Estructura HTML semántica
- Alt text en imágenes

**Recomendaciones adicionales:**
- Agregar `sitemap.xml`
- Crear `robots.txt`
- Configurar Google Analytics
- Registrar en Google Search Console
- Agregar Open Graph tags para redes sociales

### 5. Rendimiento

**Verificaciones recomendadas:**
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

**Mejoras opcionales:**
- Lazy loading de imágenes (ya implementado)
- Preload de fuentes críticas
- Compresión Gzip/Brotli en el servidor
- CDN para assets estáticos

### 6. Seguridad

- ✅ HTTPS obligatorio
- ✅ Validar inputs si se agregan formularios
- ✅ Headers de seguridad (CSP, X-Frame-Options)
- ✅ Mantener dependencias actualizadas

## 📝 Personalización

### Cambiar Colores

Editar variables CSS en `styles.css`:
```css
:root {
    --color-primary: #1E3A8A;      /* Azul principal */
    --color-secondary: #FCD34D;    /* Amarillo */
}
```

### Agregar Más Proyectos

En `index.html`, sección `#proyectos`, agregar más `.project-card`:
```html
<div class="project-card">
    <div class="project-image">
        <img src="ruta/imagen.jpg" alt="Descripción">
    </div>
    <div class="project-info">
        <h3>Título del Proyecto</h3>
        <p>Descripción del proyecto</p>
    </div>
</div>
```

### Modificar Mensaje de WhatsApp

En `index.html`, buscar el enlace de WhatsApp y modificar el parámetro `text`:
```html
href="https://wa.me/573202467052?text=TU_MENSAJE_AQUI"
```

## 🔄 Actualizaciones Futuras Recomendadas

1. **Formulario de Contacto** - Además del WhatsApp
2. **Blog/Noticias** - Contenido SEO
3. **Testimonios** - Sección de clientes satisfechos
4. **Certificaciones** - Galería de certificados
5. **Mapa de Ubicación** - Google Maps integrado
6. **Multi-idioma** - Si se expande internacionalmente

## 📞 Soporte

Para modificaciones o actualizaciones del sitio, contactar al desarrollador o equipo técnico.

## 📄 Licencia

© 2025 JMBQ Construcciones S.A.S. Todos los derechos reservados.

---

**Desarrollado con ❤️ para JMBQ Construcciones S.A.S.**

