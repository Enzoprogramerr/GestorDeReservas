# GestorDeReservas

Aplicación CRUD para gestión de reservas de cabañas y clientes.
-README.md: explica qué hace la app, cómo instalarla y cómo correrla.
-.gitignore: excluí node_modules, .env, y otros archivos sensibles.
-Screenshots: podés subir imágenes de la app en acción para que se vea atractiva.

## Sistemas de módulos en JavaScript: CommonJS y ES Modules

En este proyecto utilizo dos sistemas de módulos de JavaScript: **CommonJS (CJS)** en el backend y **ES Modules (ESM)** en el frontend.

Ambos permiten organizar el código en diferentes archivos, importar funcionalidades y exportar funciones, objetos o clases para reutilizarlos en otras partes de la aplicación.

### 1. CommonJS (Backend)

CommonJS es el sistema de módulos tradicional de Node.js.

Utiliza `require()` para importar módulos y `module.exports` para exportar funcionalidades.

**Ejemplo de exportación:**

```js
const clienteController = {
  getAll,
  create,
};

module.exports = clienteController;
```

**Ejemplo de importación:**

```js
const clienteController = require("../controllers/clienteController");
```

### 2. ES Modules (Frontend)

ES Modules es el sistema de módulos estandarizado de JavaScript, utilizado habitualmente en aplicaciones modernas como React.

Utiliza `import` para importar y `export` para exportar funcionalidades.

Existen dos tipos principales de exportación:

**Exportación nombrada (Named Export):**

```js
export async function createClientes(nuevoCliente) {
  // Lógica de la petición al backend.
}
```

Para importarla:

```js
import { createClientes } from "./clienteService";
```

Las exportaciones nombradas requieren utilizar el nombre exacto de la funcionalidad exportada, entre llaves.

**Exportación por defecto (Default Export):**

```js
export default function App() {
  return <h1>Mi aplicación</h1>;
}
```

Para importarla:

```js
import App from "./App";
```

La exportación por defecto permite importar la funcionalidad sin utilizar llaves y asignarle un nombre diferente.

# Aplicación en este proyecto

En el backend utilizo CommonJS para organizar los módulos de Express, como controladores, rutas, servicios y modelos.

En el frontend utilizo ES Modules para importar y exportar componentes de React, servicios y otras funcionalidades.

Ambos sistemas cumplen el mismo objetivo general: **modularizar la aplicación, facilitar la reutilización del código y mantener una estructura organizada.**
