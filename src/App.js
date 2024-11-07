import React from 'react';
import Navbar from './components/Navbar'; // assuming you separated Navbar as a component
import { Box } from '@mui/material';

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
    </Box>

  );
}

export default App;