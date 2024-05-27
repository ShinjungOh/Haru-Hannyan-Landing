import { useCallback, useEffect, useRef, useState } from 'react';
import throttle from '@lib/utils/throttle';

export const useCalcWidthRef = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);

  const handleResize = useCallback(() => {
    if (ref.current && ref.current.clientWidth) {
      setWidth(ref.current.offsetWidth || 0);
    }
  }, []);

  const handleThrottleResize = throttle(handleResize, 100);

  useEffect(() => {
    handleResize();
    window.addEventListener(`resize`, handleThrottleResize);
    return () => {
      window.removeEventListener(`resize`, handleThrottleResize);
    };
  }, [ref, handleResize, handleThrottleResize]);

  return { ref, width };
};
