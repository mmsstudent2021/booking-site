import React, { useEffect, useRef, useState } from "react";

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    let startTime;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startTime = performance.now();

          const updateCounter = (timestamp) => {
            const progress = (timestamp - startTime) / duration;
            const currentCount = Math.min(Math.ceil(progress * end), end);

            setCount(currentCount);

            if (currentCount < end) {
              requestAnimationFrame(updateCounter);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, // Adjust as needed
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={counterRef}>{count}</span>;
};

export default Counter;
