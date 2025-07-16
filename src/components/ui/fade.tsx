// TEST NUMBER 1
// import { useEffect, useRef, useState } from "react";

// interface FadeSectionProps {
//   children: React.ReactNode;
//   durationMs?: number;
//   from: string;
//   to: string;
// }

// function FadeSection({ children, durationMs = 700, from, to }: FadeSectionProps) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [hasAppeared, setHasAppeared] = useState(false);

//   useEffect(() => {
//     const target = ref.current;

//     if (!target) return;

//     const observer = new IntersectionObserver(
//       ([entry], obs) => {
//         if (entry.isIntersecting) {
//           setHasAppeared(true);
//           obs.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     observer.observe(target);

//     return () => {
//       observer.unobserve(target);
//     };
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`transition-all transform ${
//         hasAppeared ? `opacity-100 ${to}` : `opacity-0 ${from}`
//       } ease-in-out`}
//       style={{ transitionDuration: `${durationMs}ms` }}
//     >
//       {children}
//     </div>
//   );
// }

// export default FadeSection;

// TEST NUMBER 2
import { useEffect, useRef, useState } from "react";

interface FadeSectionProps {
  children: React.ReactNode;
  durationMs?: number;
  from: string;
  to: string;
}

function FadeSection({ children, durationMs = 700, from, to }: FadeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false); // renamed for clarity

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);  // memasuki viewport
        } else {
          setIsVisible(false); // keluar dari viewport
        }
      },
      { threshold: 0.3 } // bobot dari tampak yang dilayar
    );

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all transform ${
        isVisible ? `opacity-100 ${to}` : `opacity-0 ${from}`
      } ease-in-out`}
      style={{ transitionDuration: `${durationMs}ms` }}
    >
      {children}
    </div>
  );
}

export default FadeSection;

// TEST NUMBER 3
// import { useEffect, useRef, useState } from "react";

// interface FadeSectionProps {
//   children: React.ReactNode;
//   durationMs?: number;
//   from: string; // e.g., 'translate-y-10'
//   to: string;   // e.g., 'translate-y-0'
// }

// function FadeSection({ children, durationMs = 700, from, to }: FadeSectionProps) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [isInView, setIsInView] = useState(false);

//   useEffect(() => {
//     const target = ref.current;
//     if (!target) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsInView(entry.isIntersecting); // true when in view, false when out
//       },
//       { threshold: 0.2 } // Adjust if needed
//     );

//     observer.observe(target);

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`transition-all transform ease-in-out ${
//         isInView ? `opacity-100 ${to}` : `opacity-0 ${from}`
//       }`}
//       style={{ transitionDuration: `${durationMs}ms` }}
//     >
//       {children}
//     </div>
//   );
// }

// export default FadeSection;

// TEST NUMBER 4

// import { useEffect, useRef, useState } from "react";


// interface FadeSectionProps {
//   children: React.ReactNode;
//   durationMs?: number;
//   from: string;
//   to: string;
// }
// const inThreshold = 0.5
// const outThreshold = 0.99

// function FadeSection({
//   children,
//   durationMs = 700,
//   from,
//   to,
// }: FadeSectionProps) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [isInView, setIsInView] = useState(false);

//   useEffect(() => {
//     const target = ref.current;
//     if (!target) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         const ratio = entry.intersectionRatio;

//         if (ratio >= inThreshold) {
//           setIsInView(true); // Trigger IN animation
//         } else if (ratio <= outThreshold) {
//           setIsInView(false); // Trigger OUT animation
//         }
//       },
//       {
//         threshold: Array.from({ length: 101 }, (_, i) => i / 100), // [0, 0.01, ..., 1.0]
//       }
//     );

//     observer.observe(target);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`transition-all transform ease-in-out ${
//         isInView ? `opacity-100 ${to}` : `opacity-0 ${from}`
//       }`}
//       style={{ transitionDuration: `${durationMs}ms` }}
//     >
//       {children}
//     </div>
//   );
// }

// export default FadeSection;
