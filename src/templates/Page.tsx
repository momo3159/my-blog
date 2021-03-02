import React, { FC } from 'react';
import { graphql } from 'gatsby';
import Header from '../pages/components/Organisms/Header';
import Footer from '../pages/components/Organisms/Footer';
import Article from '../pages/components/Organisms/Article';

type Props = {
  data: QueryResult;
};
type QueryResult = {
  allContentfulBlogPost: {
    totalCount: number;
    nodes: Node[];
  };
};
type Node = {
  id: string;
  body: { body: string };
  date: string;
  slug: string;
  title: string;
  tags: Tag[] | null;
};

type Tag = {
  tagName: string;
  slug: string;
};

const Post: FC<Props> = ({ data }) => {
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
  query($skip: Int, $unit: Int) {
    allContentfulBlogPost(limit: $unit, skip: $skip) {
      nodes {
        id
        title
        tags {
          slug
          tagName
        }
        slug
        date
        body {
          body
        }
      }
    }
  }
`;
