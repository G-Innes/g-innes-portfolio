import { RevealOnScroll } from '../RevealOnScroll';
import { BackgroundGradient } from '../ui/background-gradient';

export const About = () => {
  const frontendSkills = ['React', 'Vue', 'TypeScript', 'TailwindCSS'];
  const backendSkills = ['Node.js', 'ExpressJS', 'Postgresql', 'AWS', 'Python'];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-3xl mx-auto">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text
        text-transparent text-center"
          >
            About Me
          </h2>
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 md:p-8 bg-zinc-900">
            <p className="text-gray-300 mb-6">
              Passionate Developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 bg-zinc-900/50 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 bg-zinc-900/50 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </BackgroundGradient>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <BackgroundGradient className="p-4 sm:p-6 rounded-[22px] bg-zinc-900">
              <h3 className="text-xl font-bold mb-4">📚 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S comp science</strong> - XYZ University
                  (2017-2078)
                </li>
                <li>Relevant CoiurseworkL: Data structures and algorithms</li>
              </ul>
            </BackgroundGradient>
            <BackgroundGradient className="p-4 sm:p-6 rounded-[22px] bg-zinc-900">
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
      </RevealOnScroll>
    </section>
  );
};
