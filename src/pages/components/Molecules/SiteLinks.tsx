import React, { FC } from 'react';

const SiteLinks: FC = () => {
  const links = [
    { name: 'ポートフォリオ', url: '' },
    { name: 'Twitter', url: 'https://twitter.com/Tomm7282' },
    { name: 'GitHub', url: 'https://github.com/momo3159' },
    { name: 'AtCoder', url: 'https://atcoder.com.tommy3' },
  ];

  return (
    <>
      {links.map((link) => (
        <a href={link.url}>{link.name}</a>
      ))}
    </>
  );
};

export default SiteLinks;
