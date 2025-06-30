import { useMemo } from "react";

interface FirefliesProps {
  count?: number;
  color: string;
}

const Fireflies: React.FC<FirefliesProps> = ({ count = 25, color }) => {
  const fireflies = useMemo(() => {
    return Array.from({ length: count }).map(() => {
      return {
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
      };
    });
  }, [count]);

    return (
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {fireflies.map((firefly, i) => {

          return (
            <div
              key={i}
              className="absolute rounded-full opacity-0 animate-[blink_2s_infinite]"
              style={{
                backgroundColor: color,
                top: `${firefly.top}%`,
                left: `${firefly.left}%`,
                width: `${firefly.size}px`,
                height: `${firefly.size}px`,
                animationDelay: `${firefly.delay}s`,
                animationDuration: `${firefly.duration}s`,
                filter: 'blur(1px)',
              }}
            />
          );
        })}
      </div>
    );
  };

  export default Fireflies;