import React, { FC } from 'react';
import { Link } from 'gatsby';
import styles from './Pagination.module.css';

type Props = {
  currentIndex: number;
  totalPageNumber: number;
  slug?: string;
};
const THRESHOLD = 4; // currentIndexからTHRESHOLD分前からの番号のpaginatioを表示

const getBasePath = (slug: string | undefined): string => {
  if (slug) {
    return `/blog/${slug}`;
  }

  return '/blog/pages';
};
const Pagination: FC<Props> = (props) => {
  const { totalPageNumber, currentIndex, slug } = props;
  const basePath = getBasePath(slug);

  if (totalPageNumber < 2) {
    return (
      <Link to={slug ? `${basePath}/1` : '/'} className={styles.current}>
        1
      </Link>
    );
  }

  if (totalPageNumber < 11) {
    const elems = [];
    for (let pageNumber = 1; pageNumber <= totalPageNumber; pageNumber++) {
      let style = styles.button;
      if (currentIndex === pageNumber) style = styles.current;

      if (pageNumber === 1) {
        elems.push(
          <Link to={slug ? `${basePath}/1` : '/'} className={style}>
            {pageNumber}
          </Link>,
        );
      } else {
        elems.push(
          <Link to={`/${pageNumber}`} className={style}>
            {pageNumber}
          </Link>,
        );
      }
    }

    return elems;
  }

  let start = currentIndex - THRESHOLD;
  if (start <= 0) start = 1;

  let end = start + 10;
  if (end > totalPageNumber) {
    end = totalPageNumber;
    start = end - 9;
  }

  const elems = [];
  for (let pageNumber = start; start <= end; start++) {
    let style = styles.button;
    if (currentIndex === pageNumber) style = styles.current;

    if (pageNumber === 1) {
      elems.push(
        <Link to={slug ? `${basePath}/1` : '/'} className={style}>
          {pageNumber}
        </Link>,
      );
    } else {
      elems.push(
        <Link to={`${basePath}/${pageNumber}`} className={style}>
          {pageNumber}
        </Link>,
      );
    }
  }

  return elems;
};

export default Pagination;
