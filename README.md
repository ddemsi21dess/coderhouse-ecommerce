# Ecommerce QB Store

Este proyecto ha sido inicializado con [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

En esta proyecto, se puede ejecutar:

### `npm start`

Ejecuta la app en entorno de Desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) en tu navegador local.

### `npm test`

Ejecuta el test runnet e interactúa escuchando las pruebas.\
Ver más información [running tests](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm run build`
Se hace el build de la aplicación para producción y se crea la carpeta `build`.


## Pre-requisitos
- `Visual Studio Code` (https://code.visualstudio.com/)
- `Node.js > 16` (https://nodejs.org/es/)

## Estructura de carpetas
- `EcommerceApp.jsx` Componente inicial de toda la apliación.

- `src/components` Esta carpeta contiene todos los componentes usados por la aplicación.

- `src/components/hooks` Esta carpeta contiene todos los custom hooks usados por la aplicación.

- `src/context` Esta carpeta contiene el cartContext que se utiliza para conocer el estado del carrito desde cualquier punto de la apliación.


- `src/data` Esta carpeta contiene información local de los productos y las categorías. En este momento estos datos son utilizados desde Firebase.

- `src/firebase` Esta carpeta contiene información el config.js que es la configuración de Firebase.

- `src/helpers` Esta carpeta contiene un helper llamado getCategoryId.js que devuelve el valor del categoryId utilizando data/menuItems.js

- `src/pages` Esta carpeta contiene las páginas de la aplcación: cart, category, detail and home.

- `src/router` Esta carpeta contiene los routes de toda la aplicación.

- `src/ui` Esta carpeta contiene los componentes relacionados al Navbar, Loaders y Cart

