import React, { FC } from 'react';
import SiteLinks from "../Molecules/SiteLinks"
import NewArticles from "../Molecules/NewArticles"
import TagList from '../Molecules/TagList';

const SideBar: FC = () => (
  <div>
    <TagList />
    <NewArticles />
    <SiteLinks />
  </div>
)

export default SideBar