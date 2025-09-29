import { useState } from 'react';
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

export const TechWheel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredTech, setHoveredTech] = useState('');

  const techIcons = [
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

  const radius = 180;

  return (
    <div className="relative w-96 h-96 mx-auto">
      {/* Counter-rotating border */}
      <div
        className={`absolute inset-0 rounded-full border-2 border-blue-500/30 ${
          isHovered ? 'animate-none' : 'animate-spin-reverse'
        }`}
        style={{
          animationDuration: '30s',
          transformOrigin: 'center',
        }}
      ></div>

      {/* Spinning wheel container */}
      <div
        className="relative w-full h-full"
        style={{
          transformOrigin: 'center',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredTech('');
        }}
      >
        <div
          className={`w-full h-full ${
            isHovered ? 'animate-none' : 'animate-spin-slow'
          }`}
          style={{
            animationDuration: '30s',
            transformOrigin: 'center',
          }}
        >
          {/* Center circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center z-20 shadow-lg">
            <span className="text-black text-base font-bold text-center px-1">
              {hoveredTech || 'Tech'}
            </span>
          </div>

          {/* Tech icons positioned around the circle */}
          {techIcons.map((tech, index) => {
            const angle = (index * 360) / techIcons.length;

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
