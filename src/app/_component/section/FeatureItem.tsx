'use client';

import { CSSProperties, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import * as styles from './feature.css';
import { Typography } from '../common/Typography';

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

  return (
    <motion.div style={{ y }}>
      <section className={styles.featureContainer} style={style}>
        <img className={imageClassName} src={imageSrc} alt={title} ref={featureRef} />
        <div className={styles.infoContainer}>
          <div className={styles.featureTitleContainer}>
            <div className={styles.circle}>{number}</div>
            <h2 className={styles.featureTitle}>
              <Typography variant="subtitle4" color="alert_success" fontWeight="weightBold">
                {title}
              </Typography>
            </h2>
          </div>
          <p className={styles.featureDescription}>
            <Typography variant="body4" fontWeight="weightRegular">
              {description}
            </Typography>
          </p>
        </div>
      </section>
    </motion.div>
  );
}
