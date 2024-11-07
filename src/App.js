import React from 'react';
import Navbar from './components/Navbar'; // assuming you separated Navbar as a component
import Carousels from './components/Carousels';
import { Box } from '@mui/material';
import Bestsellers from './components/Bestsellers';

function App() {
  return (
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
        <Carousels />
      </Box>
      <Box sx={{ mt: 1.5, width: '95%', mx: 'auto', display: 'flex', justifyContent: 'center' }}>
        <Bestsellers />
      </Box>

    </Box>

  );
}

export default App;