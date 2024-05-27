'use client';

import { useRouter } from 'next/navigation';
import { PulseLoader } from 'react-spinners';
import { PAGE_ADDRESS } from '@lib/const/pageAddress';
import { useIsMobile, useIsMounted, useIsTablet } from '@lib/hooks';
import styleToken from '@styles/styleToken.css';
import { Typography } from '../../common/Typography';
import * as styles from '../section.css';

export default function HomeBanner() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMounted = useIsMounted();

  const titleSize = isMobile ? 'subtitle3' : isTablet ? 'h3' : 'h2';
  const descriptionSize = isMobile || isTablet ? 'body4' : 'body3';
  const imageSrc = '/images/iphone_mockup_calendar.png';

  const onClickAppLink = () => {
    router.push(PAGE_ADDRESS.app);
  };

  return (
    <div className={styles.infoContainer}>
      {!isMounted ? <PulseLoader color={styleToken.color.primary} speedMultiplier={1.5} size={12} /> : null}
      {isMounted ? (
        <>
          <section className={styles.infoSection}>
            <Typography variant={titleSize} fontWeight="weightBold" color="gray1">
              고양이 스티커로 남기는
              <br />
              하루의 기록, 하루한냥
            </Typography>
            <Typography variant={descriptionSize} fontWeight="weightMedium" style={{ margin: '16px 0 48px 0' }}>
              매일을 기록하고 나만의 고양이를 모아보세요.
            </Typography>
            <button className={styles.button} onClick={onClickAppLink}>
              <Typography variant="body4" fontWeight="weightBold" color="white">
                하루한냥 바로가기
              </Typography>
            </button>
          </section>
          <img className={styles.infoImage} src={imageSrc} alt="iphone_mockup_calendar" />
        </>
      ) : null}
    </div>
  );
}
