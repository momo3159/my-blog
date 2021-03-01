import React, { FC } from 'react';
import SiteLinks from "./SiteLinks"
import NewArticles from "./NewArticles"
import TagList from './TagList';

const SideBar: FC = () => (
  <div>
    <TagList />
    <NewArticles />
    <SiteLinks />
  </div>
)

export default SideBar