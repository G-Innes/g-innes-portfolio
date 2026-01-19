import { motion } from 'motion/react';
import { TechWheel } from '../TechWheel';
import { BackgroundBeams } from '../ui/background-beams';

// Animation variants
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const techWheelVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const buttonContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between relative px-8 md:px-16 lg:px-24 overflow-hidden py-12 lg:py-0"
      style={{ position: 'relative' }}
    >
      {/* Background Beams Animation */}
      <BackgroundBeams />

      {/* Tech Wheel - Mobile: Top Center, Desktop: Right Side */}
      <motion.div
        className="flex items-center justify-center lg:order-2 z-10 lg:flex-1 mb-8 lg:mb-0 scale-75 lg:scale-100"
        variants={techWheelVariants}
        initial="hidden"
        animate="visible"
      >
        <TechWheel />
      </motion.div>

      {/* Content - Mobile: Below Wheel, Desktop: Left Side */}
      <motion.div
        className="z-10 max-w-4xl flex-1 lg:order-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text text-transparent leading-tight text-left"
          variants={itemVariants}
        >
          Developing Apps That Shape Tomorrow
        </motion.h1>
        <motion.p
          className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl text-left leading-relaxed font-light"
          variants={itemVariants}
        >
          I&apos;m a fullstack developer crafting clean, performant web
          experiences from the ground up. Whether it&apos;s backend logic or
          frontend polish, I focus on building software that&apos;s intuitive,
          reliable, and built to last.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 relative z-20"
          variants={buttonContainerVariants}
        >
          <motion.a
            href="#projects"
            className="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 text-white py-3 px-8 rounded-[20px] font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] inline-flex items-center justify-center"
            variants={buttonVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Projects <span className="ml-2">&gt;</span>
          </motion.a>

          <motion.a
            href="#contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-8 rounded-[20px] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 inline-flex items-center justify-center"
            variants={buttonVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
