'use client';

import dynamic from 'next/dynamic';

const DynamicCarouselBanner = dynamic(() => import('./ActualCarouselBanner.tsx'), {
  ssr: false,
});

export default DynamicCarouselBanner;
