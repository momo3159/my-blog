import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Header from './components/presentational/Header';
import Footer from './components/presentational/Footer';
import Article from './components/presentational/Article';
import SideBar from './components/presentational/SideBar';

// markup
const IndexPage = ({ data }) => (
  <>
    <Header />
    {data?.allContentfulBlogPost.nodes.map((node) => (
      <Article
        title={node.title}
        date={node.date}
        body={node.body.body}
        tags={node.tags}
        key={node.id}
      />
    ))}
    <Footer />
    <SideBar />
    <Link to={"/blog/typescript/1"}>waiwai</Link>
  </>
);

export default IndexPage;

export const topPageQuery = graphql`
  query {
    allContentfulBlogPost(limit: 6) {
      totalCount
      nodes {
        id
        body {
          id
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
