# 📚 API RESTful - Biblioteca Digital

Este proyecto es una API RESTful desarrollada con **Node.js**, **Express**, **TypeScript**, **MongoDB** y estructurada con el patrón **MVC**, diseñada para gestionar una colección de libros.

---

## 🎯 Objetivo

Crear una API REST que permita realizar operaciones CRUD sobre una base de datos de libros.

---

## 🧱 Tecnologías Utilizadas

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB + Mongoose**
- **MVC (Modelo - Vista - Controlador)**
- **Git** para control de versiones

---

## 📦 Estructura del Proyecto

```
src/
├── config/            # Conexión a MongoDB
├── controllers/       # Lógica de negocio (CRUD)
├── interfaces/        # Tipado de TypeScript
├── models/            # Definición del modelo Book
├── routes/            # Definición de endpoints
├── utils/             # Funciones auxiliares (response handler, etc.)
├── index.ts           # Punto de entrada
```

---

## 📘 Modelo de Libro

```ts
{
  title: string;         // Requerido, único
  author: string;        // Requerido
  publishedYear?: number;
  genre?: string;
  available?: boolean;   // Por defecto: true
}
```

---

## 🔄 Endpoints

| Método | Ruta             | Descripción                   |
| ------ | ---------------- | ----------------------------- |
| GET    | `/api/books`     | Obtener todos los libros      |
| GET    | `/api/books/:id` | Obtener un libro por ID       |
| POST   | `/api/books`     | Crear un nuevo libro          |
| PATCH  | `/api/books/:id` | Actualizar un libro existente |
| DELETE | `/api/books/:id` | Eliminar un libro             |

---

## ⚙️ Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/biblioteca-api.git
cd biblioteca-api
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Como no se permite el uso de `.env`, debés pasar las variables de entorno al ejecutar el proyecto.

#### Ejemplo en Linux/macOS:

```bash
MONGO_URI="mongodb://localhost:27017/biblioteca" PORT=3000 npm run dev
```

#### Ejemplo en Windows (PowerShell):

```powershell
$env:MONGO_URI="mongodb://localhost:27017/biblioteca"; $env:PORT="3000"; npm run dev
```

### 4. Scripts útiles

Agregá esto al `package.json` si aún no está:

```json
"scripts": {
  "dev": "ts-node-dev src/index.ts"
}
```

---

## ✅ Requisitos Técnicos

- Uso de `async/await` para asincronía
- Manejo de errores con `try/catch`
- Respuestas estandarizadas (`{ success: boolean, data/message: ... }`)
- Organización según patrón MVC
- No usar dotenv

---

## 🧪 Ejemplos de Uso (con curl o Postman)

### Crear un libro

```bash
curl -X POST http://localhost:3000/api/books \
-H "Content-Type: application/json" \
-d '{"title":"1984","author":"George Orwell"}'
```

### Obtener todos los libros

```bash
curl http://localhost:3000/api/books
```

---

## 📌 Autor

- Nombre: _[Tu Nombre]_
- Curso: _[Nombre del curso o materia]_
- Año: 2025
