import React, { FC } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

type QueryResult = {
  allContentfulBlogPost: { nodes: Node[] };
};

type Node = {
  id: string;
  slug: string;
  title: string;
};

const NewArticles: FC = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulBlogPost {
          nodes {
            id
            slug
            title
          }
        }
      }
    `}
    render={(data: QueryResult) =>
      data.allContentfulBlogPost.nodes.map((node) => (
        <>
          <Link to={`/blog/posts/${node.slug}/`} key={node.id}>
            {node.title}
          </Link>
          <br />
        </>
      ))
    }
  />
);

export default NewArticles;
