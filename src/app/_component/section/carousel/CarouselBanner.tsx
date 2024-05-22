'use client';

import { Carousel } from 'react-responsive-carousel';
import { CAROUSEL } from '@lib/const/carousel';
import { useCalcWidthRef } from '@lib/hooks/useCalcWidthRef.ts';
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
  const { width, ref: containerRef } = useCalcWidthRef<HTMLDivElement>();

  const isMobile = width < 768;
  const imageWidth = isMobile ? '380px' : '740px';
  const isMounted = width > 0;

  return (
    <div className={styles.container} ref={containerRef}>
      {isMounted ? (
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
      ) : null}
    </div>
  );
}
