import React from 'react';
import Navbar from './components/Navbar/Navbar'; // assuming you separated Navbar as a component
import { Box } from '@mui/material';
import Bestsellers from './components/Bestsellers/Bestsellers';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Carousels from './components/Carousels';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif', // Default font family
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Box
      sx={{
        minHeight: '100vh', // Make sure it covers full viewport height
        backgroundColor: '#faf2f5', // Replace with your color
      }}
    >
      <div>
        <Navbar />
      </div>
      <Box sx={{ mt: 1.5}}> {/* `mt` is shorthand for `marginTop` in Material UI */}
        {/* <Carousels /> */}
      </Box>
      <Box sx={{ mt: 1.5, width: '95%', mx: 'auto', display: 'flex', justifyContent: 'center' }}>
        <Bestsellers />
      </Box>

    </Box>
    </ThemeProvider>
  );
}

export default App;