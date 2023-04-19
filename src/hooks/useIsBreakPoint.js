import { useLayoutEffect, useState } from 'react';
import debounce from 'lodash.debounce';

export const useIsBreakpoint = (width) => {
  const [isBreakpoint, setIsBreakpoint] = useState(false);

  useLayoutEffect(() => {
    const updateSize = () => {
      setIsBreakpoint(window.innerWidth < width);
    };
    window.addEventListener('resize', debounce(updateSize, 100));
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return isBreakpoint;
};
