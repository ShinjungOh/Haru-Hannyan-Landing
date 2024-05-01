'use client';

import * as styles from './feature.css';
import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FEATURE_INFO } from '../../lib/const/featureInfo';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 2], [-distance, distance]);
}

export default function FeatureBanner({ id }: { id: string }) {
  const featureRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: featureRef });
  const y = useParallax(scrollYProgress, 200);

  return (
    <motion.div style={{ y }}>
      <section className={styles.featureContainer}>
        {id === 'timeline' ? (
          <>
            <div className={styles.infoContainer}>
              <div className={styles.featureTitleContainer}>
                <div className={styles.circle}>{FEATURE_INFO[id].number}</div>
                <h2 className={styles.featureTitle}>{FEATURE_INFO[id].title}</h2>
              </div>
              <p className={styles.featureDescription}>{FEATURE_INFO[id].description}</p>
            </div>
            <img
              className={styles.infoImage}
              src={FEATURE_INFO.timeline.image}
              alt={FEATURE_INFO.timeline.title}
              ref={featureRef}
            />
          </>
        ) : (
          <>
            {id === 'test' ? (
              <img
                className={styles.infoImageTest}
                src={FEATURE_INFO.test.image}
                alt={FEATURE_INFO.test.title}
                ref={featureRef}
              />
            ) : (
              <img
                className={styles.infoImage}
                src={FEATURE_INFO[id].image}
                alt={FEATURE_INFO[id].title}
                ref={featureRef}
              />
            )}
            <div className={styles.infoContainer}>
              <div className={styles.featureTitleContainer}>
                <div className={styles.circle}>{FEATURE_INFO[id].number}</div>
                <h2 className={styles.featureTitle}>{FEATURE_INFO[id].title}</h2>
              </div>
              <p className={styles.featureDescription}>{FEATURE_INFO[id].description}</p>
            </div>
          </>
        )}
      </section>
    </motion.div>
  );
}
