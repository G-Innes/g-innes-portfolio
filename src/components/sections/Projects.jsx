/* eslint-disable react/prop-types */
import { RevealOnScroll } from '../RevealOnScroll';
import { BackgroundGradient } from '../ui/background-gradient';
import FFHero from '../../assets/FF-hero.png';

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  liveUrl,
  githubUrl,
}) => (
  <BackgroundGradient className="rounded-[22px] bg-zinc-900 overflow-hidden">
    {image && (
      <div className="w-full h-48 overflow-hidden rounded-t-[20px]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    )}
    <div className="p-4 sm:p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 text-sm leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, idx) => (
          <span
            key={idx}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-400 hover:to-green-500 hover:bg-clip-text transition-all duration-300 text-sm font-medium"
          >
            Live Demo →
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-400 hover:to-green-500 hover:bg-clip-text transition-all duration-300 text-sm font-medium"
          >
            GitHub →
          </a>
        )}
      </div>
    </div>
  </BackgroundGradient>
);

export const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Coming soon...',
      image: null,
      tech: ['React', 'Node.js', 'AWS'],
      liveUrl: null,
      githubUrl: null,
    },
    {
      title: 'HearYou - Personalized Bedtime Stories',
      description:
        'Subscription-based application that creates AI-generated personalized bedtime stories with professional voice narration for children. Features interactive onboarding quiz, multiple story templates, and tiered subscription plans. Built with Next.js 15, TypeScript, and integrated with OpenAI GPT-4 and ElevenLabs for story generation and narration.',
      image: null,
      tech: [
        'Next.js 15',
        'TypeScript',
        'Tailwind CSS',
        'PostgreSQL',
        'Prisma',
        'OpenAI',
        'ElevenLabs',
        'Stripe',
      ],
      liveUrl: 'https://www.hearyou.io',
      githubUrl: 'https://github.com/G-Innes/hearyou-app',
    },
    {
      title: 'AssetTrackr',
      description:
        'Cryptocurrency portfolio management application for tracking buy/sell transactions with live price feeds from Coinbase API. Features user authentication, real-time portfolio valuation, transaction history filtering, and comprehensive dashboard. Includes full Docker containerization and CI/CD pipeline with Jest and Playwright testing.',
      image: null,
      tech: [
        'Vue 3',
        'TypeScript',
        'Node.js',
        'Express',
        'TypeORM',
        'PostgreSQL',
        'Docker',
        'Tailwind CSS',
      ],
      liveUrl: 'https://asset-trackr-client.vercel.app',
      githubUrl: 'https://github.com/G-Innes/AssetTrackr',
    },
    {
      title: 'Fleet Fox Task Management',
      description:
        'Production-ready task management application with categories, priorities, and CSV import/export. Features user isolation, due date tracking, and comprehensive filtering. Built with Laravel 12, Vue 3, and Inertia.js with full PEST test coverage.',
      image: FFHero,
      tech: [
        'Laravel 12',
        'Vue 3',
        'Inertia.js',
        'Tailwind CSS',
        'PostgreSQL',
        'PEST',
      ],
      liveUrl: 'https://fleet-flow-gilt.vercel.app/',
      githubUrl: 'https://github.com/G-Innes/FleetFlow',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
