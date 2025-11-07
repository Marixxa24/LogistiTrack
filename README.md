# 🚛 LogistiTrack

Aplicación web desarrollada con **React** y **Material UI** para la gestión de órdenes de logística.  
Permite crear, editar, eliminar y filtrar órdenes en tiempo real, conectándose a una **API REST** construida en **Node.js + Express + MongoDB**.

![paginagit](https://github.com/user-attachments/assets/c0fb545a-78a9-41d7-847c-db00d9e71997)


## 🧭 Descripción General

**LogistiTrack** es una herramienta moderna que simplifica el seguimiento de envíos y entregas logísticas.  
La app se conecta directamente a una API real (sin datos locales ni mocks) para gestionar las órdenes de manera eficiente, clara y visual.

Incluye:
- 📋 Listado general de órdenes.
- 🔍 Filtro dinámico por estado (Pendiente, En tránsito, Entregado).
- 🧾 Detalle individual de cada orden.
- ✏️ Creación y edición mediante formularios.
- ❌ Eliminación con confirmación.
- 🔔 Notificaciones visuales y alertas de éxito/error.


## 🧠 Tecnologías Utilizadas

### Frontend
- ⚛️ **React 18**
- 🎨 **Material UI (MUI 5)** — interfaz moderna y responsive.
- 🧭 **React Router DOM 6** — navegación entre rutas.
- ⚙️ **Axios** — conexión con la API.
- 💾 **Context API + Custom Hooks** — manejo del estado global.

### Backend (API conectada)
- 🟩 **Node.js + Express**
- 🍃 **MongoDB (Atlas)**
- 🌐 **CORS, dotenv y Mongoose**


## 🧰 Instalación y Ejecución

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/marixxa24/LogistiTrack.git

