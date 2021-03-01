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
  const { nodes } = data.allContentfulBlogPost;

  return (
    <>
      <Header />
      {nodes.map((node) => (
        <Article
          title={node.title}
          date={node.date}
          tags={node.tags}
          body={node.body.body}
          key={node.id}
        />
      ))}
      <Footer />
    </>
  );
};

export default Post;
export const query = graphql`
  query($tag: String, $skip: Int, $unit: Int) {
    allContentfulBlogPost(
      filter: { tags: { elemMatch: { slug: { eq: $tag } } } }
      limit: $unit
      skip: $skip
    ) {
      nodes {
        body {
          body
        }
        date
        slug
        tags {
          tagName
          slug
        }
        title
      }
    }
  }
`;
