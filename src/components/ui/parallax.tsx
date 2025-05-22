import { useEffect, useRef } from 'react';

const ParallaxHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX / innerWidth - 0.5) * 2;
      const offsetY = (e.clientY / innerHeight - 0.5) * 2;

      if (layer1Ref.current && layer2Ref.current) {
        // Foreground (moves faster)
        layer1Ref.current.style.transform = `translate3d(${offsetX * 10}px, ${offsetY * 10}px, 0)`;
        // Background (moves slower)
        layer2Ref.current.style.transform = `translate3d(${offsetX * 5}px, ${offsetY * 5}px, 0)`;
      }
    };

    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    return () => container?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
        ref={containerRef}
        className="relative flex items-center justify-center w-full h-screen overflow-hidden"
        >
        {/* Background layer */}
        <div
            ref={layer2Ref}
            className="absolute
                    bg-cover bg-center w-[80%] max-w-[800px] aspect-video
                    transition-transform duration-75 ease-out"
            style={{
            backgroundImage: `url('/src/assets/images/background-section-2-dark.svg')`, // ganti sesuai kebutuhan
            zIndex: 0,
            }}
        ></div>

        {/* Foreground layer */}
        <div
            ref={layer1Ref}
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2
                    bg-cover bg-center w-[80%] max-w-[800px] aspect-video
                    transition-transform duration-75 ease-out"
            style={{
            backgroundImage: `url('')`,
            zIndex: 10,
            }}
        ></div>
    </div>
  );
};

export default ParallaxHero;