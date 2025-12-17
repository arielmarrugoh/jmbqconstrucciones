# 🚀 Guía Paso a Paso: Desplegar tu Sitio Web Públicamente

Esta guía te mostrará cómo publicar tu sitio web de **JMBQ Construcciones S.A.S.** para que puedas compartirlo con clientes, similar a como está el ejemplo en GitHub Pages.

---

## 📋 Opción 1: GitHub Pages (GRATIS - Similar al ejemplo)

### Ventajas:
- ✅ Completamente gratis
- ✅ URL personalizada: `tuusuario.github.io/jmbqconstrucciones`
- ✅ SSL/HTTPS automático
- ✅ Fácil de actualizar
- ✅ Sin límites de ancho de banda

### Paso a Paso:

#### 1. Crear cuenta en GitHub (si no tienes)
1. Ve a: https://github.com
2. Haz clic en **"Sign up"**
3. Completa el registro (es gratis)

#### 2. Crear un nuevo repositorio
1. Una vez dentro de GitHub, haz clic en el botón **"+"** (arriba derecha)
2. Selecciona **"New repository"**
3. Completa:
   - **Repository name:** `jmbqconstrucciones` (o el nombre que prefieras)
   - **Description:** "Sitio web empresarial JMBQ Construcciones S.A.S."
   - **Visibilidad:** Selecciona **"Public"** (necesario para GitHub Pages gratis)
   - **NO marques** "Initialize this repository with a README"
4. Haz clic en **"Create repository"**

#### 3. Subir tus archivos al repositorio

**Opción A: Desde la línea de comandos (Recomendado)**

Abre PowerShell o CMD en la carpeta de tu proyecto y ejecuta:

```bash
# Inicializar Git (si no lo has hecho)
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Primera versión del sitio web JMBQ Construcciones"

# Conectar con tu repositorio de GitHub (reemplaza TU_USUARIO con tu usuario)
git remote add origin https://github.com/TU_USUARIO/jmbqconstrucciones.git

# Subir los archivos
git branch -M main
git push -u origin main
```

**Opción B: Desde la interfaz web de GitHub**

1. En la página de tu nuevo repositorio, verás instrucciones
2. Haz clic en **"uploading an existing file"**
3. Arrastra y suelta estos archivos:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - Toda la carpeta `PAGINA_WEB/` (con logos y fotos)
4. Haz clic en **"Commit changes"**

#### 4. Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"** (Configuración)
3. En el menú lateral izquierdo, busca **"Pages"**
4. En **"Source"**, selecciona **"Deploy from a branch"**
5. Selecciona la rama **"main"** y la carpeta **"/ (root)"**
6. Haz clic en **"Save"**
7. Espera 1-2 minutos

#### 5. ¡Tu sitio está en línea!

Tu sitio estará disponible en:
```
https://TU_USUARIO.github.io/jmbqconstrucciones/
```

**Ejemplo:** Si tu usuario es `jmbq2025`, tu URL será:
```
https://jmbq2025.github.io/jmbqconstrucciones/
```

---

## 📋 Opción 2: Netlify (GRATIS - Más Fácil)

### Ventajas:
- ✅ Más fácil que GitHub Pages
- ✅ URL personalizada: `jmbqconstrucciones.netlify.app`
- ✅ Arrastra y suelta archivos (sin Git)
- ✅ SSL automático
- ✅ Dominio personalizado gratis

### Paso a Paso:

#### 1. Crear cuenta en Netlify
1. Ve a: https://www.netlify.com
2. Haz clic en **"Sign up"** (puedes usar GitHub, Google o email)
3. Completa el registro

#### 2. Desplegar tu sitio
1. Una vez dentro, verás un área que dice **"Want to deploy a new site without connecting to Git?"**
2. Arrastra y suelta tu carpeta completa del proyecto (o arrastra los archivos)
3. Netlify automáticamente detectará `index.html` y desplegará tu sitio
4. En 30 segundos tendrás tu URL: `https://random-name-12345.netlify.app`

#### 3. Personalizar la URL
1. Ve a **"Site settings"**
2. Haz clic en **"Change site name"**
3. Cambia a: `jmbqconstrucciones` (o el nombre que prefieras)
4. Tu nueva URL será: `https://jmbqconstrucciones.netlify.app`

---

## 📋 Opción 3: Vercel (GRATIS - Muy Rápido)

### Ventajas:
- ✅ Muy rápido
- ✅ URL: `jmbqconstrucciones.vercel.app`
- ✅ Excelente rendimiento
- ✅ SSL automático

### Paso a Paso:

#### 1. Crear cuenta
1. Ve a: https://vercel.com
2. Haz clic en **"Sign Up"** (puedes usar GitHub)
3. Completa el registro

#### 2. Desplegar
1. Haz clic en **"Add New..."** → **"Project"**
2. Si conectaste GitHub, selecciona tu repositorio
3. O arrastra tu carpeta directamente
4. Haz clic en **"Deploy"**
5. En segundos tendrás tu URL

---

## 🎯 Recomendación

**Para tu caso, recomiendo GitHub Pages** porque:
- Es exactamente como el ejemplo que compartiste
- URL más profesional
- Control total sobre tu código
- Gratis para siempre

---

## 📝 Checklist Antes de Desplegar

Antes de compartir tu sitio, verifica:

- [ ] Todas las imágenes cargan correctamente
- [ ] El botón de WhatsApp funciona (número correcto)
- [ ] El menú de navegación funciona
- [ ] El sitio se ve bien en móvil
- [ ] Todos los textos están correctos
- [ ] Los enlaces funcionan

---

## 🔄 Actualizar tu Sitio (Después del Despliegue)

### Si usas GitHub Pages:

```bash
# Hacer cambios en tus archivos
# Luego ejecuta:
git add .
git commit -m "Descripción de los cambios"
git push
```

Los cambios se reflejarán en 1-2 minutos automáticamente.

### Si usas Netlify/Vercel:

Solo arrastra los archivos actualizados nuevamente, o conecta con Git para actualizaciones automáticas.

---

## 🌐 Agregar un Dominio Personalizado (Opcional)

Si quieres una URL como `www.jmbqconstrucciones.com`:

1. **Comprar dominio:** En Namecheap, GoDaddy, o Google Domains (~$10-15/año)
2. **Configurar DNS:** Seguir instrucciones de tu plataforma (GitHub/Netlify/Vercel)
3. **Esperar propagación:** 24-48 horas

---

## ❓ Problemas Comunes

### Las imágenes no cargan
- Verifica que las rutas en `index.html` sean correctas
- Asegúrate de que la carpeta `PAGINA_WEB/` esté incluida

### El sitio no se actualiza
- Limpia la caché del navegador (Ctrl + Shift + R)
- Espera 2-3 minutos para que se propague

### Error 404
- Verifica que `index.html` esté en la raíz del repositorio
- Asegúrate de que GitHub Pages esté activado

---

## 📞 Siguiente Paso

Una vez que tengas tu URL pública, puedes:
1. Compartirla con clientes
2. Agregarla a tarjetas de presentación
3. Incluirla en correos de firma
4. Compartirla en redes sociales

**¿Necesitas ayuda con algún paso específico?** ¡Dime cuál opción prefieres y te guío paso a paso!

