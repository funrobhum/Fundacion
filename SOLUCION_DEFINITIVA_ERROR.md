# 🔧 Solución Definitiva: Error "Invalid filename" en Netlify

## 🔴 El Problema Persiste

Netlify sigue intentando subir `node_modules/` a pesar del `.netlifyignore`. Esto puede pasar cuando:
1. El archivo `.netlifyignore` no está en el ZIP
2. Netlify no respeta `.netlifyignore` cuando se sube directamente (sin Git)

## ✅ Solución: Crear Carpeta SIN node_modules

### Método 1: Copiar Solo Archivos Necesarios (RECOMENDADO)

1. **Crea una nueva carpeta temporal:**
   - Ve a `C:\Users\123\Desktop\`
   - Crea una nueva carpeta llamada `FUNDACION-NETLIFY`

2. **Copia SOLO estos archivos y carpetas:**
   ```
   FUNDACION-NETLIFY/
   ├── build/              ← Copia toda la carpeta
   ├── en/                 ← Copia toda la carpeta
   ├── json/               ← Copia toda la carpeta
   ├── index.html
   ├── fundador.html
   ├── vicefundador.html
   ├── galeria.html
   ├── nosotros.html
   ├── proyectos.html
   ├── ejes.html
   ├── contactanos.html
   ├── colaboradores.html
   ├── netlify.toml
   ├── .netlifyignore
   └── _redirects
   ```

3. **NO copies:**
   - ❌ `node_modules/`
   - ❌ `src/`
   - ❌ `package.json`
   - ❌ `package-lock.json`
   - ❌ `gulpfile.js`
   - ❌ Archivos `.md` (opcional)

4. **Crea el ZIP de esta nueva carpeta:**
   - Click derecho en `FUNDACION-NETLIFY`
   - "Enviar a" → "Carpeta comprimida (en zip)"

5. **Sube este ZIP a Netlify**

### Método 2: Eliminar node_modules Antes de Crear ZIP

1. **Elimina node_modules temporalmente:**
   - Ve a `C:\Users\123\Desktop\FUNDACION`
   - Elimina la carpeta `node_modules/` (o renómbrala a `node_modules-BACKUP`)
   - ⚠️ **NO la elimines permanentemente**, solo para crear el ZIP

2. **Crea el ZIP:**
   - Click derecho en `FUNDACION`
   - "Enviar a" → "Carpeta comprimida (en zip)"

3. **Sube el ZIP a Netlify**

4. **Restaura node_modules después:**
   - Si la renombraste, vuelve a renombrarla a `node_modules`
   - O reinstala con `npm install` si la eliminaste

### Método 3: Usar .gitignore (Si Netlify lo respeta)

Si Netlify está leyendo `.gitignore` en lugar de `.netlifyignore`, crea un `.gitignore`:

```gitignore
node_modules/
src/
*.log
.DS_Store
Thumbs.db
```

## 📋 Checklist Antes de Subir

- [ ] El ZIP NO contiene `node_modules/`
- [ ] El ZIP contiene `build/` con todas sus subcarpetas
- [ ] El ZIP contiene todos los archivos HTML
- [ ] El ZIP contiene `netlify.toml`
- [ ] El ZIP contiene `.netlifyignore`

## 🔍 Verificación del ZIP

Antes de subir, abre el ZIP y verifica:
1. ✅ NO debe haber carpeta `node_modules/`
2. ✅ DEBE haber carpeta `build/`
3. ✅ DEBE haber todos los archivos HTML
4. ✅ DEBE haber `netlify.toml`

## ⚠️ Nota Importante

Cuando subes archivos directamente a Netlify (sin Git), el comportamiento de `.netlifyignore` puede ser inconsistente. Por eso es mejor **no incluir `node_modules/` en el ZIP desde el principio**.

## ✅ Después del Despliegue Exitoso

Una vez que funcione:
- ✅ Las imágenes cargarán correctamente
- ✅ Los archivos JavaScript cargarán correctamente
- ✅ No habrá errores 404
- ✅ El sitio funcionará normalmente

**Recomendación:** Usa el **Método 1** (crear carpeta sin node_modules) para evitar cualquier problema.

