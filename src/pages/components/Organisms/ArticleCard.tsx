import React, { FC } from 'react';
import Tag from '../Atoms/Tag';

type Tag = {
  tagName: string;
  slug: string;
};
export type Props = {
  title: string;
  date: string;
  tags?: Tag[] | null;
  body: string;
};

const Article: FC<Props> = (props) => {
  const { title, date, tags, body } = props;

  return (
    <div>
      <p className="text-gray-400">{date}</p>
      <h1>{title}</h1>
      {tags?.map((tag) => (
        <Tag tagName={tag.tagName} slug={tag.slug} key={tag.tagName} />
      ))}
      <main>{body}</main>
    </div>
  );
};

export default Article;
