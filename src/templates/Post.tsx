import React, { FC } from 'react';
import { graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import SideBar from '../pages/components/Organisms/SideBar';
import Header from '../pages/components/Organisms/Header';
import Footer from '../pages/components/Organisms/Footer';
import Article from '../pages/components/Organisms/Article';
import styles from './Post.module.css';

type Tag = {
  tagName: string;
  slug: string;
};
type Post = {
  title: string;
  date: string;
  tags?: Tag[] | null;
  body: { body: string };
  slug: string;
};

type Props = {
  data: {
    contentfulBlogPost: Post;
  };
};

const Post: FC<Props> = ({ data }) => {
  const { title, date, tags, body } = data.contentfulBlogPost;

  return (
    <>
      <Header />
      <Grid container spacing={6}>
        <Grid container item xs={12} md={8} justify="flex-end">
          <Grid item xs={12} md={8}>
            <Article title={title} date={date} tags={tags} body={body.body} />
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

export default Post;
export const query = graphql`
  query($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      body {
        body
      }
      title
      slug
      date
      tags {
        slug
        tagName
      }
    }
  }
`;
