import { useState } from 'react';
import {
  Typography,
  Grid,
  Box,
  CircularProgress,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Container
} from '@mui/material';
import { Refresh } from '@mui/icons-material';
import OrdenCard from '../components/OrderCard';
import { useOrdenContext } from '../context/OrdenContext';

const Home = () => {
  const { ordenes, loading, error, filtrarPorEstado, cargarOrdenes } = useOrdenContext();
  const [filtroEstado, setFiltroEstado] = useState('');

  const handleFiltroChange = (e) => {
    const nuevoEstado = e.target.value;
    setFiltroEstado(nuevoEstado);
    filtrarPorEstado(nuevoEstado);
  };

  const handleRefresh = () => {
    setFiltroEstado('');
    cargarOrdenes();
  };

  if (loading && ordenes.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 64px)',
          background: 'linear-gradient(135deg, #fff5f5 0%, #ffeaea 100%)'
        }}
      >
        <CircularProgress sx={{ color: '#CB041A' }} />
      </Box>
    );
  }

  return (
    <Box
      component="main"
      sx={{
        width: '100vw',
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        background: 'linear-gradient(135deg, #fff5f5 0%, #ffeaea 100%)',
        px: { xs: 2, sm: 4, md: 6 },
        py: 4,
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: '100%',
          maxWidth: '100vw',
          px: { xs: 2, sm: 4, md: 6, lg: 12 },
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
            sx={{
              fontWeight: 700,
              color: '#CB041A',
              textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            📦 Órdenes de LogistiTrack
          </Typography>

          <Button
            variant="contained"
            startIcon={<Refresh />}
            onClick={handleRefresh}
            sx={{
              backgroundColor: '#CB041A',
              '&:hover': { backgroundColor: '#b71c1c' },
              fontWeight: 600,
            }}
          >
            Actualizar
          </Button>
        </Box>

        {/* Error */}
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Filtro */}
        <Box sx={{ mb: 4 }}>
          <FormControl sx={{ minWidth: 250 }}>
            <InputLabel>Filtrar por Estado</InputLabel>
            <Select
              value={filtroEstado}
              label="Filtrar por Estado"
              onChange={handleFiltroChange}
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#CB041A',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#b71c1c',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#CB041A',
                },
              }}
            >
              <MenuItem value="">🔍 Todos</MenuItem>
              <MenuItem value="Pendiente">⏳ Pendiente</MenuItem>
              <MenuItem value="En tránsito">🚚 En tránsito</MenuItem>
              <MenuItem value="Entregado">✅ Entregado</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Listado o vacío */}
        {ordenes.length === 0 ? (
          <Alert
            severity="info"
            sx={{
              textAlign: 'center',
              py: 4,
              border: '1px solid #CB041A',
              color: '#b71c1c',
              backgroundColor: '#fff5f5',
              fontWeight: 500,
            }}
          >
            📭 No hay órdenes disponibles. ¡Crea tu primera orden con “Nueva Orden”! 🚀
          </Alert>
        ) : (
          <Grid container spacing={3}>
            {ordenes.map((orden) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={orden._id}>
                <OrdenCard orden={orden} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Home;
