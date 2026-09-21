import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RUTA_DATA = path.join(__dirname, '..', 'data', 'campers.json');

export async function leerCampers() {

  try {

    const contenido = await fs.readFile(RUTA_DATA, 'utf-8');

    return JSON.parse(contenido);

  } catch (error) {

    if (error.code === 'ENOENT') {

      return [];

    }

    throw error;

  }

}

export async function guardarCampers(lista) {

  await fs.writeFile(
    RUTA_DATA,
    JSON.stringify(lista, null, 2),
    'utf-8'
  );

}

export async function agregarCamper(nombre, stack) {

  nombre = nombre?.trim();
  stack = stack?.trim();

  if (!nombre || !stack) {

    throw new Error('Debes ingresar nombre y stack');

  }

  const campers = await leerCampers();

  const nuevoCamper = {

    id: campers.length > 0
      ? campers[campers.length - 1].id + 1
      : 1,

    nombre,
    stack,

    creadoEn: new Date().toLocaleDateString()

  };

  campers.push(nuevoCamper);

  await guardarCampers(campers);

  return nuevoCamper;

}

export async function listarCampers() {

  return await leerCampers();

}

export async function buscarCampersPorNombre(termino) {

  const campers = await leerCampers();

  return campers.filter(c =>
    c.nombre.toLowerCase().includes(termino.toLowerCase())
  );

}
