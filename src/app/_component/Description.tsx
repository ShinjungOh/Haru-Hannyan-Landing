'use server';

import * as styles from './banner.css';

type DescriptionProps = {
  title: string;
  detail: string;
};

export default async function Description({ title, detail }: DescriptionProps) {
  return (
    <div className={styles.descriptionContainer}>
      <h1 className={styles.descriptionTitle}>{title}</h1>
      <p className={styles.descriptionDetail}>{detail}</p>
    </div>
  );
}
