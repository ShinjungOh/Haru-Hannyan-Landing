'use client';

import { CSSProperties, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import * as styles from './feature.css';

type FeatureItemProps = {
  number: number;
  feature: string;
  title: string;
  description: string;
  imageSrc: string;
  style?: CSSProperties;
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 2], [-distance, distance]);
}

export default function FeatureItem({ number, feature, title, description, imageSrc, style }: FeatureItemProps) {
  const featureRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: featureRef });
  const y = useParallax(scrollYProgress, 200);

  return (
    <motion.div style={{ y }}>
      <section className={styles.featureContainer} style={style}>
        <img
          className={feature === 'test' ? styles.infoImageTest : styles.infoImage}
          src={imageSrc}
          alt={title}
          ref={featureRef}
        />
        <div className={styles.infoContainer}>
          <div className={styles.featureTitleContainer}>
            <div className={styles.circle}>{number}</div>
            <h2 className={styles.featureTitle}>{title}</h2>
          </div>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </section>
    </motion.div>
  );
}
