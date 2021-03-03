import React, { FC } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import SideBarHeading from '../Atoms/SideBarHeading';
import styles from './NewArticles.module.css';

type QueryResult = {
  allContentfulBlogPost: { nodes: Node[] };
};

type Node = {
  id: string;
  slug: string;
  title: string;
  date: string;
};

const NewArticles: FC = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulBlogPost(sort: {order: DESC, fields: date}) {
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
        <SideBarHeading title="最新記事" />
        {data.allContentfulBlogPost.nodes.map((node) => {
          const ymd = new Date(node.date).toLocaleString().split(' ')[0];

          return (
            <>
              <Link
                to={`/blog/posts/${node.slug}/`}
                className={styles.link}
                key={node.id}
              >
                <time className={styles.date}>{ymd}</time>
                <br />
                <span>{node.title}</span>
              </Link>

              <hr />
            </>
          );
        })}
      </>
    )}
  />
);

export default NewArticles;
