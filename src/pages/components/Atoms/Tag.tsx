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
    <button className="bg-black mx-1 rounded-full">
      <Link to={`/blog/${slug}/1`}>
        <span className="text-white p-2">{tagInfo}</span>
      </Link>
    </button>
  );
};

export default Tag;
