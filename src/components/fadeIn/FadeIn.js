import React, {useEffect, useRef, useState} from "react";

export default function FadeIn({
  children,
  direction = "bottom",
  duration = 1000,
  distance = "20px"
}) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {threshold: 0.1}
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const translateMap = {
    bottom: `translateY(${distance})`,
    left: `translateX(-${distance})`,
    right: `translateX(${distance})`
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : translateMap[direction],
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`
      }}
    >
      {children}
    </div>
  );
}
