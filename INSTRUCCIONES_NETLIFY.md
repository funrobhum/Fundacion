# Instrucciones para subir a Netlify

## Problema resuelto: Espacios en nombres de archivos

Los espacios en los nombres de archivos y carpetas causaban que las imágenes no cargaran en Netlify. Se han codificado todas las URLs reemplazando espacios con `%20`.

## Cambios realizados

✅ Todas las rutas de imágenes ahora tienen espacios codificados como `%20`:
- `logo funrobhum.webp` → `logo%20funrobhum.webp`
- `logos colaboradores/` → `logos%20colaboradores/`
- `proyecto ecoescuela/` → `proyecto%20ecoescuela/`
- `programa de alfabetizacion/` → `programa%20de%20alfabetizacion/`
- `fundador 1.webp` → `fundador%201.webp`

✅ JavaScript actualizado para codificar automáticamente espacios en rutas dinámicas

## Cómo subir a Netlify

### Opción 1: Drag and Drop (Arrastrar y soltar)

1. Ve a [app.netlify.com](https://app.netlify.com)
2. Inicia sesión o crea una cuenta
3. En el dashboard, busca la sección "Sites"
4. Arrastra y suelta la **carpeta completa del proyecto** en el área de "Deploy"
5. Netlify procesará y desplegará automáticamente

### Opción 2: Netlify CLI

```bash
# Instalar Netlify CLI (si no lo tienes)
npm install -g netlify-cli

# Iniciar sesión
netlify login

# Desplegar
netlify deploy --prod
```

## Verificación después del despliegue

1. Abre tu sitio en Netlify
2. Abre la consola del navegador (F12)
3. Ve a la pestaña "Network"
4. Recarga la página
5. Verifica que todas las imágenes carguen sin errores 404

## Si aún hay problemas

### Verificar estructura de carpetas
Asegúrate de que la estructura sea:
```
tu-proyecto/
├── index.html
├── build/
│   ├── css/
│   ├── img/
│   │   ├── logo funrobhum.webp
│   │   ├── logos colaboradores/
│   │   ├── proyecto ecoescuela/
│   │   └── ...
│   └── js/
└── netlify.toml
```

### Verificar que netlify.toml esté en la raíz
El archivo `netlify.toml` debe estar en la raíz del proyecto, no dentro de ninguna carpeta.

### Verificar permisos
Asegúrate de que todos los archivos de imagen tengan permisos de lectura.

## Notas importantes

- **NO renombres los archivos físicos**: Los archivos pueden mantener sus espacios, solo las URLs en el HTML están codificadas
- **Los espacios en nombres de archivos funcionan**: Windows y macOS los manejan bien, solo necesitamos codificarlos en las URLs
- **Netlify es case-sensitive**: Asegúrate de que las mayúsculas/minúsculas coincidan exactamente

## Contacto

Si después de estos cambios las imágenes aún no cargan, verifica:
1. Que todos los archivos estén en el repositorio/carpeta que subes
2. Que la estructura de carpetas sea correcta
3. La consola del navegador para ver errores específicos

