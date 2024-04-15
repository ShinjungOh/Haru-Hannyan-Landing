'use client';

import * as styles from './footer.css';
import { useRouter } from 'next/navigation';
import { PAGE_ADDRESS } from '../../lib/const/pageAddress';

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
      <h1>Footer</h1>
      <div className={styles.logoContainer}>
        <div className={styles.logoItem} onClick={onClickGithub}>
          <img className={styles.LogoImage} src="/icons/github_icon.png" alt="github" />
        </div>
        <div className={styles.logoItem} onClick={onClickTistory}>
          <img className={styles.LogoImage} src="/icons/tistory_icon.png" alt="tistory" />
        </div>
      </div>
    </div>
  );
}
