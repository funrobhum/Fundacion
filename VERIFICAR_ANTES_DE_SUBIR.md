# ✅ Lista de Verificación ANTES de Subir a Netlify

## ⚠️ IMPORTANTE: Debes subir TODA la carpeta del proyecto

Cuando arrastres y sueltes en Netlify, asegúrate de incluir:

### ✅ Carpetas que DEBEN estar incluidas:

1. **`build/`** - ⚠️ **CRÍTICO** - Contiene todas las imágenes y archivos CSS/JS
   - `build/css/` - Estilos
   - `build/img/` - Todas las imágenes
   - `build/js/` - JavaScript

2. **`en/`** - Páginas en inglés

3. **`json/`** - Archivos JSON para la galería

4. **Todos los archivos HTML** en la raíz:
   - `index.html`
   - `fundador.html`
   - `galeria.html`
   - `nosotros.html`
   - `proyectos.html`
   - `ejes.html`
   - `contactanos.html`
   - `colaboradores.html`
   - `vicefundador.html`

5. **`netlify.toml`** - Configuración de Netlify

### ❌ Carpetas que NO son necesarias (pero no causan problemas si se suben):

- `node_modules/` - No es necesario
- `src/` - Solo para desarrollo
- Archivos `.md` - Solo documentación

## 📋 Pasos para Subir Correctamente:

### Opción 1: Arrastrar Carpeta Completa (RECOMENDADO)

1. Abre el Explorador de Archivos de Windows
2. Ve a `C:\Users\123\Desktop\FUNDACION`
3. **Selecciona TODA la carpeta FUNDACION** (click derecho → Copiar)
4. Ve a [app.netlify.com](https://app.netlify.com)
5. En el área de "Deploy", arrastra y suelta la **carpeta completa FUNDACION**
6. Espera a que termine el despliegue

### Opción 2: Crear un ZIP

1. Click derecho en la carpeta `FUNDACION`
2. Selecciona "Enviar a" → "Carpeta comprimida (en zip)"
3. Sube el archivo ZIP a Netlify
4. Netlify lo descomprimirá automáticamente

## 🔍 Verificación Después del Despliegue:

1. Abre tu sitio en Netlify
2. Presiona F12 para abrir la consola
3. Ve a la pestaña "Network"
4. Recarga la página
5. Verifica que NO haya errores 404 para:
   - ✅ `build/js/app.js`
   - ✅ `build/js/bootstrap.bundle.min.js`
   - ✅ `build/js/donaciones.js`
   - ✅ `build/css/app.css`
   - ✅ `build/img/logo%20funrobhum.webp`
   - ✅ Todas las demás imágenes

## ⚠️ Si AÚN hay errores 404:

1. **Verifica la estructura en Netlify:**
   - Ve a "Site settings" → "Build & deploy"
   - Verifica que "Publish directory" esté en `.` (punto)
   - O verifica que la carpeta `build/` esté visible en el explorador de archivos de Netlify

2. **Verifica que los archivos se subieron:**
   - En Netlify, ve a "Deploys"
   - Click en el deploy más reciente
   - Verifica que veas la carpeta `build/` con sus subcarpetas

3. **Si la carpeta build/ no aparece:**
   - Vuelve a subir, asegurándote de incluir TODA la carpeta
   - O crea un ZIP y súbelo

## 📝 Nota sobre PayPal SDK:

El error 400 de PayPal es normal porque aún tienes el placeholder `TU_CLIENT_ID_PAYPAL_AQUI`. 
Esto NO afecta las imágenes. Puedes ignorarlo por ahora o configurar PayPal más tarde.

