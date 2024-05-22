'use client';

import { CSSProperties, useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { FEATURE_INFO } from '@lib/const/featureInfo';
import FeatureItem from '@app/_component/section/feature/FeatureItem';
import { useIsMobile, useIsMounted } from '@lib/hooks';
import styleToken from '@styles/styleToken.css';
import * as styles from './feature.css';
import { Typography } from '../../common/Typography';

type FeatureProps = {
  title: string;
};

export default function Feature({ title }: FeatureProps) {
  const isMobile = useIsMobile();
  const isMounted = useIsMounted();
  const [isVisible, setIsVisible] = useState(false);

  const titleClassName = `${styles.title} ${isVisible ? styles.titleVisible : ''}`;
  const titleSize = isMobile ? 'subtitle3' : 'h3';

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > window.innerHeight / 2;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const unMountStyle = !isMounted ? { height: '600px', backgroundColor: styleToken.color.white } : undefined;

  return (
    <section className={styles.container} style={unMountStyle}>
      {!isMounted ? <PulseLoader color={styleToken.color.primary} speedMultiplier={1.5} size={12} /> : null}
      {isMounted ? (
        <>
          <div className={styles.titleContainer}>
            <h1 className={titleClassName}>
              <Typography variant={titleSize} fontWeight="weightBold" color="gray1">
                {title}
              </Typography>
            </h1>
          </div>
          <section className={styles.container}>
            {FEATURE_INFO.map((feat, index) => {
              const { number, title, description, image, feature } = feat;
              const imageClassName = feature === 'test' ? styles.infoImageTest : styles.infoImage;
              const containerStyle: CSSProperties | undefined =
                feature === 'timeline' && !isMobile ? { flexDirection: 'row-reverse' } : undefined;

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
          </section>
        </>
      ) : null}
      <div />
    </section>
  );
}
