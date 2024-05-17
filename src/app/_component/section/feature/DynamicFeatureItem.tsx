'use client';

import dynamic from 'next/dynamic';

const DynamicFeatureItem = dynamic(() => import('./ActualFeatureItem.tsx'), {
  ssr: false,
});

export default DynamicFeatureItem;
