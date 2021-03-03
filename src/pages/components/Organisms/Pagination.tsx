import React, { FC } from 'react';
import { Link } from 'gatsby';
import styles from './Pagination.module.css';

type Props = {
  currentIndex: number;
  totalPageNumber: number;
  slug?: string;
};
const THRESHOLD = 4; // currentIndexからTHRESHOLD分前からの番号のpaginatioを表示

const range = (start: number, end: number): (number[] | []) =>{
   return [...Array(Math.max(0, end - start + 1)).keys()].map((index) => index + start);
}
 

const Pagination: FC<Props> = (props) => {
  const { totalPageNumber, currentIndex, slug } = props;

  let path;
  if (slug) path = `/blog/${slug}`;
  else path = '/blog/pages';

  if (totalPageNumber < 2) {
    return (
      <Link to={slug ? `${path}/1` : '/'} className={styles.current}>
        1
      </Link>
    );
  }

  if (totalPageNumber < 11) {
    return range(1, totalPageNumber).map((pageNumber) => {
      let style = styles.button;
      if (currentIndex === pageNumber) style = styles.current;

      return pageNumber === 1 ? (
        <Link to={slug ? `${path}/1` : '/'} className={style}>
          {pageNumber}
        </Link>
      ) : (
        <Link to={`${path}/${pageNumber}`} className={style}>
          {pageNumber}
        </Link>
      );
    });
  }

  let start = currentIndex - THRESHOLD;
  if (start <= 0) start = 1;

  let end = start + 10;
  if (end > totalPageNumber) {
    end = totalPageNumber;
    start = end - 9;
  }

  return range(start, end).map((pageNumber) => {
    let style = styles.button;
    if (currentIndex === pageNumber) style = styles.current;

    return pageNumber === 1 ? (
      <Link to={slug ? `${path}/1` : '/'} className={style}>
        {pageNumber}
      </Link>
    ) : (
      <Link to={`${path}/${pageNumber}`} className={style}>
        {pageNumber}
      </Link>
    );
  });
};

export default Pagination;
