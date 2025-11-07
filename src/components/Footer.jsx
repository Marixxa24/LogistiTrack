import { Box, Typography, Link, Stack } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        background: "#CB041A",
        color: "white",
        textAlign: "center",
        py: 2,
        mt: "auto",
        boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",

      }}
    >
      <Typography variant="body2" sx={{ mb: 0.5 }}>
        © {new Date().getFullYear()} <strong>LogistiTrack</strong> — Todos los derechos reservados.
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 1 }}>
        <Link
          href="https://github.com/Marixxa24"
          target="_blank"
          color="inherit"
          underline="hover"
        >
          <GitHub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/marisa-chaile/"
          target="_blank"
          color="inherit"
          underline="hover"
        >
          <LinkedIn />
        </Link>
        <Link
          href="mailto:marisasolchaile@gmail.com"
          color="inherit"
          underline="hover"
        >
          <Email />
        </Link>
      </Stack>

      <Typography variant="caption" sx={{ opacity: 0.9 }}>
        Desarrollado  por 🤍Marisa Chaile
      </Typography>
    </Box>
  );
};

export default Footer;
