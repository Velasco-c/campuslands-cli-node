import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { agregarCamper } from './campers.js';

const rl = readline.createInterface({ input, output });

try {

  console.log('=== REGISTRO INTERACTIVO DE CAMPERS ===');

  const nombre = await rl.question('¿Nombre del camper? ');

  const stack = await rl.question('¿Stack tecnológico? ');

  const guardado = await agregarCamper(nombre, stack);

  console.log('🎉 Camper registrado:', guardado);

} finally {

  rl.close();

}
