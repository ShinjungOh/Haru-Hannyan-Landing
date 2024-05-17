'use client';

import dynamic from 'next/dynamic';

const DynamicFeature = dynamic(() => import('./ActualFeature.tsx'), {
  ssr: false,
});

export default DynamicFeature;
