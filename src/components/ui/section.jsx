import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { cn } from '@/lib/utils';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

// A numbered page section. Its label doubles as a node on the tracing beam:
// centred on the spine on mobile, with a separate dot in the gutter on wide
// screens. Both light up once the beam has reached them.
export const Section = ({ id, index, label, title, children, className }) => {
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start center', 'start start'],
  });
  const [lit, setLit] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', value => setLit(value > 0));

  return (
    <section id={id} className="relative px-4 sm:px-6 py-20 md:py-28">
      {/* Gutter node, aligned with the label */}
      <span
        aria-hidden="true"
        className="absolute left-6 top-[5.3rem] hidden h-4 w-4 items-center justify-center rounded-full border border-white/15 bg-ink md:top-[7.3rem] xl:flex"
      >
        <span
          className={cn(
            'h-1.5 w-1.5 rounded-full transition-[background-color,box-shadow] duration-500',
            lit
              ? 'bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.6)]'
              : 'bg-white/20'
          )}
        />
      </span>

      <motion.div
        // relative, so the content stacks above the beam's centre spine on mobile
        className={cn('relative mx-auto w-full max-w-6xl', className)}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.header
          ref={headerRef}
          className="mb-12 flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={headerVariants}
        >
          <span
            className={cn(
              'rounded-full border bg-ink px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-500',
              lit
                ? 'border-cyan-400/50 text-cyan-300'
                : 'border-white/10 text-gray-500'
            )}
          >
            {index} <span className="opacity-40">/</span> {label}
          </span>
          {/* Solid backing on mobile so the centre spine doesn't run through the title */}
          <h2 className="mt-4 bg-ink px-3 text-4xl text-white md:text-5xl lg:bg-transparent lg:px-0">
            {title}
          </h2>
        </motion.header>

        {children}
      </motion.div>
    </section>
  );
};
