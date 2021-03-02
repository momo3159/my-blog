import { Link } from 'gatsby';
import React, { FC } from 'react';
import AppBar from "@material-ui/core/AppBar"
import theme from "../../../styles/theme"
import {MuiThemeProvider} from '@material-ui/core/styles'

const Header: FC = () => (
  <MuiThemeProvider theme={theme} >
    <AppBar color="primary" position="fixed">
      <Link to="/" style={{color: "white"}}>
        <p>Tommy&apos;s Blog</p>
      </Link>
    </AppBar>
  </MuiThemeProvider>
  
);

export default Header;
