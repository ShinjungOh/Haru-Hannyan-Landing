'use server';

import * as styles from './feature.css';

export default async function Feature() {
  return (
    <section className={styles.container}>
      <img className={styles.image} src="/images/feature_info.png" alt="feature_info" />
    </section>
  );
}
