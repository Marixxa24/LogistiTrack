import { useState, useEffect } from 'react';
import * as ordenService from '../services/ordenService';

export const useOrdenes = () => {
  const [ordenes, setOrdenes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Cargar todas las órdenes
  const cargarOrdenes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ordenService.obtenerOrdenes();
      setOrdenes(data);
    } catch (err) {
      setError('Error al cargar las órdenes');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Filtrar por estado
  const filtrarPorEstado = async (estado) => {
    try {
      setLoading(true);
      setError(null);
      const data = estado 
        ? await ordenService.obtenerOrdenesPorEstado(estado)
        : await ordenService.obtenerOrdenes();
      setOrdenes(data);
    } catch (err) {
      setError('Error al filtrar órdenes');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Crear orden
  const crearOrden = async (ordenData) => {
    try {
      setLoading(true);
      setError(null);
      const nuevaOrden = await ordenService.crearOrden(ordenData);
      setOrdenes([...ordenes, nuevaOrden]);
      return nuevaOrden;
    } catch (err) {
      setError('Error al crear la orden');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Actualizar orden
  const actualizarOrden = async (id, ordenData) => {
    try {
      setLoading(true);
      setError(null);
      const ordenActualizada = await ordenService.actualizarOrden(id, ordenData);
      setOrdenes(ordenes.map(orden => 
        orden._id === id ? ordenActualizada : orden
      ));
      return ordenActualizada;
    } catch (err) {
      setError('Error al actualizar la orden');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Eliminar orden
  const eliminarOrden = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await ordenService.eliminarOrden(id);
      setOrdenes(ordenes.filter(orden => orden._id !== id));
    } catch (err) {
      setError('Error al eliminar la orden');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarOrdenes();
  }, []);

  return {
    ordenes,
    loading,
    error,
    cargarOrdenes,
    filtrarPorEstado,
    crearOrden,
    actualizarOrden,
    eliminarOrden
  };
};