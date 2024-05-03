'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import throttle from '@lib/utils/throttle';
import { CAROUSEL } from '@lib/const/carousel';
import * as styles from './section.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function CarouselBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const handleResize = useCallback(() => {
    if (containerRef.current && containerRef.current.clientWidth) {
      setWidth(containerRef.current.offsetWidth || 0);
    }
  }, []);

  const handleThrottleResize = throttle(handleResize, 100);

  useEffect(() => {
    handleResize();
    window.addEventListener(`resize`, handleThrottleResize);
    return () => {
      window.removeEventListener(`resize`, handleThrottleResize);
    };
  }, [containerRef, handleResize, handleThrottleResize]);

  return (
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
          >
            {CAROUSEL.map((_, index) => (
              <div key={index}>
                <img
                  src={width < 768 ? CAROUSEL[index].mobile : CAROUSEL[index].desktop}
                  alt="feature_image"
                  style={{
                    width: width < 768 ? '380px' : '740px',
                  }}
                />
              </div>
            ))}
          </Carousel>
        </section>
      </div>
    </div>
  );
}
