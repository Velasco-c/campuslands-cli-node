import {
  agregarCamper,
  buscarCampersPorNombre,
  listarCampers
} from "./campers.js";

const [, , comando, arg1, arg2] = process.argv;

try {

  switch (comando) {

    case 'agregar': {

      const c = await agregarCamper(arg1, arg2);

      console.log('Camper registrado:', c);

      break;
    }

    case 'listar': {

      const lista = await listarCampers();

      if (lista.length === 0) {

        console.log('No hay registros aún.');

      } else {

        console.log(lista);

      }

      break;
    }

    case 'buscar': {

      const resultados = await buscarCampersPorNombre(arg1);

      if (resultados.length === 0) {

        console.log('No se encontraron campers.');

      } else {

        console.log(resultados);

      }

      break;
    }

    default:

      console.log(
        'Uso: node src/index.js [listar | agregar | buscar]'
      );
  }

} catch (err) {

  console.error('Error:', err.message);

}
