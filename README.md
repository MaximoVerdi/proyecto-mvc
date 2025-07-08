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

src/
├── config/ # Conexión a MongoDB
├── controllers/ # Lógica de negocio (CRUD)
├── interfaces/ # Tipado de TypeScript
├── models/ # Definición del modelo Book
├── routes/ # Definición de endpoints
├── utils/ # Funciones auxiliares (response handler, etc.)
├── index.ts # Punto de entrada

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
