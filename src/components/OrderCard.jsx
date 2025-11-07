import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";
import { Visibility, Delete, LocalShipping } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useOrdenContext } from "../context/OrdenContext";

const OrdenCard = ({ orden }) => {
  const navigate = useNavigate();
  const { eliminarOrden } = useOrdenContext();

  const handleEliminar = async () => {
    if (window.confirm("¿Estás seguro de eliminar esta orden?")) {
      try {
        await eliminarOrden(orden._id);
        alert("Orden eliminada exitosamente");
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        alert("Error al eliminar la orden");
      }
    }
  };

  const getChipStyle = (estado) => {
    switch (estado) {
      case "Pendiente":
        return {
          backgroundColor: "#FAA533",
          color: "#5D4037",
          fontWeight: 600,
        };
      case "En tránsito":
        return {
          backgroundColor: "#3fbd0eff",
          color: "#fff",
          fontWeight: 600,
        };
      case "Entregado":
        return {
          backgroundColor: "#2E7D32",
          color: "#fff",
          fontWeight: 600,
        };
      default:
        return {
          backgroundColor: "#E0E0E0",
          color: "#424242",
        };
    }
  };

  return (
    <Card
      sx={{
        height: 300,
        width: 280,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 3,
        boxShadow: 3,
        background: "linear-gradient(135deg, #fff, #fff5f5)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <LocalShipping
            fontSize="large"
            sx={{
              color: "#5c5c5c",
              transition: "color 0.3s ease",
              "&:hover": { color: "#CB041A" },
            }}
          />
          <Chip
            label={orden.estado}
            size="small"
            sx={{
              borderRadius: 2,
              px: 1.5,
              ...getChipStyle(orden.estado),
            }}
          />
        </Box>

        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: "#CB041A",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          {orden.destino}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            minHeight: 40,
          }}
        >
          {orden.contenido}
        </Typography>

        <Typography
          variant="caption"
          display="block"
          sx={{ mt: 2, color: "text.secondary" }}
        >
          📅 Creada:{" "}
          {new Date(orden.fecha_creacion).toLocaleDateString("es-AR")}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        <Button
          size="small"
          variant="outlined"
          startIcon={<Visibility />}
          onClick={() => navigate(`/orden/${orden._id}`)}
          sx={{
            borderColor: "#CB041A",
            color: "#CB041A",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "rgba(203,4,26,0.1)",
              borderColor: "#b71c1c",
            },
          }}
        >
          Ver Detalle
        </Button>
        <Button
          size="small"
          color="error"
          startIcon={<Delete />}
          onClick={handleEliminar}
          sx={{
            backgroundColor: "#CB041A",
            color: "#fff",
            "&:hover": { backgroundColor: "#b71c1c" },
          }}
        >
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
};

export default OrdenCard;
