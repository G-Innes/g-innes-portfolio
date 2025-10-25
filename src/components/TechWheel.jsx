import { useState } from 'react';
import ReactIcon from '/assets/dev-icons/react.svg';
import VueIcon from '/assets/dev-icons/vue.svg';
import TypeScriptIcon from '/assets/dev-icons/typescript.svg';
import TailwindIcon from '/assets/dev-icons/tailwind.svg';
import NextIcon from '/assets/dev-icons/nextjs.svg';
import NodeIcon from '/assets/dev-icons/nodejs.svg';
import PostgresIcon from '/assets/dev-icons/postgresql.svg';
import PhpIcon from '/assets/dev-icons/php.svg';
import LaravelIcon from '/assets/dev-icons/laravel.svg';
import GitIcon from '/assets/dev-icons/git-new.svg';

const TECH_ICONS = [
  { icon: ReactIcon, name: 'React', size: 'large' },
  { icon: VueIcon, name: 'Vue.js', size: 'medium' },
  { icon: TypeScriptIcon, name: 'TypeScript', size: 'medium' },
  { icon: NodeIcon, name: 'Node.js', size: 'medium' },
  { icon: NextIcon, name: 'Next.js', size: 'small' },
  { icon: TailwindIcon, name: 'Tailwind CSS', size: 'small' },
  { icon: PostgresIcon, name: 'PostgreSQL', size: 'medium' },
  { icon: PhpIcon, name: 'PHP', size: 'small' },
  { icon: LaravelIcon, name: 'Laravel', size: 'medium' },
  { icon: GitIcon, name: 'Git', size: 'medium' },
];

export const TechWheel = () => {
  const [hoveredTech, setHoveredTech] = useState('');

  const getSizeClasses = size => {
    switch (size) {
      case 'small':
        return 'w-10 h-10';
      case 'medium':
        return 'w-14 h-14';
      case 'large':
        return 'w-18 h-18';
      default:
        return 'w-14 h-14';
    }
  };

  return (
    <div className="relative w-96 h-96 mx-auto">
      {/* Tech tag cloud grid */}
      <div className="relative w-full h-full">
        {/* Tech icons in scattered grid layout */}
        <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-12 p-16">
          {TECH_ICONS.map((tech, index) => {
            // More random scattered positioning
            const positions = [
              { row: 1, col: 1 }, // React (index 0)
              { row: 1, col: 4 }, // Vue.js (index 1)
              { row: 2, col: 3 }, // TypeScript (index 2)
              { row: 2, col: 5 }, // Node.js (index 3)
              { row: 3, col: 1 }, // Next.js (index 4)
              { row: 3, col: 4 }, // Tailwind CSS (index 5)
              { row: 4, col: 2 }, // PostgreSQL (index 6)
              { row: 4, col: 4 }, // PHP (index 7)
              { row: 5, col: 1 }, // Laravel (index 8)
              { row: 5, col: 5 }, // Git (index 9)
            ];

            const position = positions[index] || { row: 3, col: 3 };

            return (
              <div
                key={tech.name}
                className={`${getSizeClasses(
                  tech.size
                )} cursor-pointer group relative`}
                style={{
                  gridRow: position.row,
                  gridColumn: position.col,
                  zIndex: 10,
                }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech('')}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain transition-all duration-300 group-hover:scale-125 group-hover:brightness-125 group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] group-hover:-translate-y-1"
                />
              </div>
            );
          })}
        </div>

        {/* Tech Stack label below the grid */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-40 h-12 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 rounded-2xl flex items-center justify-center z-20 shadow-lg">
          <span className="text-black text-sm font-bold text-center px-2">
            {hoveredTech || 'Tech Stack'}
          </span>
        </div>
      </div>
    </div>
  );
};
