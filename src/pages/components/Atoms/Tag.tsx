import React, { FC } from 'react';
import { Link } from 'gatsby';
import styles from './Tag.module.css';

type Props = {
  tagName: string;
  totalCount?: number;
  slug: string;
  fontSize?: string;
};

const Tag: FC<Props> = (props) => {
  const { tagName, totalCount, slug } = props;
  let tagInfo: string;
  if (totalCount === undefined) tagInfo = `${tagName}`;
  else tagInfo = `${tagName}(${totalCount})`;

 
  console.log(styles)
  return (
    <Link to={`/blog/${slug}/1`} className={styles.button} style={{fontSize: props.fontSize}}>
      {tagInfo}
    </Link>
  );
};

export default Tag;
