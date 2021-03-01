import React, { FC } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const NewArticles = () => (
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
    render={(data) =>
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
