import React, { useRef, useEffect, useState } from "react";

interface SlideInProps {
  children: React.ReactNode;
}

const SlideInComponent: React.FC<SlideInProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up observer on unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`a-slide ${isVisible ? "fade-in" : ""}`}>
      {children}
    </div>
  );
};

export default SlideInComponent;
