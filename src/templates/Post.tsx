import React, { FC } from 'react';
import Header from '../pages/components/presentational/Header';
import Footer from '../pages/components/presentational/Footer';
import Article from '../pages/components/presentational/Article';

type Tag = {
  tagName: string;
  slug: string;
};
type Context = {
  title: string;
  date: Date;
  tags?: Tag[] | null;
  body: string;
};

type Props = {
  pageContext: Context;
};

const Post: FC<Props> = ({pageContext}) => {
  const { title, date, tags, body } = pageContext;

  return (
    <>
      <Header />
      <Article title={title} date={date} tags={tags} body={body} />
      <Footer />
    </>
  );
};

export default Post;
