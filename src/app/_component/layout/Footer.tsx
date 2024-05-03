'use client';

import { useRouter } from 'next/navigation';
import { PAGE_ADDRESS } from '@lib/const/pageAddress';
import * as styles from './footer.css';

export default function Footer() {
  const router = useRouter();

  const onClickGithub = () => {
    router.push(PAGE_ADDRESS.github);
  };

  const onClickTistory = () => {
    router.push(PAGE_ADDRESS.blog);
  };

  return (
    <div className={styles.container}>
      <section className={styles.contentsContainer}>
        <div className={styles.titleContainer}>
          <img className={styles.iconImage} src="/feel-cat.svg" alt="하루한냥 로고" />
          <h3 className={styles.title}>하루한냥</h3>
        </div>
        <div className={styles.iconContainer}>
          <div className={styles.iconItem} onClick={onClickGithub}>
            <img className={styles.iconImage} src="/icons/github_icon.png" alt="github" />
          </div>
          <div className={styles.iconItem} onClick={onClickTistory}>
            <img className={styles.iconImage} src="/icons/tistory_icon.png" alt="tistory" />
          </div>
        </div>
      </section>
    </div>
  );
}
