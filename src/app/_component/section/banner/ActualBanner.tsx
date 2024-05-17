'use client';

import { useRouter } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';
import { PAGE_ADDRESS } from '@lib/const/pageAddress.ts';
import * as styles from '../section.css.ts';
import { Typography } from '../../common/Typography.tsx';

export default function ActualBanner() {
  const router = useRouter();

  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1299px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const onClickAppLink = () => {
    router.push(PAGE_ADDRESS.app);
  };

  return (
    <div className={styles.infoContainer}>
      <section className={styles.infoSection}>
        <Typography variant={isMobile ? 'subtitle3' : isTablet ? 'h3' : 'h2'} fontWeight="weightBold" color="gray1">
          고양이 스티커로 남기는
          <br />
          하루의 기록, 하루한냥
        </Typography>
        <Typography
          variant={isMobile || isTablet ? 'body4' : 'body3'}
          fontWeight="weightMedium"
          style={{ margin: '16px 0 48px 0' }}
        >
          매일을 기록하고 나만의 고양이를 모아보세요.
        </Typography>
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
