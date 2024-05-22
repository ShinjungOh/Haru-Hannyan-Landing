'use client';

import { Carousel } from 'react-responsive-carousel';
import { PulseLoader } from 'react-spinners';
import { CAROUSEL } from '@lib/const/carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styleToken from '@styles/styleToken.css';
import { useCalcWidthRef } from '@lib/hooks';
import * as styles from '../section.css';

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
      <div className={styles.carouselContainer}>
        {!isMounted ? <PulseLoader color={styleToken.color.primary} speedMultiplier={1.5} size={12} /> : null}
        {isMounted ? (
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
        ) : null}
      </div>
    </div>
  );
}
