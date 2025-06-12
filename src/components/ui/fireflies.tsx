interface FirefliesProps {
  count?: number;
  color: string;
}

const Fireflies: React.FC<FirefliesProps> = ({ count = 25, color }) => {
    const fireflies = Array.from({ length: count });

    return (
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {fireflies.map((_, i) => {
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const size = Math.random() * 2 + 1;
          const delay = Math.random() * 5;
          const duration = 3 + Math.random() * 4;

          return (
            <div
              key={i}
              className="absolute rounded-full opacity-0 animate-[blink_2s_infinite]"
              style={{
                backgroundColor: color,
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                filter: 'blur(1px)',
              }}
            />
          );
        })}
      </div>
    );
  };

  export default Fireflies;