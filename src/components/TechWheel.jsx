import { useEffect, useRef, useState } from 'react';
import ReactIcon from '../assets/dev-icons/react.svg';
import VueIcon from '../assets/dev-icons/vue.svg';
import TypeScriptIcon from '../assets/dev-icons/typescript.svg';
import TailwindIcon from '../assets/dev-icons/tailwind.svg';
import NextIcon from '../assets/dev-icons/nextjs.svg';
import NodeIcon from '../assets/dev-icons/nodejs.svg';
import PostgresIcon from '../assets/dev-icons/postgresql.svg';
import PhpIcon from '../assets/dev-icons/php.svg';
import LaravelIcon from '../assets/dev-icons/laravel.svg';
import PythonIcon from '../assets/dev-icons/python.svg';

const TECH_ICONS = [
  { icon: ReactIcon, name: 'React' },
  { icon: VueIcon, name: 'Vue.js' },
  { icon: TypeScriptIcon, name: 'TypeScript' },
  { icon: TailwindIcon, name: 'Tailwind CSS' },
  { icon: NextIcon, name: 'Next.js' },
  { icon: NodeIcon, name: 'Node.js' },
  { icon: PostgresIcon, name: 'PostgreSQL' },
  { icon: PhpIcon, name: 'PHP' },
  { icon: LaravelIcon, name: 'Laravel' },
  { icon: PythonIcon, name: 'Python' },
];

export const TechWheel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredTech, setHoveredTech] = useState('');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const rootRef = useRef(null);
  const wheelRef = useRef(null);
  const borderRef = useRef(null);
  const rafIdRef = useRef(null);
  const startTimeRef = useRef(0);
  const offsetAngleRef = useRef(0); // persist angle across pause/resume

  // Detect prefers-reduced-motion for accessibility and performance
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  // Pause animations when wheel is offscreen
  useEffect(() => {
    if (!rootRef.current) return;
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, []);

  const playState =
    isHovered || prefersReducedMotion || !isInView ? 'paused' : 'running';

  // requestAnimationFrame-based rotation (replaces CSS keyframes)
  useEffect(() => {
    const wheelEl = wheelRef.current;
    const borderEl = borderRef.current;
    if (!wheelEl || !borderEl) return;

    const durationMs = 30000; // one full rotation in ms

    const step = ts => {
      if (!startTimeRef.current) startTimeRef.current = ts;
      const elapsed = ts - startTimeRef.current;
      const angle =
        (offsetAngleRef.current + (elapsed / durationMs) * 360) % 360;

      // Rotate wheel clockwise and border counter-clockwise
      wheelEl.style.transform = `translateZ(0) rotate(${angle}deg)`;
      borderEl.style.transform = `translateZ(0) rotate(${-angle}deg)`;

      rafIdRef.current = requestAnimationFrame(step);
    };

    if (playState === 'running') {
      startTimeRef.current = 0;
      rafIdRef.current = requestAnimationFrame(step);
    } else {
      // Persist current angle and stop
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      // Ensure elements reflect the persisted angle
      const persistedAngle = offsetAngleRef.current % 360;
      wheelEl.style.transform = `translateZ(0) rotate(${persistedAngle}deg)`;
      borderEl.style.transform = `translateZ(0) rotate(${-persistedAngle}deg)`;
    }

    return () => {
      if (rafIdRef.current) {
        // compute and store offset at cleanup
        const now = performance.now();
        const elapsed = now - (startTimeRef.current || now);
        offsetAngleRef.current =
          (offsetAngleRef.current + (elapsed / durationMs) * 360) % 360;
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [playState]);

  const radius = 180;

  return (
    <div ref={rootRef} className="relative w-96 h-96 mx-auto">
      {/* Counter-rotating border */}
      <div
        ref={borderRef}
        className={`absolute inset-0 rounded-full border-2 border-blue-500/30 will-change-transform`}
        style={{
          transformOrigin: 'center',
          transform: 'translateZ(0)',
        }}
      ></div>

      {/* Spinning wheel container */}
      <div
        className="relative w-full h-full will-change-transform"
        style={{
          transformOrigin: 'center',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredTech('');
        }}
      >
        {/* Center circle (kept static, not rotating) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 rounded-full flex items-center justify-center z-20 shadow-lg pointer-events-none">
          <span className="text-black text-base font-bold text-center px-1">
            {hoveredTech || 'Tech'}
          </span>
        </div>

        <div
          ref={wheelRef}
          className={`w-full h-full will-change-transform`}
          style={{ transformOrigin: 'center', transform: 'translateZ(0)' }}
        >
          {/* Tech icons positioned around the circle */}
          {TECH_ICONS.map((tech, index) => {
            const angle = (index * 360) / TECH_ICONS.length;

            return (
              <div
                key={tech.name}
                className="absolute w-14 h-14 cursor-pointer group"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px) rotate(${-angle}deg)`,
                  zIndex: 10,
                }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech('')}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
