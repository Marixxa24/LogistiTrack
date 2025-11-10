import { Container, Typography, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import OrdenForm from "../components/OrderForm";
import { useOrdenContext } from '../context/OrdenContext';

const CrearOrden = () => {
  const navigate = useNavigate();
  const { crearOrden } = useOrdenContext();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  //  Función para calcular costo según destino
const calcularCosto = (destino, peso = 1) => {
  if (!destino) return 2500;

  const destinoLower = destino.toLowerCase();
  let base = 2500;

  if (destinoLower.includes("buenos aires")) base = 5000;
  else if (destinoLower.includes("cordoba")) base = 4000;
  else if (destinoLower.includes("la rioja")) base = 3500;
  else if (destinoLower.includes("catamarca")) base = 3000;

  const costoPeso = parseFloat(peso) * 600; // 💰 600 por kg
  return base + costoPeso;
};


  const handleSubmit = async (formData) => {
  try {
    setError(null);

    // ✅ Validar y convertir el peso a número
    const pesoNum = parseFloat(formData.peso);
    if (isNaN(pesoNum) || pesoNum <= 0) {
      setError("El peso debe ser un número mayor que 0.");
      return;
    }

    // ✅ Calcular el costo con destino + peso
    const nuevaOrden = {
      ...formData,
      peso: pesoNum,
      costo: calcularCosto(formData.destino, pesoNum),
    };

    await crearOrden(nuevaOrden);
    setSuccess(true);

    setTimeout(() => navigate("/"), 1500);
  } catch (err) {
    setError("Error al crear la orden. Por favor, intente nuevamente.");
    console.error(err);
  }
};


  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        py: 4,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: '#fff',
          borderRadius: 2,
          p: 4,
          boxShadow: 3,
          width: '100%',
        }}
      >
        {/* Encabezado */}
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          gap={2}
          mb={4}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: 600, color: '#CB041A' }}
          >
            ✍🏻 Crear Nueva Orden
          </Typography>
        </Box>

        {/* Alertas */}
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 3 }}>
            ¡Orden creada exitosamente! Redirigiendo...
          </Alert>
        )}

        {/* Formulario */}
        <Box sx={{ mt: 3 }}>
          <OrdenForm onSubmit={handleSubmit} titulo="✏️" />
        </Box>
      </Container>
    </Box>
  );
};

export default CrearOrden;
