// validate.js
import fs from 'fs';

try {
  const code = fs.readFileSync('./src/images.js', 'utf8');
  new Function(code); // intenta compilar el código
  console.log("✅ Tu archivo images.js no tiene errores de sintaxis.");
} catch (err) {
  console.error("❌ Error de sintaxis en images.js:");
  console.error(err.message);
}e.error(err.message);
}