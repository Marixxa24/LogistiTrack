import { createContext, useContext } from 'react';
import { useOrdenes } from '../hooks/useOrdenes';

const OrdenContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useOrdenContext = () => {
  const context = useContext(OrdenContext);
  if (!context) {
    throw new Error('useOrdenContext debe usarse dentro de OrdenProvider');
  }
  return context;
};

export const OrdenProvider = ({ children }) => {
  const ordenesData = useOrdenes();

  return (
    <OrdenContext.Provider value={ordenesData}>
      {children}
    </OrdenContext.Provider>
  );
};