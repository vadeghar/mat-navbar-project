// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
