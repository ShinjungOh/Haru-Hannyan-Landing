'use client';

import { useIsMounted } from 'usehooks-ts';
import { useIsMobile, useIsTablet } from '@lib/hooks';
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

  return (
    <>
      {isMounted && (
        <div className={styles.descriptionContainer}>
          <Typography variant={isMobile ? 'subtitle5' : isTablet ? 'h3' : 'h2'} color="white">
            {title}
          </Typography>
          <Typography
            variant={isMobile ? 'body4' : 'body3'}
            color="white"
            style={isMobile ? { marginTop: '8px' } : { marginTop: '16px' }}
          >
            {detail}
          </Typography>
        </div>
      )}
    </>
  );
}
