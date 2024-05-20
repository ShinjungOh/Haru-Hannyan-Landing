'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useIsMounted } from 'usehooks-ts';
import throttle from '@lib/utils/throttle';
import { CAROUSEL } from '@lib/const/carousel';
import * as styles from '../section.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type CarouselBannerProps = {
  content: Array<{ mobile: string; desktop: string }>;
};

export default function CarouselBanner({ content }: CarouselBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMounted = useIsMounted();
  const [width, setWidth] = useState(0);
  const [isMount, setIsMount] = useState(false);

  const isMobile = width < 768;
  const imageWidth = isMobile ? '380px' : '740px';

  const handleResize = useCallback(() => {
    if (containerRef.current && containerRef.current.clientWidth) {
      setWidth(containerRef.current.offsetWidth || 0);
    }
  }, []);

  const handleThrottleResize = throttle(handleResize, 100);

  const customIndicator = (onClickHandler, isSelected, index, label) => {
    if (isSelected) {
      return (
        <li
          className={styles.carouselIndicatorSelected}
          aria-label={`Selected: ${label} ${index + 1}`}
          onClick={onClickHandler}
          onKeyDown={onClickHandler}
          value={index}
          key={index}
          role="button"
          tabIndex={0}
        />
      );
    }

    return (
      <li
        className={styles.carouselIndicator}
        aria-label={`${label} ${index + 1}`}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
      />
    );
  };

  useEffect(() => {
    handleResize();
    window.addEventListener(`resize`, handleThrottleResize);
    return () => {
      window.removeEventListener(`resize`, handleThrottleResize);
    };
  }, [containerRef, handleResize, handleThrottleResize]);

  useEffect(() => {
    if (isMounted()) {
      setIsMount(true);
    }
  }, [isMounted]);

  return (
    <>
      {isMount && (
        <div className={styles.container} ref={containerRef}>
          <div className={styles.carouselContainer}>
            <section className={styles.carouselSection}>
              <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showThumbs={false}
                showArrows={false}
                useKeyboardArrows={false}
                renderIndicator={customIndicator}
              >
                {content.map((_, index) => {
                  const imageSrc = isMobile ? CAROUSEL[index].mobile : CAROUSEL[index].desktop;
                  return (
                    <div key={index}>
                      <img src={imageSrc} alt="feature_image" width={imageWidth} />
                    </div>
                  );
                })}
              </Carousel>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
