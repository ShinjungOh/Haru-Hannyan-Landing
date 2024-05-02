'use client';

import { useRouter } from 'next/navigation';
import { PAGE_ADDRESS } from '@lib/const/pageAddress.ts';
import * as styles from './banner.css';

export default function Info() {
  const router = useRouter();

  const onClickAppLink = () => {
    router.push(PAGE_ADDRESS.app);
  };

  return (
    <div className={styles.infoContainer}>
      <section className={styles.infoSection}>
        <h1 className={styles.infoTitle}>
          고양이 스티커로 남기는
          <br />
          하루의 기록, 하루한냥
        </h1>
        <p className={styles.infoDescription}>매일을 기록하고 나만의 고양이를 모아보세요.</p>
        <button className={styles.button} onClick={onClickAppLink}>
          하루한냥 바로가기
        </button>
      </section>
      <img className={styles.infoImage} src="/images/iphone_mockup_calendar.png" alt="iphone_mockup_calendar" />
    </div>
  );
}
