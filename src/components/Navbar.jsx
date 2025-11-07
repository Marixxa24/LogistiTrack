import { AppBar, Toolbar, Box, Button, IconButton } from '@mui/material';
import { Add, Home } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        width: '100%',
        margin: 0,
        background: '#CB041A',
        
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 2, sm: 4, md: 8 },
        }}
      >
        {/* LOGO */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="LogistiTrack Logo"
            sx={{
              width: { xs: '100%', sm: '250px', md: '300px', lg: '380px' },
              height: 'auto',
              objectFit: 'contain',
              marginTop:1,px:2,
              paddingBottom:1,
              
            }}
          />
        </Box>

        {/* BOTONES */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
          <Button
            component={Link}
            to="/"
            startIcon={<Home />}
            sx={{
              color: 'white',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: 'rgba(255,179,179,0.25)',
                color: '#ffb3b3',
              },
              '&:active': {
                backgroundColor: '#ffb3b3',
                color: '#b71c1c',
              },
            }}
          >
            Inicio
          </Button>

          <Button
            component={Link}
            to="/crear"
            startIcon={<Add />}
            sx={{
              color: 'white',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: 'rgba(255,179,179,0.25)',
                color: '#ffb3b3',
              },
              '&:active': {
                backgroundColor: '#ffb3b3',
                color: '#b71c1c',
              },
            }}
          >
            Nueva Orden
          </Button>
        </Box>

        {/* ICONOS MÓVILES */}
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, gap: 1, mt: 1 }}>
          <IconButton
            onClick={() => navigate('/')}
            sx={{
              color: '#ffffff',
              '&:hover': { backgroundColor: 'rgba(255,179,179,0.25)' },
              '&:active': { backgroundColor: '#ffb3b3' },
            }}
          >
            <Home />
          </IconButton>

          <IconButton
            onClick={() => navigate('/crear')}
            sx={{
              color: '#ffffff',
              '&:hover': { backgroundColor: 'rgba(255,179,179,0.25)' },
              '&:active': { backgroundColor: '#ffb3b3' },
            }}
          >
            <Add />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
