'use client';

import { CSSProperties, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useIsMounted } from 'usehooks-ts';
import { useIsMobile } from '@lib/hooks';
import * as styles from './feature.css';
import { Typography } from '../../common/Typography';

type FeatureItemProps = {
  number: number;
  title: string;
  description: string;
  imageSrc: string;
  imageClassName?: string;
  style?: CSSProperties;
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 2], [-distance, distance]);
}

export default function FeatureItem({ number, title, description, imageSrc, imageClassName, style }: FeatureItemProps) {
  const featureRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: featureRef });
  const y = useParallax(scrollYProgress, 200);
  const isMobile = useIsMobile();
  const isMounted = useIsMounted();

  return (
    <>
      {isMounted && (
        <motion.div style={{ y }}>
          <section className={styles.featureContainer} style={style}>
            <img className={imageClassName} src={imageSrc} alt={title} ref={featureRef} />
            <div className={styles.infoContainer}>
              <div className={styles.featureTitleContainer}>
                <div className={styles.circle}>{number}</div>
                <Typography
                  variant={isMobile ? 'body1' : 'subtitle4'}
                  color="alert_success"
                  fontWeight="weightBold"
                  style={
                    isMobile ? { marginLeft: '10px', textAlign: 'center' } : { marginLeft: '20px', textAlign: 'center' }
                  }
                >
                  {title}
                </Typography>
              </div>
              {isMobile ? (
                <Typography
                  variant="body6"
                  style={{
                    textAlign: 'center',
                    marginTop: '20px',
                    lineHeight: '24px',
                  }}
                >
                  {description}
                </Typography>
              ) : (
                <Typography
                  variant="body4"
                  style={{ margin: '30px 0 0 8px', lineHeight: '32px', whiteSpace: 'pre-line' }}
                >
                  {description}
                </Typography>
              )}
            </div>
          </section>
        </motion.div>
      )}
    </>
  );
}
