# 🚛 LogistiTrack

Aplicación web desarrollada con **React** y **Material UI** para la gestión de órdenes de logística.
Permite crear, editar, eliminar y filtrar órdenes en tiempo real, conectándose a una **API REST** construida con **Node.js + Express + MongoDB**.

<p align="center">
  <img src="https://github.com/user-attachments/assets/c0fb545a-78a9-41d7-847c-db00d9e71997" alt="Vista general de LogistiTrack" width="800"/>
</p>


## Descripción General

**LogistiTrack** es una herramienta moderna que simplifica el seguimiento de envíos y entregas logísticas.
La app se conecta directamente a una API real (sin datos locales ni mocks) para gestionar las órdenes de manera **eficiente, visual y clara**.

Incluye:

* 📋 Listado general de órdenes
* 🔍 Filtro dinámico por estado (Pendiente, En tránsito, Entregado)
* 🧾 Detalle individual de cada orden
* ✏️ Creación y edición mediante formularios
* ❌ Eliminación con confirmación
* 🔔 Notificaciones visuales y alertas de éxito/error
* 📱 Interfaz responsive y moderna


## Tecnologías Utilizadas

### Frontend

* ⚛️ **React 18**
* 🎨 **Material UI (MUI 5)** — interfaz moderna y adaptable
* 🧭 **React Router DOM 6** — navegación entre rutas
* ⚙️ **Axios** — conexión con la API
* 💾 **Context API + Custom Hooks** — manejo global del estado

###  Backend (API conectada)

* 🟩 **Node.js + Express**
* 🍃 **MongoDB (Atlas)**
* 🔒 **CORS, dotenv y Mongoose**


##  Instalación y Ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/Marixxa24/LogistiTrack.git
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Ejecutar el proyecto en modo desarrollo

```bash
npm run dev
```

###  Abrir en el navegador

 [http://localhost:5173](http://localhost:5173)



##  Estructura del Proyecto

```bash
front-logistica/
├── node_modules/ 
│
├── public/
│   ├── index.html
│   └── vite.svg
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md


<p align="center">
  <img src="https://github.com/user-attachments/assets/c0fb545a-78a9-41d7-847c-db00d9e71997" alt="Vista general de LogistiTrack" width="800"/>
</p>

>  *Interfaz principal mostrando el listado y filtrado de órdenes.*

##  Funcionalidades Principales

| Función                   | Descripción                                              |
| :------------------------ | :------------------------------------------------------- |
| 🆕 **Crear Orden**        | Permite agregar una nueva orden con datos personalizados |
| ✏️ **Editar Orden**       | Modifica información existente                           |
| ❌ **Eliminar Orden**      | Elimina una orden con confirmación previa                |
| 🔍 **Filtrar por Estado** | Filtra resultados según el estado de la entrega          |
| 📄 **Ver Detalle**        | Visualiza la información completa de una orden           |
| 🔔 **Alertas Visuales**   | Feedback inmediato en acciones de usuario                |

---

##  Próximas Mejoras

* 👤 Sistema de autenticación de usuarios (Login/Register)
* 📱 Mejora del diseño responsive en móviles
* 🚚 Seguimiento en tiempo real de envíos
* 📨 Notificaciones push con estados de entrega
* 🌍 Despliegue completo en Vercel + Render

---

##  Desarrollado por

**Marisa Soledad Chaile**
📧 [marisasolchaile@gmail.com](mailto:marisasolchaile@gmail.com)
💼 [LinkedIn](https://www.linkedin.com/in/marisa-chaile/)
💻 [GitHub](https://github.com/Marixxa24)

