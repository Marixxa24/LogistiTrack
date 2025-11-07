import { Box, Typography, Grid, Divider } from "@mui/material";
import OrdenCard from "./OrderCard";

const columnas = ["Pendiente", "En tránsito", "Entregado"];

const TableroOrdenes = ({ ordenes }) => {

  const ordenarPorEstado = (estado) =>
    ordenes.filter((orden) => orden.estado === estado);

  return (
    <Box px={{ xs: 1, sm: 2, md: 4 }} mt={2}>
      {columnas.map((estado) => {
        const filtradas = ordenarPorEstado(estado);

        return (
          <Box key={estado} mb={5}>
            {/* Título de categoría */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                textTransform: "uppercase",
                fontSize: { xs: "1rem", sm: "1.2rem" },
              }}
            >
              {estado === "Pendiente" && "📌 Pendientes"}
              {estado === "En tránsito" && "🚚 En tránsito"}
              {estado === "Entregado" && "✅ Entregadas"}
            </Typography>

            <Divider sx={{ mb: 2 }} />

            {/* Grid responsive */}
            <Grid container spacing={3}>
              {filtradas.length === 0 ? (
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", fontStyle: "italic", ml: 2 }}
                >
                  No hay órdenes en esta categoría...
                </Typography>
              ) : (
                filtradas.map((orden) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={orden._id}>
                    <OrdenCard orden={orden} />
                  </Grid>
                ))
              )}
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
};

export default TableroOrdenes;
