'use client';

import { useEffect, useState } from 'react';
import FeatureBanner from './FeatureBanner';
import * as styles from './feature.css';

type FeatureProps = {
  title: string;
};

export default function Feature({ title }: FeatureProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > window.innerHeight / 2;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={`${styles.title} ${isVisible ? styles.titleVisible : ''}`}>{title}</h1>
      </div>
      <section className={styles.container}>
        <>
          {['diary', 'timeline', 'test'].map((id, index) => (
            <FeatureBanner key={index} id={id} />
          ))}
        </>
      </section>
      <div />
    </section>
  );
}
