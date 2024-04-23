'use server';

import * as styles from './banner.css';

export default async function Description() {
  return (
    <div className={styles.descriptionContainer}>
      <h1 className={styles.descriptionTitle}>마음을 돌보고 싶은 사람을 위한</h1>
      <p className={styles.descriptionDetail}>오늘의 감정을 잊지 않게 남겨보세요.</p>
    </div>
  );
}
