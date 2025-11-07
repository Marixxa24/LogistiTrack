import axios from 'axios';

const API_URL = 'https://api-logistica-chi.vercel.app/api/ordenes';

// Obtener todas las órdenes
export const obtenerOrdenes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Obtener órdenes filtradas por estado
export const obtenerOrdenesPorEstado = async (estado) => {
  const response = await axios.get(`${API_URL}?estado=${estado}`);
  return response.data;
};

// Obtener una orden por ID
export const obtenerOrdenPorId = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Crear nueva orden
export const crearOrden = async (ordenData) => {
  const response = await axios.post(API_URL, ordenData);
  return response.data;
};

// Actualizar orden
export const actualizarOrden = async (id, ordenData) => {
  const response = await axios.put(`${API_URL}/${id}`, ordenData);
  return response.data;
};

// Eliminar orden
export const eliminarOrden = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};