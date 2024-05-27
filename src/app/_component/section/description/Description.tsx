'use client';

import { PulseLoader } from 'react-spinners';
import { useIsMobile, useIsMounted, useIsTablet } from '@lib/hooks';
import styleToken from '@styles/styleToken.css.ts';
import { Typography } from '../../common/Typography';
import * as styles from '../section.css';

type DescriptionProps = {
  title: string;
  detail: string;
};

export default function Description({ title, detail }: DescriptionProps) {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMounted = useIsMounted();

  const titleSize = isMobile ? 'subtitle5' : isTablet ? 'h3' : 'h2';
  const descriptionSize = isMobile ? 'body4' : 'body3';
  const descriptionMargin = isMobile ? { marginTop: '8px' } : { marginTop: '16px' };

  return (
    <div className={styles.descriptionContainer}>
      {!isMounted ? <PulseLoader color={styleToken.color.background} speedMultiplier={1.5} size={12} /> : null}
      {isMounted ? (
        <>
          <Typography variant={titleSize} color="white">
            {title}
          </Typography>
          <Typography variant={descriptionSize} color="white" style={descriptionMargin}>
            {detail}
          </Typography>
        </>
      ) : null}
    </div>
  );
}
