import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme'; // path to the theme file
import Navbar from './components/Navbar'; // assuming you separated Navbar as a component

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {/* other components */}
    </ThemeProvider>
  );
}

export default App;