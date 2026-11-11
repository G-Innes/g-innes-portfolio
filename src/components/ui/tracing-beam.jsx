'use client';
import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { cn } from '@/lib/utils';

// Scroll progress line - the spine each <Section> hangs its node off. The
// fill is a single full-height element scaled on the Y axis, so scrolling only
// ever touches a compositor transform - no layout, no SVG repaint, and nothing
// to re-measure when content resizes.
export const TracingBeam = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end end'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 80,
  });

  return (
    <div
      ref={ref}
      className={cn('relative mx-auto h-full w-full max-w-7xl', className)}
    >
      {/* Mobile: a centre spine showing between the cards. Wide screens: the
          left gutter. Hidden in between, where it would clip the card edges. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 lg:hidden xl:left-6 xl:block xl:translate-x-0"
      >
        <div className="absolute inset-0 mx-auto w-px bg-white/10">
          <motion.div
            style={{ scaleY }}
            className="h-full w-full origin-top bg-gradient-to-b from-blue-500 via-cyan-400 to-green-500 will-change-transform"
          />
        </div>
      </div>
      {children}
    </div>
  );
};
