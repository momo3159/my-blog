import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Header from './components/Organisms/Header';
import Footer from './components/Organisms/Footer';
import ArticleCard from './components/Organisms/ArticleCard';
import SideBar from './components/Organisms/SideBar';
import styles from './Index.module.css';
import parser from '../mdParser';
import Pagination from './components/Organisms/Pagination';

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

// markup
const IndexPage: React.FC<Props> = ({ data }) => {
  const { allContentfulBlogPost: result } = data;
  const unit = 6;
  const totalPage = Math.ceil(result.totalCount / unit);

  return (
    <>
      <Header />
      <Grid container spacing={2}style={{paddingBottom: "20vh", width: "100%"}}>
        <Grid container item justify="flex-end" xs={12} md={8}>
          <Grid item xs={12} md={8}>
            {result.nodes.map((node) => (
              <>
                <div className={styles.card}>
                  <ArticleCard
                    title={node?.title}
                    date={node?.date}
                    body={parser(node?.body?.body)}
                    tags={node?.tags}
                    slug={node?.slug}
                    key={node?.id}
                  />
                </div>
              </>
            ))}
            <Grid container item xs={12} justify="center">
              <Pagination currentIndex={1} totalPageNumber={totalPage} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={2} style={{width: "80%"}} >
          <SideBar />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default IndexPage;

export const topPageQuery = graphql`
  query {
    allContentfulBlogPost(sort: { order: DESC, fields: date }, limit: 6) {
      totalCount
      nodes {
        id
        body {
          body
        }
        date
        slug
        title
        tags {
          tagName
          slug
        }
      }
    }
  }
`;
