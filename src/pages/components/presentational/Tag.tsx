import React, { FC } from 'react';
import { Link } from 'gatsby';

type Props = {
  tagName: string;
  usageCount?: number;
};

const Tag: FC<Props> = (props) => {
  const { tagName, usageCount } = props;

  return typeof usageCount === 'number' ? (
    <div>{`${tagName}(${usageCount})`}</div>
  ) : (
    <div>{`${tagName}`}</div>
  );
};

export default Tag;
