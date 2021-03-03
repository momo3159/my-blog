import React, { FC } from 'react';
import { graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import SideBar from '../pages/components/Organisms/SideBar';
import Header from '../pages/components/Organisms/Header';
import Footer from '../pages/components/Organisms/Footer';
import Article from '../pages/components/Organisms/Article';

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

type nextOrPrevPost = {
  title: string;
  slug: string;
};
type Props = {
  data: {
    currentPost: Post;
    nextPost: nextOrPrevPost | null;
    prevPost: nextOrPrevPost | null;
  };
};

const Post: FC<Props> = ({ data }) => {
  const { title, date, tags, body } = data.currentPost;
  console.log(data.nextPost);
  let { nextPost: next, prevPost: prev } = data;
  if (next?.title.length > 10)
    next = {
      ...next,
      title: `${next?.title?.slice(0, 10)}...`,
    };

  if (prev?.title.length > 10)
    prev = {
      ...prev,
      title: `${prev?.title?.slice(0, 10)}...`,
    };
  console.log(title);

  return (
    <>
      <Header />
      <Grid container spacing={6}>
        <Grid container item xs={12} md={8} justify="flex-end">
          <Grid container item xs={12} md={8}>
            <Article
              title={title}
              date={date}
              tags={tags}
              body={body.body}
              prev={prev}
              next={next}
            />
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
  query($currentId: String, $prevId: String, $nextId: String) {
    currentPost: contentfulBlogPost(id: { eq: $currentId }) {
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
    prevPost: contentfulBlogPost(id: { eq: $prevId }) {
      title
      slug
    }
    nextPost: contentfulBlogPost(id: { eq: $nextId }) {
      title
      slug
    }
  }
`;
