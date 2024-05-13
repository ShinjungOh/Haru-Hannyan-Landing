'use client';

import * as styles from './section.css';
import { Typography } from '../common/Typography';

type DescriptionProps = {
  title: string;
  detail: string;
};

export default function Description({ title, detail }: DescriptionProps) {
  return (
    <div className={styles.descriptionContainer}>
      <h1 className={styles.descriptionTitle}>
        <Typography variant="h2" color="white">
          {title}
        </Typography>
      </h1>
      <p className={styles.descriptionDetail}>
        <Typography variant="body3" color="white">
          {detail}
        </Typography>
      </p>
    </div>
  );
}
