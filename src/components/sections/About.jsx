import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { SpotlightCard } from '../ui/spotlight-card';
import { Section } from '../ui/section';
import { useState, useEffect } from 'react';

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const testimonialVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 30 : -30,
    opacity: 0,
  }),
};

export const About = () => {
  const skillGroups = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    },
    { title: 'Mobile', skills: ['React Native', 'Expo'] },
    {
      title: 'Backend',
      skills: ['Laravel', 'PHP', 'Node.js', 'PostgreSQL', 'Redis'],
    },
  ];

  const workExperience = [
    {
      role: 'Full-Stack Engineer',
      company: 'THE4',
      period: 'Present',
      summary:
        'Building a mobile-first product from the ground up: a React Native and Expo app on a Laravel and PostgreSQL backend, in a single monorepo.',
    },
    {
      role: 'Full-Stack Developer',
      company: 'FleetFox',
      period: 'Oct 2025 – Present',
      summary:
        'Building web applications that streamline day-to-day operations in the fleet-management industry, from architecture through to continuous delivery.',
    },
    {
      role: 'Full-Stack Developer',
      company: 'Freelance',
      period: 'Oct 2023 – Present',
      summary:
        'Designing, building and running complete products for clients: APIs, interfaces, data models, deployments and releases, including revenue-generating systems in production.',
    },
    {
      role: 'Full-Stack Developer',
      company: 'Glafos',
      period: 'Aug 2024 – Oct 2025',
      summary:
        'Delivered full-stack web applications with data integrations, scalable backend services and responsive interfaces, covering CI/CD and performance work.',
    },
  ];

  const testimonials = [
    {
      text: "Working with Grant has been a great experience. As a full-stack developer, he consistently delivers clean, scalable solutions and collaborates seamlessly with design. We've worked across industries like Web3, Proptech, and Oil & Gas, and his ability to turn complex ideas into functional products stands out every time. Reliable, proactive, and user-focused— Grant is a strong asset to any team.",
      author: 'Sarah Johnson',
      role: 'Product Designer, TechCorp',
      location: 'San Francisco, CA',
      image: '/api/placeholder/80/80',
    },
    {
      text: "Grant's technical expertise and collaborative approach make him a valuable team member. His ability to architect scalable systems and mentor junior developers sets him apart. Highly recommended for any development team looking for excellence.",
      author: 'Michael Chen',
      role: 'Lead Developer, StartupXYZ',
      location: 'New York, NY',
      image: '/api/placeholder/80/80',
    },
    {
      text: 'Grant is an exceptional developer who consistently delivers high-quality solutions. His attention to detail and problem-solving skills are outstanding. He brings both technical excellence and great communication skills to every project.',
      author: 'Emily Rodriguez',
      role: 'Engineering Director, WebAgency',
      location: 'Austin, TX',
      image: '/api/placeholder/80/80',
    },
  ];

  const rollingText = [
    'Database Design',
    'API dev & integration',
    'Devops & Deployment',
    'System Design',
    'Technical Strategy',
    'Backend Architecture',
    'Frontend Engineering',
    'Product Management',
  ];

  const [[currentTestimonial, direction], setTestimonial] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const paginate = (newDirection) => {
    setTestimonial(([current]) => [
      (current + newDirection + testimonials.length) % testimonials.length,
      newDirection,
    ]);
  };

  // Auto-rotate testimonials, but never while someone is reading or interacting
  useEffect(() => {
    if (isPaused || reduceMotion) return;
    const interval = setInterval(() => {
      setTestimonial(([current]) => [(current + 1) % testimonials.length, 1]);
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused, reduceMotion, currentTestimonial, testimonials.length]);

  const testimonial = testimonials[currentTestimonial];

  return (
    <Section id="about" index="01" label="About" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:items-stretch">
        {/* Left Portrait Card - image on top, bio and skills below */}
        <motion.div variants={cardVariants} className="min-w-0">
          <SpotlightCard
            containerClassName="h-full"
            className="flex h-full flex-col overflow-hidden"
          >
            <div className="relative h-64 overflow-hidden lg:h-1/2">
              <img
                src="/Me.webp"
                alt="Grant Innes - Developer"
                width="400"
                height="300"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center"
              />
              {/* Fade the photo into the card surface */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-7">
              <p className="mb-6 text-sm leading-relaxed text-gray-300 sm:text-base">
                I got into software by breaking things to see how they worked,
                then putting them back together better. That habit stuck.
                Today I build whole products: React, Next.js and React Native
                up front, Laravel and Node behind them, PostgreSQL underneath,
                and the pipelines that ship it all. I work remotely, I&apos;m
                happy in a hybrid setup, and I like the part where
                someone&apos;s rough idea becomes a thing people use.
              </p>

              <div className="grid grid-cols-1 gap-5">
                {skillGroups.map(({ title, skills }) => (
                  <div key={title}>
                    <h3 className="mb-2.5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                      {title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((tech, idx) => (
                        <span
                          key={`${title}-${idx}`}
                          className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-gray-300 transition-colors hover:border-cyan-400/40 hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Right Column - Work Experience and Testimonials */}
        <div className="grid min-w-0 grid-cols-1 gap-6">
          {/* Work Experience Card */}
          <motion.div variants={cardVariants} className="min-w-0">
            <SpotlightCard containerClassName="h-full" className="h-full p-5 sm:p-7">
              <h3 className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                Work Experience
              </h3>
              <div className="space-y-5 border-l border-white/10 pl-5 text-gray-300">
                {workExperience.map(({ role, company, period, summary }) => (
                  <div key={company}>
                    <h4 className="font-sans text-base font-semibold tracking-normal text-white">
                      {role} <span className="text-gray-500">·</span> {company}
                    </h4>
                    <p className="mt-1 font-mono text-xs text-gray-500">
                      {period}
                    </p>
                    <p className="mt-2 text-sm text-gray-400">{summary}</p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Testimonials Card */}
          <motion.div variants={cardVariants} className="min-w-0">
            <SpotlightCard
              containerClassName="h-full"
              className="flex h-full flex-col overflow-hidden p-5 sm:p-7"
            >
              {/* Hover or keyboard focus pauses the auto-rotation */}
              <div
                className="flex flex-1 flex-col"
                onPointerEnter={() => setIsPaused(true)}
                onPointerLeave={() => setIsPaused(false)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
              >
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                    Testimonials
                  </h3>

                  {/* Navigation */}
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      aria-label="Previous testimonial"
                      onClick={() => paginate(-1)}
                      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 text-gray-400 transition-colors duration-200 hover:border-white/30 hover:text-white"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    {/* Dot indicators */}
                    <div className="flex items-center px-1">
                      {testimonials.map((_, idx) => (
                        // 24px hit area around an 8px dot
                        <button
                          key={idx}
                          type="button"
                          aria-label={`Show testimonial ${idx + 1}`}
                          aria-current={idx === currentTestimonial}
                          onClick={() =>
                            setTestimonial([
                              idx,
                              idx > currentTestimonial ? 1 : -1,
                            ])
                          }
                          className="group/dot flex h-6 cursor-pointer items-center justify-center px-1"
                        >
                          <span
                            className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                              idx === currentTestimonial
                                ? 'w-5 bg-cyan-400'
                                : 'w-1.5 bg-zinc-600 group-hover/dot:bg-zinc-400'
                            }`}
                          />
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      aria-label="Next testimonial"
                      onClick={() => paginate(1)}
                      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 text-gray-400 transition-colors duration-200 hover:border-white/30 hover:text-white"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Testimonial Content - min height stops the card jumping between quotes */}
                <div
                  className="relative flex min-h-[20rem] min-w-0 flex-1 flex-col justify-center overflow-hidden sm:min-h-[15rem]"
                  aria-live="polite"
                >
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.figure
                      key={currentTestimonial}
                      custom={direction}
                      variants={testimonialVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                    >
                      <blockquote className="mb-6 text-sm leading-relaxed text-gray-200 sm:text-base">
                        <p className="break-words">
                          &ldquo;{testimonial.text}&rdquo;
                        </p>
                      </blockquote>

                      <figcaption className="flex items-center gap-4">
                        {/* Initials avatar */}
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/15 font-mono text-sm text-cyan-300">
                          {testimonial.author
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate font-semibold text-white">
                            {testimonial.author}
                          </p>
                          <p className="truncate text-sm text-gray-400">
                            {testimonial.role}
                            <span className="text-gray-600"> · </span>
                            {testimonial.location}
                          </p>
                        </div>
                      </figcaption>
                    </motion.figure>
                  </AnimatePresence>
                </div>
              </div>

              {/* Rolling Text Animation - Continuous loop */}
              <div className="mt-6 w-full border-t border-white/10 pt-5">
                <div
                  className="relative h-5 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 flex animate-scroll whitespace-nowrap will-change-transform">
                    {/* Two copies for a seamless loop */}
                    {[...rollingText, ...rollingText].map((text, index) => (
                      <span
                        key={index}
                        className={`mr-10 flex-shrink-0 font-mono text-xs uppercase tracking-[0.15em] ${
                          index % 2 === 0 ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {text}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
