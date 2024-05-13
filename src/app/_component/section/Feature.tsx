'use client';

import { CSSProperties, useEffect, useState } from 'react';
import { FEATURE_INFO } from '@lib/const/featureInfo';
import FeatureItem from './FeatureItem';
import * as styles from './feature.css';
import { Typography } from '../common/Typography';

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
        <h1 className={`${styles.title} ${isVisible ? styles.titleVisible : ''}`}>
          <Typography variant="h3" color="gray1">
            {title}
          </Typography>
        </h1>
      </div>
      <section className={styles.container}>
        <>
          {FEATURE_INFO.map((feat, index) => {
            const { number, title, description, image, feature } = feat;
            const imageClassName = feature === 'test' ? styles.infoImageTest : styles.infoImage;
            const containerStyle: CSSProperties | undefined =
              feature === 'timeline' ? { flexDirection: 'row-reverse' } : undefined;
            return (
              <FeatureItem
                key={index}
                number={number}
                title={title}
                description={description}
                imageSrc={image}
                imageClassName={imageClassName}
                style={containerStyle}
              />
            );
          })}
        </>
      </section>
      <div />
    </section>
  );
}
