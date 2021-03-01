import React, { FC } from 'react';

type Props = {
  tagName: string;
  usageCount?: number;
};

const Tag: FC<Props> = (props) => {
  const { tagName, usageCount } = props;

  return usageCount ? (
    <div>{`${tagName}`}</div>
  ) : (
    <div>{`${tagName}(${usageCount})`}</div>
  );
};

export default Tag;
