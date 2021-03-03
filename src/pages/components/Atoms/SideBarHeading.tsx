import React, { FC } from 'react';
import styles from './SideBarHeading.module.css';

type Props = {
  title: string;
};
const SideBarHeading: FC<Props> = ({ title }) => (
  <h3 className={styles.title}>{title}</h3>
);

export default SideBarHeading;
