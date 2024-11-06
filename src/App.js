// App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import NavBarTheme from './themes/theme'

function App() {
  return (
    <ThemeProvider theme={NavBarTheme}>
      <Navbar />
      {/* other components */}
    </ThemeProvider>
  );
}

export default App;
