import React, { FC } from 'react';
import styles from "./Footer.module.css";


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
