import { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Paper,
  Typography,
} from '@mui/material';
import { Save } from '@mui/icons-material';

const OrdenForm = ({ ordenInicial, onSubmit, titulo = 'Nueva Orden' }) => {
  const [formData, setFormData] = useState({
    destino: '',
    contenido: '',
    peso: '',
    estado: 'Pendiente',
    costo: 0,
  });

  // Cálculo del costo logístico
  const calcularCosto = (destino, peso) => {
    const tarifas = {
      'Buenos Aires': 10000,
      'Catamarca': 8600,
      'Chaco': 8700,
      'Chubut': 9500,
      'Córdoba': 9000,
      'Corrientes': 8800,
      'Entre Ríos': 8900,
      'Formosa': 9000,
      'Jujuy': 9200,
      'La Pampa': 8800,
      'La Rioja': 8500,
      'Mendoza': 9400,
      'Misiones': 9700,
      'Neuquén': 9400,
      'Río Negro': 9300,
      'Salta': 9200,
      'San Juan': 9100,
      'San Luis': 9000,
      'Santa Cruz': 10200,
      'Santa Fe': 8800,
      'Santiago del Estero': 9100,
      'Tierra del Fuego': 11000,
      'Tucumán': 8700,
    };

    const destinoNormalizado =
      destino?.charAt(0).toUpperCase() + destino?.slice(1).toLowerCase();
    const base = tarifas[destinoNormalizado] || 10000;
    const pesoNum = parseFloat(peso) || 1;
    const costoPeso = pesoNum * 700; 

    return base + costoPeso;
  };

  useEffect(() => {
    if (ordenInicial) {
      setFormData({
        destino: ordenInicial.destino || '',
        contenido: ordenInicial.contenido || '',
        peso: ordenInicial.peso || '',
        estado: ordenInicial.estado || 'Pendiente',
        costo: ordenInicial.costo || 0,
      });
    }
  }, [ordenInicial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nuevoForm = { ...formData, [name]: value };

    // Recalcular costo dinámicamente cuando cambia destino o peso
    if (name === 'destino' || name === 'peso') {
      nuevoForm.costo = calcularCosto(nuevoForm.destino, nuevoForm.peso);
    }

    setFormData(nuevoForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Paper
      elevation={6}
      sx={{
        p: 4,
        borderRadius: 4,
        background: 'linear-gradient(145deg, #fff5f5, #ffeaea)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: 700,
          color: '#CB041A',
          textAlign: 'center',
          mb: 3,
        }}
      >
        {titulo}
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {/* Campo destino */}
        <TextField
          fullWidth
          label="Destino"
          name="destino"
          value={formData.destino}
          onChange={handleChange}
          required
          margin="normal"
          placeholder="Ej: Córdoba"
          InputLabelProps={{ style: { color: '#b71c1c', fontWeight: 500 } }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#CB041A' },
              '&:hover fieldset': { borderColor: '#b71c1c' },
              '&.Mui-focused fieldset': { borderColor: '#CB041A' },
            },
          }}
        />

        {/* Campo contenido */}
        <TextField
          fullWidth
          label="Contenido"
          name="contenido"
          value={formData.contenido}
          onChange={handleChange}
          required
          margin="normal"
          multiline
          rows={3}
          placeholder="Descripción del contenido"
          InputLabelProps={{ style: { color: '#b71c1c', fontWeight: 500 } }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#CB041A' },
              '&:hover fieldset': { borderColor: '#b71c1c' },
              '&.Mui-focused fieldset': { borderColor: '#CB041A' },
            },
          }}
        />

        {/* Campo peso */}
        <TextField
          fullWidth
          label="Peso (kg)"
          name="peso"
          type="number"
          value={formData.peso}
          onChange={handleChange}
          required
          margin="normal"
          placeholder="Ej: 3.5"
          InputLabelProps={{
            style: { color: '#b71c1c', fontWeight: 500 },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#CB041A' },
              '&:hover fieldset': { borderColor: '#b71c1c' },
              '&.Mui-focused fieldset': { borderColor: '#CB041A' },
            },
          }}
        />

        {/* Costo dinámico */}
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            color: '#b71c1c',
            textAlign: 'center',
            fontWeight: 600,
          }}
        >
           Costo estimado: ${formData.costo.toLocaleString('es-AR')}
        </Typography>

        {/* Estado */}
        <TextField
          fullWidth
          select
          label="Estado"
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          required
          margin="normal"
          InputLabelProps={{ style: { color: '#b71c1c', fontWeight: 500 } }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#CB041A' },
              '&:hover fieldset': { borderColor: '#b71c1c' },
              '&.Mui-focused fieldset': { borderColor: '#CB041A' },
            },
          }}
        >
          <MenuItem value="Pendiente">⏳ Pendiente</MenuItem>
          <MenuItem value="En tránsito">🚚 En tránsito</MenuItem>
          <MenuItem value="Entregado">✅ Entregado</MenuItem>
        </TextField>

        {/* Botón guardar */}
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<Save />}
          fullWidth
          sx={{
            mt: 3,
            backgroundColor: '#CB041A',
            fontWeight: 600,
            letterSpacing: 0.5,
            '&:hover': { backgroundColor: '#b71c1c' },
          }}
        >
          Guardar Orden
        </Button>
      </Box>
    </Paper>
  );
};

export default OrdenForm;
