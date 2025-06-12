import { useEffect, useRef, useState } from "react";

interface FadeSectionProps {
  children: React.ReactNode;
  durationMs?: number;
  from: string;
  to: string;
}

function FadeSection({ children, durationMs = 700, from, to }: FadeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setHasAppeared(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all transform ${
        hasAppeared ? `opacity-100 ${to}` : `opacity-0 ${from}`
      }`}
      style={{ transitionDuration: `${durationMs}ms` }}
    >
      {children}
    </div>
  );
}

export default FadeSection;