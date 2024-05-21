'use client';

import { useIsMobile, useIsMounted, useIsTablet } from '@lib/hooks';
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
    isMounted && (
      <div className={styles.descriptionContainer}>
        <Typography variant={titleSize} color="white">
          {title}
        </Typography>
        <Typography variant={descriptionSize} color="white" style={descriptionMargin}>
          {detail}
        </Typography>
      </div>
    )
  );
}
