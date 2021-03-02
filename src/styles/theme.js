import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#bdbdbd',
      main: '#212121',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#673ab7',
      main: '#9a67ea',
      dark: '#320b86',
      contrastText: '#3f0093',
    },
  },
});

export default theme