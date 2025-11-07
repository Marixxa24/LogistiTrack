import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Button,
  Paper,
  Chip,
  Divider,
} from "@mui/material";
import { ArrowBack, Edit, Delete } from "@mui/icons-material";
import OrdenForm from "../components/OrderForm.jsx";
import { useOrdenContext } from "../context/OrdenContext";
import * as ordenService from "../services/ordenService";

const OrdenDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { actualizarOrden, eliminarOrden } = useOrdenContext();
  const [orden, setOrden] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [success, setSuccess] = useState(false);

  const cargarOrden = async () => {
    try {
      setLoading(true);
      const data = await ordenService.obtenerOrdenPorId(id);
      setOrden(data);
    } catch (err) {
      setError("Error al cargar la orden");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarOrden();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleActualizar = async (formData) => {
    try {
      setError(null);
      await actualizarOrden(id, formData);
      setSuccess(true);
      setModoEdicion(false);
      cargarOrden();
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError("Error al actualizar la orden");
      console.error(err);
    }
  };

  const handleEliminar = async () => {
    if (window.confirm("¿Estás seguro de eliminar esta orden?")) {
      try {
        await eliminarOrden(id);
        navigate("/");
      } catch (err) {
        setError("Error al eliminar la orden");
        console.error(err);
      }
    }
  };

  const getEstadoColor = (estado) => {
    switch (estado) {
      case "Pendiente":
        return "warning";
      case "En tránsito":
        return "info";
      case "Entregado":
        return "success";
      default:
        return "default";
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          width: "100vw",
          height: "calc(100vh - 64px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #fff5f5 0%, #ffeaea 100%)",
        }}
      >
        <CircularProgress sx={{ color: "#CB041A" }} />
      </Box>
    );
  }

  if (error && !orden) {
    return (
      <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #fff5f5 0%, #ffeaea 100%)",
          py: 4,
        }}
      >
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        <Button
          variant="contained"
          startIcon={<ArrowBack />}
          onClick={() => navigate("/")}
          sx={{
            backgroundColor: "#CB041A",
            "&:hover": { backgroundColor: "#b71c1c" },
          }}
        >
          Volver al Inicio
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(135deg, #fff5f5 0%, #ffeaea 100%)",
        py: 4,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "#fff",
          borderRadius: 3,
          p: 4,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        {/* Encabezado */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate("/")}
            sx={{
              color: "#CB041A",
              fontWeight: 600,
              "&:hover": { backgroundColor: "rgba(203,4,26,0.1)" },
            }}
          >
            Volver
          </Button>

          {!modoEdicion && (
            <Box>
              <Button
                variant="outlined"
                startIcon={<Edit />}
                onClick={() => setModoEdicion(true)}
                sx={{
                  borderColor: "#CB041A",
                  color: "#CB041A",
                  mr: 1,
                  "&:hover": {
                    borderColor: "#b71c1c",
                    backgroundColor: "rgba(203,4,26,0.05)",
                  },
                }}
              >
                Editar
              </Button>
              <Button
                variant="contained"
                color="error"
                startIcon={<Delete />}
                onClick={handleEliminar}
                sx={{
                  backgroundColor: "#CB041A",
                  "&:hover": { backgroundColor: "#b71c1c" },
                }}
              >
                Eliminar
              </Button>
            </Box>
          )}
        </Box>

        {/* Alertas */}
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 3 }}>
            ✅ ¡Orden actualizada exitosamente!
          </Alert>
        )}

        {/* Contenido */}
        {modoEdicion ? (
          <>
            <OrdenForm
              ordenInicial={orden}
              onSubmit={handleActualizar}
              titulo="Editar Orden"
            />
            <Button
              variant="outlined"
              onClick={() => setModoEdicion(false)}
              sx={{
                mt: 2,
                borderColor: "#CB041A",
                color: "#CB041A",
                "&:hover": {
                  borderColor: "#b71c1c",
                  backgroundColor: "rgba(203,4,26,0.05)",
                },
              }}
              fullWidth
            >
              Cancelar
            </Button>
          </>
        ) : (
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#CB041A",
                  textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                Detalle de la Orden
              </Typography>
              <Chip
                label={orden.estado}
                color={getEstadoColor(orden.estado)}
                sx={{ fontWeight: 600 }}
              />
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Destino
              </Typography>
              <Typography variant="h6">{orden.destino}</Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Contenido
              </Typography>
              <Typography variant="body1">{orden.contenido}</Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Fecha de Creación
              </Typography>
              <Typography variant="body1">
                {new Date(orden.fecha_creacion).toLocaleString()}
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Contenido
              </Typography>
              <Typography variant="body1">{orden.contenido}</Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Costo Logístico
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  color: "#CB041A",
                }}
              >
                💰 ${orden.costo?.toLocaleString("es-AR") || "No especificado"}
              </Typography>
            </Box>
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default OrdenDetalle;
