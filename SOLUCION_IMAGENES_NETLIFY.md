# Solución: Imágenes no cargan en Netlify

## Problema identificado
Las imágenes no se cargaban en Netlify debido a diferencias entre mayúsculas/minúsculas en las rutas de los archivos. Netlify es **case-sensitive** (sensible a mayúsculas y minúsculas), mientras que Windows no lo es.

## Cambios realizados

### 1. Corrección de rutas de imágenes
Se corrigieron todas las rutas de imágenes en los archivos HTML para que coincidan exactamente con los nombres reales de los archivos:

**Antes:**
- `./build/img/Logo FunRobHum.webp`
- `./build/img/Logos Colaboradores/Logo_ADM.webp`
- `./build/img/proyecto Ecoescuela/proyectoecoescuela-13.webp`
- `./build/img/Programa de alfabetizacion/programaDeAlfabetizacion-1.webp`

**Después:**
- `./build/img/logo funrobhum.webp`
- `./build/img/logos colaboradores/logo_adm.webp`
- `./build/img/proyecto ecoescuela/proyectoecoescuela-13.webp`
- `./build/img/programa de alfabetizacion/programadealfabetizacion-1.webp`

### 2. Archivos corregidos
- ✅ `index.html`
- ✅ `fundador.html`
- ✅ `vicefundador.html`
- ✅ `galeria.html`
- ✅ `nosotros.html`
- ✅ `proyectos.html`
- ✅ `ejes.html`
- ✅ `contactanos.html`
- ✅ `colaboradores.html`
- ✅ Todos los archivos en la carpeta `en/`

### 3. Archivo de configuración Netlify
Se creó el archivo `netlify.toml` con la configuración adecuada para el despliegue, incluyendo:
- Configuración de caché para archivos estáticos
- Headers optimizados para mejor rendimiento

## Verificación

### Archivos que necesitan verificación
Si encuentras que alguna imagen aún no carga, verifica:

1. **Nombre exacto del archivo** en `build/img/`
2. **Ruta en el HTML** debe coincidir exactamente (incluyendo mayúsculas/minúsculas y espacios)
3. **Espacios en nombres**: Los espacios deben estar presentes en la ruta si el archivo los tiene

### Nota importante sobre `logo_insaforp.webp`
Si el archivo `logo_insaforp.webp` no existe en `build/img/logos colaboradores/`, necesitarás:
- Agregar el archivo, o
- Eliminar la referencia en `colaboradores.html`

## Próximos pasos

1. **Subir los cambios a Netlify**
   - Haz commit de todos los cambios
   - Haz push a tu repositorio
   - Netlify debería desplegar automáticamente

2. **Verificar en producción**
   - Abre la consola del navegador (F12)
   - Revisa la pestaña "Network" para ver si hay errores 404 en las imágenes
   - Si hay errores, verifica que el nombre del archivo coincida exactamente

3. **Si aún hay problemas**
   - Verifica que todos los archivos de imagen estén en el repositorio
   - Asegúrate de que `.gitignore` no esté ignorando la carpeta `build/img/`

## Recomendaciones futuras

Para evitar este problema en el futuro:
1. **Usa nombres de archivos en minúsculas** sin espacios (ej: `logo-funrobhum.webp`)
2. **Usa guiones en lugar de espacios** (ej: `proyecto-ecoescuela` en lugar de `proyecto ecoescuela`)
3. **Mantén consistencia** en el uso de mayúsculas/minúsculas en todo el proyecto

