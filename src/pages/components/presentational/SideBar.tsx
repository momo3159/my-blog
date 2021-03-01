import React, { FC } from 'react';
import SiteLinks from "./SiteLinks"
import NewArticles from "./NewArticles"

const SideBar: FC = () => (
  <div>
    <NewArticles />
    <SiteLinks />
  </div>
)