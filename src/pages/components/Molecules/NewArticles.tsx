import React, { FC } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styles from './NewArticles.module.css';

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
            date
          }
        }
      }
    `}
    render={(data: QueryResult) => (
      <>
        <h3>最新記事</h3>
        {data.allContentfulBlogPost.nodes.map((node) => (
          <>
            <Link
              to={`/blog/posts/${node.slug}/`}
              className={styles.link}
              key={node.id}
            >
              <time className={styles.date}>{node.date}</time>
              <br />
              <span>{node.title}</span>
            </Link>

            <hr />
          </>
        ))}
      </>
    )}
  />
);

export default NewArticles;
