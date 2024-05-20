'use client';

import { useRouter } from 'next/navigation';
import { useIsMounted } from 'usehooks-ts';
import { PAGE_ADDRESS } from '@lib/const/pageAddress';
import { useIsMobile, useIsTablet } from '@lib/hooks';
import * as styles from '../section.css';
import { Typography } from '../../common/Typography';

export default function HomeBanner() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMounted = useIsMounted();

  const onClickAppLink = () => {
    router.push(PAGE_ADDRESS.app);
  };

  return (
    <>
      {isMounted && (
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
      )}
    </>
  );
}
