import React, { FC } from 'react';
import { graphql } from 'gatsby';
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

const Post = ({ data }) => {
  const { title, date, tags, body } = data.contentfulBlogPost;

  return (
    <>
      <Header />
      <Article title={title} date={date} tags={tags} body={body.body} />
      <Footer />
    </>
  );
};

export default Post;
export const query = graphql`
  query($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      body {
        body
      }
      title
      slug
      date
      tags {
        slug
        tagName
      }
    }
  }
`;
