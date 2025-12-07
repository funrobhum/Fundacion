// Script para codificar automáticamente las URLs de imágenes con espacios
// Ejecutar este script antes de subir a Netlify

const fs = require('fs');
const path = require('path');

// Función para codificar espacios en URLs
function encodeSpacesInUrls(content) {
  // Reemplazar espacios en rutas de imágenes dentro de atributos src y href
  return content.replace(
    /(src|href)=["']([^"']*build\/img\/[^"']*)\s+([^"']*\.webp)["']/g,
    (match, attr, path, file) => {
      const fullPath = path + ' ' + file;
      const encoded = fullPath.replace(/\s/g, '%20');
      return `${attr}="${encoded}"`;
    }
  ).replace(
    /(src|href)=["']([^"']*build\/img\/[^"']*\s+[^"']*\.webp)["']/g,
    (match, attr, url) => {
      const encoded = url.replace(/\s/g, '%20');
      return `${attr}="${encoded}"`;
    }
  );
}

// Archivos HTML a procesar
const htmlFiles = [
  'index.html',
  'fundador.html',
  'vicefundador.html',
  'galeria.html',
  'nosotros.html',
  'proyectos.html',
  'ejes.html',
  'contactanos.html',
  'colaboradores.html',
  'en/index.html',
  'en/fundador.html',
  'en/vicefundador.html',
  'en/galeria.html',
  'en/nosotros.html',
  'en/proyectos.html',
  'en/ejes.html',
  'en/contactanos.html',
  'en/colaboradores.html'
];

htmlFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = encodeSpacesInUrls(content);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Procesado: ${file}`);
  } else {
    console.log(`✗ No encontrado: ${file}`);
  }
});

console.log('\n¡Proceso completado!');

