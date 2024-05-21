'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import throttle from '@lib/utils/throttle';
import { CAROUSEL } from '@lib/const/carousel';
import * as styles from '../section.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type CarouselBannerProps = {
  content: Array<{ mobile: string; desktop: string }>;
};

const CustomIndicator = (onClick, isSelected, index, label) => {
  const className = isSelected ? styles.carouselIndicatorSelected : styles.carouselIndicator;
  const ariaLabel = isSelected ? `Selected: ${label} ${index + 1}` : `${label} ${index + 1}`;

  return (
    <li
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
      onKeyDown={onClick}
      value={index}
      key={index}
      role="button"
      tabIndex={0}
    />
  );
};

export default function CarouselBanner({ content }: CarouselBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const isMobile = width < 768;
  const imageWidth = isMobile ? '380px' : '740px';

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
            renderIndicator={CustomIndicator}
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
  );
}
