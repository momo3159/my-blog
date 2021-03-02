import { Link } from 'gatsby';
import React, { FC } from 'react';
import '../../../styles/global.css';

const Header: FC = () => (
  <header className="bg-black">
    <Link to="/">
      <p className="text-white text-3xl p-4">Tommy&apos;s Blog</p>
    </Link>
  </header>
);

export default Header;
