import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: 'e0e0e0',
      main: '#212121',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#7b4cff',
      main: '#361AE0',
      dark: '#0000ad',
      contrastText: '#ffffff',
    },
  },
});

export default theme