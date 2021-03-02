import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tag from '../Atoms/Tag';
import styles from './ArticleCard.module.css';

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
    <Paper variant="outlined" elevation={2}>
      <time className={styles.date}>{date}</time>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.container}>
        <Grid container spacing={1}>
          {tags?.map((tag) => (
            <Grid item>
              <Tag
                tagName={tag.tagName}
                slug={tag.slug}
                fontSize="12px"
                key={tag.tagName}
              />
            </Grid>
          ))}
        </Grid>
      </div>

      <main className={styles.main}>{body}</main>
    </Paper>
  );
};

export default Article;
