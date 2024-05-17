'use client';

import dynamic from 'next/dynamic';

const DynamicBanner = dynamic(() => import('./ActualBanner.tsx'), {
  ssr: false,
});

export default DynamicBanner;
