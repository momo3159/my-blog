import React, { FC } from 'react';
import { graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Header from '../pages/components/Organisms/Header';
import Footer from '../pages/components/Organisms/Footer';
import ArticleCard from '../pages/components/Organisms/ArticleCard';
import SideBar from '../pages/components/Organisms/SideBar';
import styles from './Page.module.css';
import parser from '../mdParser';
import Pagination from '../pages/components/Organisms/Pagination';

type Props = {
  data: QueryResult;
  pageContext: PageContext;
};

type PageContext = {
  skip: number;
  unit: number;
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

const Page: FC<Props> = ({ data, pageContext }) => {
  const { nodes, totalCount } = data.allContentfulBlogPost;
  const { skip, unit } = pageContext;
  console.log(totalCount);

  return (
    <>
      <Header />

      <Grid container spacing={2}>
        <Grid container item justify="flex-end" xs={12} md={8}>
          <Grid item xs={12} md={8}>
            {nodes.map((node) => (
              <div className={styles.card}>
                <ArticleCard
                  title={node.title}
                  date={node.date}
                  body={parser(node.body.body)}
                  tags={node.tags}
                  slug={node.slug}
                  key={node.id}
                />
              </div>
            ))}

            <Grid container item xs={12} justify="center">
              <Pagination
                currentIndex={Math.floor(skip / unit) + 1}
                totalPageNumber={totalCount}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={2}>
          <SideBar />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Page;
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
