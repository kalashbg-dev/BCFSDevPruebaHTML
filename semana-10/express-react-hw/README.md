
# Proyecto Monorepo: React y Express

Este es un proyecto monorepo que contiene un **frontend** construido con React y un **backend** construido con Express. La aplicación lista usuarios desde una API REST simple y los muestra en una tabla en el frontend.

## Estructura del Proyecto

```md
express-react-hw/
├── backend/     # Servidor Express (API REST)
├── frontend/    # Aplicación React (Frontend)
└── README.md    # Documento actual
```

## Requisitos

- **Node.js** v14 o superior
- **npm** o **yarn**

## Instrucciones de Instalación

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd express-react-hw
```

### 2. Configurar el Backend

1. Navega a la carpeta `backend`:

   ```bash
   cd backend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor:

   ```bash
   npm run dev
   ```

   El backend estará disponible en `http://localhost:5000`.

### 3. Configurar el Frontend

1. Navega a la carpeta `frontend`:

   ```bash
   cd ../frontend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia la aplicación React:

   ```bash
   npm start
   ```

   El frontend estará disponible en `http://localhost:3000`.

## Uso de la API

La API expone un único endpoint:

- `GET /api/usuarios`: Devuelve una lista de usuarios en formato JSON.

Puedes probar este endpoint usando herramientas como **Postman** o tu navegador web.

## Características

- **Frontend**: Aplicación React que muestra los usuarios obtenidos del backend en una tabla.
- **Backend**: Servidor Express con un endpoint API REST que devuelve una lista de usuarios.
- **CORS habilitado**: Permite la comunicación entre frontend y backend en diferentes dominios o puertos.

## Scripts Disponibles

### Backend (Express)

- `npm run dev`: Inicia el servidor en modo desarrollo con **nodemon**.
- `npm run start`: Inicia el servidor en modo producción.

### Frontend (React)

- `npm start`: Inicia la aplicación en modo desarrollo.
- `npm run build`: Genera una versión optimizada para producción.

## Licencia

Este proyecto no tiene una licencia específica asignada. Puedes agregar una según tus necesidades.

---
Aquí tienes una lista de todas las tecnologías utilizadas en este proyecto monorepo:

### 1. **Node.js**

- Entorno de ejecución para JavaScript en el backend.

### 2. **Express**

- Framework para construir APIs REST en el backend.

### 3. **React**

- Biblioteca de JavaScript para construir interfaces de usuario en el frontend.

### 4. **TypeScript**

- Superset de JavaScript que añade tipado estático tanto en el frontend como en el backend.

### 6. **Fetch**

- API nativa de JavaScript para realizar solicitudes HTTP en el frontend.

### 7. **CORS**

- Middleware utilizado en el backend para permitir la comunicación entre el frontend y el backend en diferentes dominios o puertos.

### 8. **Nodemon**

- Herramienta para reiniciar automáticamente el servidor backend durante el desarrollo cuando hay cambios en el código.

### 9. **ts-node**

- Herramienta para ejecutar código TypeScript directamente sin necesidad de compilarlo primero a JavaScript.

### 10. **CSS**

- Utilizado para estilizar la interfaz de usuario en el frontend.

### 11. **Postman** (opcional)

- Herramienta para probar las solicitudes HTTP hacia la API del backend.

### 12. **npm** o **yarn**

- Gestores de paquetes para instalar y manejar dependencias en el proyecto tanto en el frontend como en el backend.
