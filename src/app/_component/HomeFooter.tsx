'use client';

import { useRouter } from 'next/navigation';
import * as styles from '@app/_component/layout/footer.css';
import { PAGE_ADDRESS } from '@lib/const/pageAddress';
import { Typography } from './common/Typography';

export default function HomeFooter() {
  const router = useRouter();

  const onClickGithub = () => {
    router.push(PAGE_ADDRESS.github);
  };

  const onClickTistory = () => {
    router.push(PAGE_ADDRESS.blog);
  };

  return (
    <section className={styles.contentsContainer}>
      <div className={styles.titleContainer}>
        <img className={styles.iconImage} src="/feel-cat.svg" alt="하루한냥 로고" />
        <Typography
          variant="body3"
          color="gray1"
          fontWeight="weightBold"
          style={{
            marginLeft: '6px',
          }}
        >
          하루한냥
        </Typography>
      </div>
      <div className={styles.iconContainer}>
        <button className={styles.iconItem} onClick={onClickGithub}>
          <img className={styles.iconImage} src="/icons/github_icon.png" alt="github" />
        </button>
        <button className={styles.iconItem} onClick={onClickTistory}>
          <img className={styles.iconImage} src="/icons/tistory_icon.png" alt="tistory" />
        </button>
      </div>
    </section>
  );
}
