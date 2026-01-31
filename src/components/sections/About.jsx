import { motion, AnimatePresence } from 'motion/react';
import { BackgroundGradient } from '../ui/background-gradient';
import { useState, useEffect } from 'react';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

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
  const frontendSkills = [
    'React',
    'Vue.js',
    'TypeScript',
    'Tailwind CSS',
    'Next.js',
  ];
  const backendSkills = ['Node.js', 'PostgreSQL', 'PHP', 'Laravel'];
  const skillGroups = [
    { title: 'Frontend', skills: frontendSkills },
    { title: 'Backend', skills: backendSkills },
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

  const paginate = (newDirection) => {
    const newIndex = currentTestimonial + newDirection;
    if (newIndex < 0) {
      setTestimonial([testimonials.length - 1, newDirection]);
    } else if (newIndex >= testimonials.length) {
      setTestimonial([0, newDirection]);
    } else {
      setTestimonial([newIndex, newDirection]);
    }
  };

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentTestimonial]);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16 px-4"
    >
      <motion.div
        className="w-full max-w-6xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.h2
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text text-transparent text-center"
          variants={headerVariants}
        >
          About Me
        </motion.h2>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:min-h-[600px] lg:items-stretch w-full max-w-full"
          style={{ position: 'relative' }}
        >
          {/* Left Portrait Card - 50% image, 50% content */}
          <motion.div variants={cardVariants}>
            <BackgroundGradient className="rounded-[22px] bg-zinc-900 overflow-hidden flex flex-col h-full">
              {/* Top Half - Image Area (50% height) */}
              <div className="h-1/2 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-green-500/10"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <img
                    src="/Me.webp"
                    alt="Grant Innes - Developer"
                    className="w-full h-full object-cover object-center rounded-lg"
                  />
                  {/* Darkening overlay and vignette to improve image quality */}
                  <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                  <div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background:
                        'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 100%)',
                    }}
                  ></div>
                </div>
              </div>

              {/* Bottom Half - Compact content */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                  As a fullstack developer, I specialize in building robust and
                  elegant digital experiences from the ground up. I believe that
                  great software starts with clean architecture, thoughtful
                  interfaces, and a deep respect for the people using it. From
                  backend logic to frontend polish, I bring clarity,
                  performance, and purpose to every line of code.
                </p>

                <div className="grid grid-cols-1 gap-2 flex-1">
                  {skillGroups.map(({ title, skills }) => (
                    <div
                      key={title}
                      className="rounded-xl p-2.5 bg-zinc-900/50 hover:-translate-y-1 transition-all"
                    >
                      <h3 className="text-lg font-bold mb-1.5">{title}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {skills.map((tech, idx) => (
                          <span
                            key={`${title}-${idx}`}
                            className="bg-blue-500/10 text-blue-500 py-1 px-2 rounded-full text-xs hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>

          {/* Right Column - Work Experience (moved to top) and Testimonials */}
          <div className="grid gap-4 lg:self-stretch lg:[grid-template-rows:1fr_1fr] h-full max-w-full">
            {/* Work Experience Card */}
            <motion.div variants={cardVariants}>
              <BackgroundGradient
                containerClassName="h-full"
                className="p-4 sm:p-6 rounded-[22px] bg-zinc-900"
              >
                <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                <div className="space-y-3 text-gray-300">
                  <div>
                    <h4 className="font-semibold text-sm">
                      Senior Software Engineer at TechCorp (2020-present)
                    </h4>
                    <p className="text-xs">
                      Developed microservices for cloud-based applications
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">
                      Software Engineer at StartupXYZ
                    </h4>
                    <p className="text-xs">
                      Built scalable backend systems and APIs
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">
                      Junior Developer at WebAgency
                    </h4>
                    <p className="text-xs">
                      Full-stack development and client projects
                    </p>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>

            {/* Testimonials Card */}
            <motion.div variants={cardVariants}>
              <BackgroundGradient
                containerClassName="h-full"
                className="p-4 sm:p-6 rounded-[22px] bg-zinc-900 flex flex-col overflow-hidden"
              >
                <h3 className="text-xl font-bold mb-4">💬 Testimonials</h3>

                {/* Testimonial Content - Professional Card Design */}
                <div className="flex-1 flex flex-col justify-center min-w-0 relative overflow-hidden">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
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
                      <div className="flex items-start space-x-4 mb-4">
                        {/* Profile Image */}
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                              {testimonials[currentTestimonial].author
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </div>
                          </div>
                        </div>

                        {/* Author Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-lg truncate">
                            {testimonials[currentTestimonial].author}
                          </h4>
                          <p className="text-sm font-medium bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text text-transparent truncate">
                            {testimonials[currentTestimonial].role}
                          </p>
                          <p className="text-gray-400 text-xs truncate">
                            {testimonials[currentTestimonial].location}
                          </p>
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <div className="text-gray-300 text-sm leading-relaxed mb-4 overflow-hidden w-full">
                        <p className="break-words hyphens-auto max-w-full">
                          &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Arrows - Improved styling */}
                <div className="flex justify-center space-x-3 mb-4">
                  <motion.button
                    onClick={() => paginate(-1)}
                    className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-cyan-400/20 hover:to-green-500/20 flex items-center justify-center transition-all duration-300 border border-transparent hover:border-blue-500/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-5 h-5 text-gray-400"
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
                  </motion.button>

                  {/* Dot indicators */}
                  <div className="flex items-center space-x-2">
                    {testimonials.map((_, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setTestimonial([idx, idx > currentTestimonial ? 1 : -1])}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === currentTestimonial
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-400 w-6'
                            : 'bg-zinc-600 hover:bg-zinc-500'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>

                  <motion.button
                    onClick={() => paginate(1)}
                    className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-cyan-400/20 hover:to-green-500/20 flex items-center justify-center transition-all duration-300 border border-transparent hover:border-blue-500/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-5 h-5 text-gray-400"
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
                  </motion.button>
                </div>

                {/* Rolling Text Animation - Continuous loop */}
                <div className="pt-4 border-t border-zinc-700 w-full">
                  <div className="relative w-full h-6 overflow-hidden">
                    <div className="absolute inset-0 flex animate-scroll whitespace-nowrap">
                      {/* First set of items */}
                      {rollingText.map((text, index) => (
                        <span
                          key={`first-${index}`}
                          className={`text-base mr-12 flex-shrink-0 ${
                            index % 2 === 0
                              ? 'bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text text-transparent'
                              : 'text-gray-400'
                          }`}
                        >
                          {text}
                        </span>
                      ))}
                      {/* Duplicate set for seamless loop */}
                      {rollingText.map((text, index) => (
                        <span
                          key={`second-${index}`}
                          className={`text-base mr-12 flex-shrink-0 ${
                            index % 2 === 0
                              ? 'bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text text-transparent'
                              : 'text-gray-400'
                          }`}
                        >
                          {text}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
