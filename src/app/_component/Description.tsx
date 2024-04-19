import * as styles from './banner.css';

export default function Description() {
  return (
    <div className={styles.descriptionContainer}>
      <section className={styles.descriptionSection}>
        <h1 className={styles.descriptionTitle}>마음을 돌보고 싶은 사람을 위한</h1>
        <p className={styles.descriptionDetail}>오늘의 감정을 잊지 않게 남겨보세요.</p>
      </section>
    </div>
  );
}
