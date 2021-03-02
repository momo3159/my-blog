import React, { FC } from 'react';
import { graphql } from 'gatsby';
import Header from '../pages/components/Organisms/Header';
import Footer from '../pages/components/Organisms/Footer';
import Article from '../pages/components/Organisms/Article';

type Tag = {
  tagName: string;
  slug: string;
};
type Post = {
  title: string;
  date: string;
  tags?: Tag[] | null;
  body: {body: string};
  slug: string
};

type Props = {
  data: {
    contentfulBlogPost: Post
  }
};

const Post: FC<Props> = ({ data }) => {
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
