'use client';

import { useRouter } from 'next/navigation';
import { PAGE_ADDRESS } from '@lib/const/pageAddress';
import * as styles from './section.css';
import { Typography } from '../common/Typography';

export default function Banner() {
  const router = useRouter();

  const onClickAppLink = () => {
    router.push(PAGE_ADDRESS.app);
  };

  return (
    <div className={styles.infoContainer}>
      <section className={styles.infoSection}>
        <h1 className={styles.infoTitle}>
          <Typography variant="h2" color="gray1">
            고양이 스티커로 남기는
            <br />
            하루의 기록, 하루한냥
          </Typography>
        </h1>
        <p className={styles.infoDescription}>
          <Typography variant="body3" fontWeight="weightMedium">
            매일을 기록하고 나만의 고양이를 모아보세요.
          </Typography>
        </p>
        <button className={styles.button} onClick={onClickAppLink}>
          <Typography variant="body4" fontWeight="weightBold" color="white">
            하루한냥 바로가기
          </Typography>
        </button>
      </section>
      <img className={styles.infoImage} src="/images/iphone_mockup_calendar.png" alt="iphone_mockup_calendar" />
    </div>
  );
}
