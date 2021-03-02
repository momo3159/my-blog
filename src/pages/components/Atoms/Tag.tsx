import React, { FC } from 'react';
import { Link } from 'gatsby';

type Props = {
  tagName: string;
  totalCount?: number;
  slug: string;
};

const Tag: FC<Props> = (props) => {
  const { tagName, totalCount, slug } = props;
  let tagInfo: string;
  if (totalCount === undefined) tagInfo = `${tagName}`;
  else tagInfo = `${tagName}(${totalCount})`;

  return (
    <button>
      <Link to={`/blog/${slug}/1`}>
        <span>{tagInfo}</span>
      </Link>
    </button>
  );
};

export default Tag;
