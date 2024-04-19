'use client';

import * as styles from './banner.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export default function CarouselBanner() {
  return (
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
          <div>
            <img src="/carousel/carousel_1.png" alt="feature_image" />
          </div>
          <div>
            <img src="/carousel/carousel_3.png" alt="feature_image" />
          </div>
          <div>
            <img src="/carousel/carousel_2.png" alt="feature_image" />
          </div>
        </Carousel>
      </section>
    </div>
  );
}
