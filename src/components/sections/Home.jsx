import { RevealOnScroll } from '../RevealOnScroll';
import { TechWheel } from '../TechWheel';
import { BackgroundBeams } from '../ui/background-beams';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between relative px-8 md:px-16 lg:px-24 overflow-hidden py-12 lg:py-0"
    >
      {/* Background Beams Animation */}
      <BackgroundBeams />
      
      {/* Tech Wheel - Mobile: Top Center, Desktop: Right Side */}
      <div className="flex items-center justify-center lg:order-2 z-10 lg:flex-1 mb-8 lg:mb-0 scale-75 lg:scale-100">
        <RevealOnScroll>
          <TechWheel />
        </RevealOnScroll>
      </div>

      {/* Content - Mobile: Below Wheel, Desktop: Left Side */}
      <RevealOnScroll>
        <div className="z-10 max-w-4xl flex-1 lg:order-1">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text text-transparent leading-tight text-left">
            Developing Apps That Shape Tomorrow
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl text-left leading-relaxed font-light">
            I&apos;m a fullstack developer crafting clean, performant web
            experiences from the ground up. Whether it&apos;s backend logic or
            frontend polish, I focus on building software that&apos;s intuitive,
            reliable, and built to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 relative z-20">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 text-white py-3 px-8 rounded-[20px] font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] inline-flex items-center justify-center"
            >
              Take A Tour <span className="ml-2">&gt;</span>
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-8 rounded-[20px] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 inline-flex items-center justify-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
