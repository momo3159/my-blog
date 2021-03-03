import React, { FC } from 'react';
import styles from "./SiteLinks.module.css";
import SideBarHeading from '../Atoms/SideBarHeading';

const SiteLinks: FC = () => {
  const links = [
    {
      name: 'ポートフォリオ',
      url: 'https://momo3159.github.io/tommy-portfolio/',
    },
    { name: 'Twitter', url: 'https://twitter.com/Tomm7282/' },
    { name: 'GitHub', url: 'https://github.com/momo3159/' },
    { name: 'AtCoder', url: 'https://atcoder.com/tommy3/' },
  ];

  return (
    <>
      <SideBarHeading title="リンク" />
      {links.map((link) => (
        <a href={link.url} className={styles.link}>
          {link.name}
        </a>
      ))}
    </>
  );
};

export default SiteLinks;
