import { Link } from 'gatsby';
import React, { FC } from 'react';
import styles from "./Header.module.css"

const Header: FC = () => (
  <header className={styles.header}>
    <Link to="/" style={{ color: 'white' }}>
      <p className={styles.p}>Tommy&apos;s Blog</p>
    </Link>
  </header>
);

export default Header;
