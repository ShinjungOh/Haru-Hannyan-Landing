'use client';

import dynamic from 'next/dynamic';

const DynamicDescription = dynamic(() => import('./ActualDescription.tsx'), {
  ssr: false,
});

export default DynamicDescription;
