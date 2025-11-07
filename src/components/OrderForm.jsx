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
    estado: 'Pendiente',
  });

  useEffect(() => {
    if (ordenInicial) {
      setFormData({
        destino: ordenInicial.destino || '',
        contenido: ordenInicial.contenido || '',
        estado: ordenInicial.estado || 'Pendiente',
      });
    }
  }, [ordenInicial]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        <TextField
          fullWidth
          label="Destino"
          name="destino"
          value={formData.destino}
          onChange={handleChange}
          required
          margin="normal"
          placeholder="Ej: Av. Corrientes 1234, CABA"
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
          placeholder="Descripción del contenido de la orden"
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

        <TextField
          fullWidth
          select
          label="Estado"
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          required
          margin="normal"
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
        >
          <MenuItem value="Pendiente">⏳ Pendiente</MenuItem>
          <MenuItem value="En tránsito">🚚 En tránsito</MenuItem>
          <MenuItem value="Entregado">✅ Entregado</MenuItem>
        </TextField>

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
