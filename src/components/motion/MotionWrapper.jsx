import { motion } from 'motion/react';
import PropTypes from 'prop-types';

// Reusable animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

export const popIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    }
  },
};

// Container with stagger children support
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Motion wrapper component for scroll-triggered animations
export const MotionDiv = motion.div;

// Stagger container component
export const StaggerContainer = ({
  children,
  className,
  staggerDelay = 0.1,
  initialDelay = 0,
  viewport = { once: true, margin: '-50px' },
  ...props
}) => (
  <motion.div
    className={className}
    variants={staggerContainer(staggerDelay, initialDelay)}
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    {...props}
  >
    {children}
  </motion.div>
);

StaggerContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  staggerDelay: PropTypes.number,
  initialDelay: PropTypes.number,
  viewport: PropTypes.object,
};

// Individual animated item component
export const MotionItem = ({
  children,
  className,
  variants = fadeInUp,
  transition = { duration: 0.5, ease: 'easeOut' },
  ...props
}) => (
  <motion.div
    className={className}
    variants={variants}
    transition={transition}
    {...props}
  >
    {children}
  </motion.div>
);

MotionItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variants: PropTypes.object,
  transition: PropTypes.object,
};

// Standalone scroll-triggered animation (replaces RevealOnScroll)
export const ScrollReveal = ({
  children,
  className,
  variants = fadeInUp,
  transition = { duration: 0.6, ease: 'easeOut' },
  viewport = { once: true, margin: '-50px' },
  ...props
}) => (
  <motion.div
    className={className}
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    transition={transition}
    {...props}
  >
    {children}
  </motion.div>
);

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variants: PropTypes.object,
  transition: PropTypes.object,
  viewport: PropTypes.object,
};
