import React, { FC } from 'react';
import { Link } from 'gatsby';
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
  slug: string;
};

const Article: FC<Props> = (props) => {
  const { title, date, tags, body, slug } = props;
  const ymd = new Date(date).toLocaleString().split(' ')[0];
  const summary = body?.split('<h2')[0];

  return (
    <div className={styles.card}>
      <Link to={`/blog/posts/${slug}`}>
        <Paper variant="outlined" elevation={2}>
          <time className={styles.date}>{ymd}</time>
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
          <main
            dangerouslySetInnerHTML={{ __html: summary }}
            className={styles.main}
          />
        </Paper>
      </Link>
    </div>
  );
};

export default Article;
