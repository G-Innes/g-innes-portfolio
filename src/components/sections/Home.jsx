import { motion } from 'motion/react';
import { TechStrip } from '../TechStrip';
import { BackgroundBeams } from '../ui/background-beams';

// Animation variants
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-32 pb-12 sm:px-8 md:px-16 lg:px-24"
    >
      {/* Static glow behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-[720px] w-[1100px] max-w-none -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(34,211,238,0.13),transparent)]"
      />

      {/* Background Beams Animation */}
      <BackgroundBeams />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="mb-6 font-mono text-sm text-cyan-300"
          variants={itemVariants}
        >
          &lt;Hi, I&apos;m Grant /&gt;
        </motion.p>
        <motion.h1
          className="mb-8 max-w-5xl text-left text-5xl leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          variants={itemVariants}
        >
          {/* Headline alternatives (plain part / gradient part):
              "I turn ideas into" / "working software"
              "From rough idea" / "to production" */}
          Your idea,{' '}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text text-transparent sm:whitespace-nowrap">
            built and shipped
          </span>
        </motion.h1>
        <motion.p
          className="mb-10 max-w-2xl text-left text-base leading-relaxed text-gray-400 md:text-lg"
          variants={itemVariants}
        >
          I&apos;m a full-stack developer who takes products from first sketch
          to production, on web and mobile. Interface, API, database and
          deployment: one person who can own all of it.
        </motion.p>
        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          variants={itemVariants}
        >
          {/* Motion owns the transform here, so CSS only transitions the paint properties */}
          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 px-8 py-3 font-semibold text-zinc-950 transition-shadow duration-200 hover:shadow-[0_0_24px_rgba(34,211,238,0.45)]"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Projects <span className="ml-2">&gt;</span>
          </motion.a>

          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-3 font-medium text-white transition-[border-color,background-color] duration-200 hover:border-white/40 hover:bg-white/5"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto mt-16 w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <TechStrip />
      </motion.div>
    </section>
  );
};
