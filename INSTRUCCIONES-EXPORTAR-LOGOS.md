# 📸 Instrucciones para Exportar los Logos como Imágenes

## 🎯 Logos Generados

He creado archivos HTML para las **Propuestas 1, 3 y 5** que puedes convertir a imágenes PNG con fondo transparente.

### Archivos Creados:
1. `PAGINA_WEB/LOGOS/logo-propuesta-1-horizontal.html` - Propuesta 1 (Moderno con Casco)
2. `PAGINA_WEB/LOGOS/logo-propuesta-3-vertical.html` - Propuesta 3 (Minimalista)
3. `PAGINA_WEB/LOGOS/logo-propuesta-5-monograma.html` - Propuesta 5 (Elegante Monograma)

---

## 📋 Método 1: Usando el Navegador (Más Fácil)

### Paso a Paso:

1. **Abrir el archivo HTML**
   - Abre cualquiera de los archivos HTML en tu navegador
   - Ejemplo: `logo-propuesta-1-horizontal.html`

2. **Capturar como imagen**
   - **Chrome/Edge:** Presiona `F12` → Click en el ícono de dispositivo móvil → Presiona `Ctrl+Shift+P` → Escribe "Capture screenshot" → Selecciona "Capture node screenshot"
   - **O usa una extensión:** "Full Page Screen Capture" o "Awesome Screenshot"

3. **Recortar el logo**
   - Usa cualquier editor de imágenes (Paint, GIMP, Photoshop)
   - Recorta solo el área del logo
   - Guarda como PNG con fondo transparente

---

## 📋 Método 2: Usando Herramientas Online

### Opción A: HTML to Image (Recomendado)

1. Ve a: https://htmlcsstoimage.com
2. Sube el archivo HTML o pega el código
3. Configura:
   - Ancho: 400px (o según necesites)
   - Alto: 150px (o según necesites)
   - Fondo: Transparente
4. Descarga como PNG

### Opción B: Screenshot.guru

1. Ve a: https://screenshot.guru
2. Sube el archivo HTML
3. Selecciona área del logo
4. Descarga como PNG

---

## 📋 Método 3: Usando Software

### Con GIMP (Gratis)

1. Abre el HTML en el navegador
2. Toma captura de pantalla (Win+Shift+S en Windows)
3. Abre GIMP
4. Archivo → Crear → Desde portapapeles
5. Herramientas → Herramientas de selección → Seleccionar por color
6. Selecciona el fondo blanco → Eliminar
7. Exportar como PNG

### Con Photoshop

1. Abre el HTML en el navegador
2. Captura de pantalla
3. Abre en Photoshop
4. Selecciona fondo → Eliminar
5. Guardar como PNG-24 con transparencia

---

## 📋 Método 4: Usando Node.js (Para Desarrolladores)

Si tienes Node.js instalado:

```bash
npm install -g html-to-image
```

Luego ejecuta:
```bash
html-to-image logo-propuesta-1-horizontal.html logo-propuesta-1.png
```

---

## 🎨 Especificaciones Recomendadas

### Para Web:
- **Formato:** PNG
- **Resolución:** 72 DPI
- **Fondo:** Transparente
- **Tamaño:** Según necesidad (mínimo 200px de ancho)

### Para Impresión:
- **Formato:** PNG o SVG
- **Resolución:** 300 DPI mínimo
- **Fondo:** Transparente
- **Tamaño:** Alto (mínimo 1000px de ancho)

---

## ✅ Verificación

Después de exportar, verifica que:
- ✅ El fondo sea transparente
- ✅ Los colores sean correctos (azul #1E3A8A, amarillo #FCD34D)
- ✅ El texto sea legible
- ✅ La imagen del casco se vea clara
- ✅ Funcione sobre fondos claros y oscuros

---

## 🔄 Variantes Recomendadas

Para cada logo, crea estas variantes:

1. **Versión completa** (con texto completo)
2. **Versión compacta** (solo ícono/monograma)
3. **Versión horizontal** (si aplica)
4. **Versión vertical** (si aplica)
5. **Versión en negativo** (para fondos oscuros)

---

## 📝 Notas

- Los archivos HTML usan la fuente Inter (Google Fonts)
- Las imágenes del casco deben estar en la misma carpeta
- Ajusta los tamaños según tus necesidades
- Los logos están optimizados para fondo transparente

---

**¿Necesitas ayuda con algún método específico?** Puedo guiarte paso a paso.

