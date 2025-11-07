import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { OrdenProvider } from './context/OrdenContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import CrearOrden from './pages/CrearOrden';
import OrdenDetalle from './pages/OrdenDetalle';
import './App.css'; 

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2', light: '#42a5f5', dark: '#1565c0' },
    secondary: { main: '#dc004e' },
    success: { main: '#2e7d32' },
    warning: { main: '#ed6c02' },
    info: { main: '#0288d1' },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: { fontWeight: 600 },
    h6: { fontWeight: 500 },
  },
  components: {
    MuiCard: { styleOverrides: { root: { borderRadius: 12 } } },
    MuiButton: { styleOverrides: { root: { textTransform: 'none', borderRadius: 8 } } },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <OrdenProvider>
        <Router>
          {/* Contenedor principal con fondo */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              width: '100vw',
              overflowX: 'hidden',
              backgroundColor: '#f9f9f9',
            }}
          >
            <Navbar />

            <Box
              component="main"
              sx={{
                flex: 1,
                pt: '64px', 
                px: { xs: 2, sm: 4, md: 6 },
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/crear" element={<CrearOrden />} />
                <Route path="/orden/:id" element={<OrdenDetalle />} />
              </Routes>
              <Footer />
            </Box>
          </Box>
        </Router>
      </OrdenProvider>
    </ThemeProvider>
  );
}

export default App;
