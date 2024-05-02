'use client';

import { useEffect, useState } from 'react';
import FeatureBanner from './FeatureBanner';
import * as styles from './feature.css';

export default function Feature() {
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
        <h1 className={`${styles.title} ${isVisible ? styles.titleVisible : ''}`}>
          다양한 기능으로
          <br />
          나의 감정을 셀프 케어
        </h1>
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
