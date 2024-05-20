import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState(false);
  const tablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1299px)',
  });

  useEffect(() => {
    setIsTablet(tablet);
  }, [tablet]);

  return isTablet;
};
