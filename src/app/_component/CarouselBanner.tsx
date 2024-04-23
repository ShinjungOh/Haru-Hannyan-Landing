'use client';

import * as styles from './banner.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import throttle from '../../lib/utils/throttle';

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
          {width < 768 ? (
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showThumbs={false}
              showArrows={false}
              useKeyboardArrows={false}
            >
              <div>
                <img
                  src="/carousel/carousel_mobile_1.png"
                  alt="feature_image"
                  style={{
                    width: '380px',
                  }}
                />
              </div>
              <div>
                <img
                  src="/carousel/carousel_mobile_2.png"
                  alt="feature_image"
                  style={{
                    width: '380px',
                  }}
                />
              </div>
              <div>
                <img
                  src="/carousel/carousel_mobile_3.png"
                  alt="feature_image"
                  style={{
                    width: '380px',
                  }}
                />
              </div>
            </Carousel>
          ) : (
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showThumbs={false}
              showArrows={false}
              useKeyboardArrows={false}
            >
              <div>
                <img
                  src="/carousel/carousel_1.png"
                  alt="feature_image"
                  style={{
                    width: '740px',
                  }}
                />
              </div>
              <div>
                <img
                  src="/carousel/carousel_2.png"
                  alt="feature_image"
                  style={{
                    width: '740px',
                  }}
                />
              </div>
              <div>
                <img
                  src="/carousel/carousel_3.png"
                  alt="feature_image"
                  style={{
                    width: '740px',
                  }}
                />
              </div>
            </Carousel>
          )}
        </section>
      </div>
    </div>
  );
}
