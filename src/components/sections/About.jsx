import { RevealOnScroll } from '../RevealOnScroll';
import { BackgroundGradient } from '../ui/background-gradient';

export const About = () => {
  const frontendSkills = ['React', 'Vue', 'TypeScript', 'TailwindCSS'];
  const backendSkills = ['Node.js', 'ExpressJS', 'Postgresql', 'AWS', 'Python'];
  const skillGroups = [
    { title: 'Frontend', skills: frontendSkills },
    { title: 'Backend', skills: backendSkills },
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text
        text-transparent text-center"
          >
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:min-h-[720px] md:items-stretch">
            {/* Left Portrait Card */}
            <BackgroundGradient className="rounded-[22px] bg-zinc-900 overflow-hidden flex flex-col h-full">
              {/* Top Half - Image Placeholder */}
              <div className="h-64 md:h-1/2 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-green-500/10"></div>
                <div className="relative z-10 text-center text-gray-400">
                  <svg
                    className="w-24 h-24 mx-auto mb-2 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm">Image Placeholder</p>
                </div>
              </div>

              {/* Bottom Half - Existing content (unchanged) */}
              <div className="p-4 sm:p-6 md:p-8 flex-1">
                <p className="text-gray-300 mb-6">
                  Passionate Developer with expertise in building scalable web
                  applications and creating innovative solutions.
                </p>

                <div className="grid grid-cols-1 gap-6">
                  {skillGroups.map(({ title, skills }) => (
                    <div
                      key={title}
                      className="rounded-xl p-6 bg-zinc-900/50 hover:-translate-y-1 transition-all"
                    >
                      <h3 className="text-xl font-bold mb-4">{title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((tech, idx) => (
                          <span
                            key={`${title}-${idx}`}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
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

            {/* Right Column Wrapper - stacks two cards to match left height */}
            <div className="grid gap-6 md:self-stretch md:[grid-template-rows:1fr_1fr] h-full">
              <BackgroundGradient
                containerClassName="h-full"
                className="p-4 sm:p-6 rounded-[22px] bg-zinc-900"
              >
                <h3 className="text-xl font-bold mb-4">📚 Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong> B.S comp science</strong> - XYZ University
                    (2017-2078)
                  </li>
                  <li>Relevant CoiurseworkL: Data structures and algorithms</li>
                </ul>
              </BackgroundGradient>

              <BackgroundGradient
                containerClassName="h-full"
                className="p-4 sm:p-6 rounded-[22px] bg-zinc-900"
              >
                <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      Software Engineerb at etc (2020-present)
                    </h4>
                    <p>Developed microservices for cloud based shit</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Software Engineer</h4>
                    <p>Developed microservices for cloud based shit</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Software Engineer</h4>
                    <p>Developed microservices for cloud based shit</p>
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
