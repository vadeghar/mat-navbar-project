// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',  // Replace with your primary color hex code
      light: '#757de8',  // Optional: lighter shade of primary color
      dark: '#002984',   // Optional: darker shade of primary color
    },
    secondary: {
      main: '#f50057',  // Replace with your secondary color hex code
      light: '#ff5983', // Optional: lighter shade of secondary color
      dark: '#bb002f',  // Optional: darker shade of secondary color
    },
  },
  typography: {
    fontFamily: `'Montserrat', 'sans-serif'`,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h6: {
      fontWeight: 700, // for logo text or header
      fontSize: '20px', // adjust as needed
    },
    button: {
      fontWeight: 600, // for buttons and menu items
      fontSize: '16px', // adjust as needed
      textTransform: 'none', // keep button text casing as provided
    },
  },
});

export default theme;
