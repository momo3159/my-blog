import React, { FC } from 'react';
import styles from "./Footer.module.css";
import theme from "../../../styles/theme"
import {MuiThemeProvider} from '@material-ui/core/styles'

const Footer: FC = () => (
  <footer className={styles.footer}>
    <p className={styles.p}>
      このサイトではアクセス解析のためにcookieを使用したGoogle
      Analyticsを使用しています<br/>
      @2021 Tommy All Rights Reserved.
    </p>
  </footer>
);

export default Footer;
