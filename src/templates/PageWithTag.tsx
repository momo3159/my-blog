import React, { FC } from 'react';
import { graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Header from '../pages/components/Organisms/Header';
import Footer from '../pages/components/Organisms/Footer';
import ArticleCard from '../pages/components/Organisms/ArticleCard';
import SideBar from '../pages/components/Organisms/SideBar';
import styles from './PageWithTag.module.css';
import parser from '../mdParser';
import Pagination from '../pages/components/Organisms/Pagination';

type Props = {
  data: QueryResult;
  pageContext: PageContext;
};

type PageContext = {
  tagName: string;
  skip: number;
  unit: number;
  totalTags: number;
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

const PageWithTag: FC<Props> = ({ data, pageContext }) => {
  const { nodes } = data.allContentfulBlogPost;
  const { tagName, skip, unit, totalTags } = pageContext;

  return (
    <>
      <Header />
      <h1 className={styles.tagHeading}>Tag: {tagName}</h1>
      <Grid
        container
        spacing={2}
        style={{ paddingBottom: '20vh', width: '100%' }}
      >
        <Grid container item justify="flex-end" xs={12} md={8}>
          <Grid item xs={12} md={8}>
            {nodes.map((node) => (
              <div className={styles.card} key={node.id}>
                <ArticleCard
                  title={node.title}
                  date={node.date}
                  body={parser(node.body.body)}
                  tags={node.tags}
                  slug={node.slug}
                />
              </div>
            ))}

            <Grid container item xs={12} justify="center">
              <Pagination
                currentIndex={Math.floor(skip / unit) + 1}
                totalPageNumber={Math.ceil(totalTags / 6)}
                slug={tagName}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={2} style={{ width: '80%' }}>
          <SideBar />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default PageWithTag;
export const query = graphql`
  query($tagName: String, $skip: Int, $unit: Int) {
    allContentfulBlogPost(
      filter: { tags: { elemMatch: { slug: { eq: $tagName } } } }
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
