'use client';

import { useMediaQuery } from 'react-responsive';
import { Typography } from '../../common/Typography';
import * as styles from '../section.css';

type DescriptionProps = {
  title: string;
  detail: string;
};

export default function ActualDescription({ title, detail }: DescriptionProps) {
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1299px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
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
  );
}
