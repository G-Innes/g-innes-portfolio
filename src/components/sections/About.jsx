import { RevealOnScroll } from '../RevealOnScroll';
import { BackgroundGradient } from '../ui/background-gradient';
import { useState, useEffect } from 'react';

export const About = () => {
  // Updated tech skills to match hero icons
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

  // Testimonials data with profile images
  const testimonials = [
    {
      text: "Working with Grant has been a great experience. As a full-stack developer, he consistently delivers clean, scalable solutions and collaborates seamlessly with design. We've worked across industries like Web3, Proptech, and Oil & Gas, and his ability to turn complex ideas into functional products stands out every time. Reliable, proactive, and user-focused— Grant is a strong asset to any team.",
      author: 'Sarah Johnson',
      role: 'Product Designer, TechCorp',
      location: 'San Francisco, CA',
      image: '/api/placeholder/80/80', // Placeholder for profile image
    },
    {
      text: "Grant's technical expertise and collaborative approach make him a valuable team member. His ability to architect scalable systems and mentor junior developers sets him apart. Highly recommended for any development team looking for excellence.",
      author: 'Michael Chen',
      role: 'Lead Developer, StartupXYZ',
      location: 'New York, NY',
      image: '/api/placeholder/80/80', // Placeholder for profile image
    },
    {
      text: 'Grant is an exceptional developer who consistently delivers high-quality solutions. His attention to detail and problem-solving skills are outstanding. He brings both technical excellence and great communication skills to every project.',
      author: 'Emily Rodriguez',
      role: 'Engineering Director, WebAgency',
      location: 'Austin, TX',
      image: '/api/placeholder/80/80', // Placeholder for profile image
    },
  ];

  // Rolling text content
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

  // Testimonials carousel state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text
        text-transparent text-center"
          >
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:min-h-[600px] lg:items-stretch w-full max-w-full" style={{ position: 'relative' }}>
            {/* Left Portrait Card - 50% image, 50% content */}
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

            {/* Right Column - Work Experience (moved to top) and Testimonials */}
            <div className="grid gap-4 lg:self-stretch lg:[grid-template-rows:1fr_1fr] h-full max-w-full">
              {/* Work Experience Card */}
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

              {/* Testimonials Card */}
              <BackgroundGradient
                containerClassName="h-full"
                className="p-4 sm:p-6 rounded-[22px] bg-zinc-900 flex flex-col overflow-hidden"
              >
                <h3 className="text-xl font-bold mb-4">💬 Testimonials</h3>

                {/* Testimonial Content - Professional Card Design */}
                <div className="flex-1 flex flex-col justify-center min-w-0">
                  <div className="flex items-start space-x-4 mb-4">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                          {testimonials[currentTestimonial].author
                            .split(' ')
                            .map(n => n[0])
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
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center space-x-2 mb-4">
                  <button
                    onClick={() =>
                      setCurrentTestimonial(prev =>
                        prev === 0 ? testimonials.length - 1 : prev - 1
                      )
                    }
                    className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-gray-400"
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
                  <button
                    onClick={() =>
                      setCurrentTestimonial(
                        prev => (prev + 1) % testimonials.length
                      )
                    }
                    className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-gray-400"
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
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
