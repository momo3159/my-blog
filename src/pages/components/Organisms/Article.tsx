import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';
import Tag from '../Atoms/Tag';

import styles from './Article.module.css';

type Tag = {
  tagName: string;
  slug: string;
};
export type Props = {
  title: string;
  date: string;
  tags?: Tag[] | null;
  body: string;
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
};

const Article: FC<Props> = (props) => {
  const { title, date, tags, body, prev, next } = props;
  const ymd = new Date(date).toLocaleString().split(' ')[0];

  return (
    <div className={styles.article}>
      <time className={styles.date}>{ymd}</time>
      <h1 className={styles.title}>{title}</h1>
      <Grid container spacing={2}>
        {tags?.map((tag) => (
          <Grid item>
            <Tag tagName={tag.tagName} slug={tag.slug} key={tag.tagName} />
          </Grid>
        ))}
      </Grid>
      <main className={styles.main}>{body}</main>
      <Grid container item justify="space-between" xs={12}>
        <Grid item>
          <Link to={`/blog/posts/${prev?.slug}`}>{prev?.title}</Link>
        </Grid>
        <Grid item>
          <Link to="/">HOME</Link>
        </Grid>
        <Grid item>
          <Link to={`/blog/posts/${next?.slug}`}>{next?.title}</Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Article;
