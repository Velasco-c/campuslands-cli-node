# Campuslands CLI - Node.js

## Descripción del software

**Campuslands CLI** es una aplicación de línea de comandos desarrollada con **Node.js** y **JavaScript (ESM)** para gestionar información de campers mediante persistencia local en un archivo JSON.

El software permite:

* Registrar campers.
* Listar campers registrados.
* Buscar campers por nombre.
* Almacenar los datos de forma persistente en `data/campers.json`.
* Registrar campers mediante comandos de terminal.
* Registrar campers mediante una interfaz interactiva.

La aplicación utiliza módulos nativos de Node.js como `fs/promises`, `path`, `url` y `readline/promises`.

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/Velasco-c/campuslands-cli-node.git
```

### 2. Entrar al proyecto

```bash
cd campuslands-cli-node
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar la aplicación

Para utilizar la CLI:

```bash
node src/index.js
```

También puedes utilizar los scripts definidos en `package.json`:

```bash
npm start
```

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

## Uso

### Registrar un camper

```bash
node src/index.js agregar "Carlos" "JavaScript"
```

### Listar campers

```bash
node src/index.js listar
```

### Buscar un camper por nombre

```bash
node src/index.js buscar "Carlos"
```

### Registro interactivo

También puedes registrar un camper mediante preguntas desde la terminal:

```bash
node src/interactive.js
```

El programa solicitará:

```text
¿Nombre del camper?
¿Stack tecnológico?
```

Después de ingresar los datos, el camper será guardado automáticamente en `data/campers.json`.
