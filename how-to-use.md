# Variables de entorno

Para producción usaremos el .env y para desarrollo .env.local que automáticamente se seleccionarán en función del comando que usemos
para iniciar el servidor.

# Estructura de Carpetas

- **src/**: Directorio principal para el código fuente de tu aplicación.

  - **controllers/**: Contiene los controladores que manejan las respuestas.
  - **services/**: Define la lógica que manejarán los controladores.
  - **models/**: Aquí se encuentran los modelos de datos y las interacciones con la base de datos.
  - **routes/**: Define las rutas de tu API y conecta las funciones de los controladores.
  - **middlewares/**: Almacena middleware personalizado (por ejemplo, autenticación, logging, etc.).
  - **utils/**: Utilidades y funciones auxiliares.
  - **app.js**: Archivo principal de la aplicación.
  - **index.js**: Inicializa el servidor y configura Express.

- **test/**: Carpeta para pruebas unitarias y de integración.
  - **controllers.test.js**: Pruebas para los controladores.
  - **router.test.js**: Pruebas para las rutas.

# Nombres de Funciones

- **Controladores**: Utiliza nombres descriptivos para las funciones que manejan las rutas. Por ejemplo:

  - `getUserById`
  - `createUser`
  - `updateUser`
  - `deleteUser`

- **Rutas**: Sigue una convención RESTful para las rutas. Por ejemplo:
  - `GET /users`
  - `POST /users`
  - `PUT /users/:id`
  - `DELETE /users/:id`

## API Documentation

Para enviar las respuestas se seguirá la siguiente estructura:

- **Endpoints con salida ok**:

```json
{
  result: 'ok',
  status: 200 | 201 | ...,
  message?: Short description,
  data?: {
    key: value
  }
}
```

- **Endpoints con salida error**:

```json
{
  result: 'error',
  status: 401 | 500 | ...,
  message: Short description,
  errors?: {
    key: value
  }
}
```
