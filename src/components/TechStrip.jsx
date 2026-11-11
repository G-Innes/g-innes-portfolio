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
  { icon: ReactIcon, name: 'React' },
  { icon: VueIcon, name: 'Vue.js' },
  { icon: TypeScriptIcon, name: 'TypeScript' },
  { icon: NodeIcon, name: 'Node.js' },
  { icon: NextIcon, name: 'Next.js' },
  { icon: TailwindIcon, name: 'Tailwind CSS' },
  { icon: PostgresIcon, name: 'PostgreSQL' },
  { icon: PhpIcon, name: 'PHP' },
  { icon: LaravelIcon, name: 'Laravel' },
  { icon: GitIcon, name: 'Git' },
];

export const TechStrip = () => {
  return (
    <div className="border-t border-white/10 pt-6">
      <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-gray-500">
        Tech Stack
      </p>
      <ul className="flex flex-wrap gap-x-7 gap-y-4">
        {TECH_ICONS.map(tech => (
          <li
            key={tech.name}
            className="group/tech flex items-center gap-2.5 font-mono text-xs text-gray-500 transition-colors duration-300 hover:text-gray-200"
          >
            <img
              src={tech.icon}
              alt=""
              width="24"
              height="24"
              decoding="async"
              className="h-6 w-6 object-contain opacity-60 grayscale transition-[opacity,filter] duration-300 group-hover/tech:opacity-100 group-hover/tech:grayscale-0"
            />
            {tech.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
