import { motion } from 'motion/react';
import { SpotlightCard } from '../ui/spotlight-card';
import { Section } from '../ui/section';
import FFHero from '/assets/FF-hero.webp';

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const ProjectTags = ({ tech }) => (
  <div className="flex flex-wrap gap-2">
    {tech.map((item, idx) => (
      <span
        key={idx}
        className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-gray-300"
      >
        {item}
      </span>
    ))}
  </div>
);

const ProjectLinks = ({ liveUrl, githubUrl }) => (
  <div className="flex items-center gap-6">
    {liveUrl && (
      <motion.a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-cyan-300 transition-colors duration-200 hover:text-white"
        whileHover={{ x: 3 }}
      >
        Live Demo →
      </motion.a>
    )}
    {githubUrl && (
      <motion.a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-white"
        whileHover={{ x: 3 }}
      >
        GitHub →
      </motion.a>
    )}
  </div>
);

// The lead project: full width, screenshot beside the write-up
const FeaturedProject = ({ title, description, image, tech, liveUrl, githubUrl }) => (
  <motion.div variants={cardVariants} className="md:col-span-2">
    <SpotlightCard featured className="grid overflow-hidden lg:grid-cols-[1.15fr_1fr]">
      <div className="overflow-hidden border-b border-white/10 lg:border-r lg:border-b-0">
        <img
          src={image}
          alt={title}
          width="1200"
          height="468"
          loading="lazy"
          decoding="async"
          className="h-56 w-full object-cover object-left-top transition-[scale] duration-700 ease-out group-hover:scale-[1.03] sm:h-72 lg:h-full"
        />
      </div>
      <div className="flex flex-col justify-center gap-5 p-6 sm:p-9">
        <h3 className="text-2xl text-white md:text-3xl">{title}</h3>
        <p className="leading-relaxed text-gray-400">{description}</p>
        <ProjectTags tech={tech} />
        <ProjectLinks liveUrl={liveUrl} githubUrl={githubUrl} />
      </div>
    </SpotlightCard>
  </motion.div>
);

const ProjectCard = ({ title, description, tech, liveUrl, githubUrl }) => (
  <motion.div variants={cardVariants} className="h-full">
    <SpotlightCard
      containerClassName="h-full"
      className="flex h-full flex-col gap-5 p-6 sm:p-8"
    >
      <h3 className="text-xl text-white md:text-2xl">{title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-gray-400 sm:text-base">
        {description}
      </p>
      <ProjectTags tech={tech} />
      <ProjectLinks liveUrl={liveUrl} githubUrl={githubUrl} />
    </SpotlightCard>
  </motion.div>
);

// A project with nothing to link to yet: shown small and last
const UpcomingProject = ({ title, description, tech }) => (
  <motion.div
    variants={cardVariants}
    className="flex flex-col gap-4 rounded-3xl border border-dashed border-white/15 p-6 sm:flex-row sm:items-center sm:justify-between md:col-span-2"
  >
    <div>
      <h3 className="text-lg text-gray-300">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
    <ProjectTags tech={tech} />
  </motion.div>
);

export const Projects = () => {
  const projects = [
    {
      title: 'THE4',
      description:
        "In development: a mobile-first product I'm building now. More once it's public.",
      image: null,
      tech: ['React Native', 'Expo', 'Laravel', 'PostgreSQL'],
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
      title: 'Fleet Flow',
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

  // Layout follows the data: the first project with a screenshot leads, and
  // anything without links yet drops to the end
  const isUpcoming = project => !project.liveUrl && !project.githubUrl;
  const featured = projects.find(project => project.image && !isUpcoming(project));
  const upcoming = projects.filter(isUpcoming);
  const rest = projects.filter(
    project => project !== featured && !isUpcoming(project)
  );

  return (
    <Section id="projects" index="02" label="Projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featured && <FeaturedProject {...featured} />}
        {rest.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
        {upcoming.map(project => (
          <UpcomingProject key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
};
