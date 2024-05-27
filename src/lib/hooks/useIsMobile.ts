import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return isMobile;
};
