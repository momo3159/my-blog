import { Link } from 'gatsby';
import React, { FC } from 'react';
import '../../../styles/global.css';

const Header: FC = () => (
  <header>
    <Link to="/">
      <p>Tommy&apos;s Blog</p>
    </Link>
  </header>
);

export default Header;
