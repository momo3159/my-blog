import React, { FC } from 'react';

type Props = {
  tagName: string;
  usage: number;
};

const Tag: FC<Props> = (props) => {
  const { tagName, usage } = props;

  return <div>{`${tagName}（${usage}）`}</div>;
};

export default Tag;
