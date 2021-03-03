import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
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
};

const Article: FC<Props> = (props) => {
  const { title, date, tags, body } = props;

  return (
    <div>
      <time className={styles.date}>{date}</time>
      <h1 className={styles.title}>{title}</h1>
      <Grid container spacing={2}>
        {tags?.map((tag) => (
          <Grid item>
            <Tag tagName={tag.tagName} slug={tag.slug} key={tag.tagName} />
          </Grid>
        ))}
      </Grid>
      <main className={styles.main}>{body}</main>
    </div>
  );
};

export default Article;
