import React, { FC } from 'react';
import SiteLinks from '../Molecules/SiteLinks';
import NewArticles from '../Molecules/NewArticles';
import TagList from '../Molecules/TagList';
import styles from './SideBar.module.css';

const SideBar: FC = () => (
  <div className={styles.sidebar}>
    <TagList />
    <NewArticles />
    <SiteLinks />
  </div>
);

export default SideBar;
