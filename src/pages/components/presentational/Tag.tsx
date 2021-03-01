import React, { FC } from 'react';
import { Link } from 'gatsby';

type Props = {
  tagName: string;
  totalCount?: number;
  slug: string;
};

const Tag: FC<Props> = (props) => {
  const { tagName, totalCount, slug } = props;

  if (typeof totalCount === 'number') {
    return (
      <Link to={`/blog/posts/${slug}/`}>
        <div>{`${tagName}(${totalCount})`}</div>
      </Link>
    );
  }

  return (
    <Link to={`/blog/posts/${slug}/`}>
      <div>{`${tagName}`}</div>
    </Link>
  );
};

export default Tag;
