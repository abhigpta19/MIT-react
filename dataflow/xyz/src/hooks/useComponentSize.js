import { useRef, useState, useEffect } from 'react';

export function useComponentSize() {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    // Set initial size
    const { offsetWidth, offsetHeight } = ref.current;
    setSize({ width: offsetWidth, height: offsetHeight });

    // Create ResizeObserver to track size changes
    const resizeObserver = new ResizeObserver(() => {
      if (ref.current) {
        setSize({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    });

    resizeObserver.observe(ref.current);

    // Cleanup
    return () => resizeObserver.disconnect();
  }, []);

  return { ref, size };
}
