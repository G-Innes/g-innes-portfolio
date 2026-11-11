import { motion, useMotionValue } from 'motion/react';
import { cn } from '@/lib/utils';

const SPOT_SIZE = 480;

const GRADIENT =
  'bg-[radial-gradient(circle_farthest-side_at_0_100%,#22d3ee,transparent),radial-gradient(circle_farthest-side_at_100%_0,#3b82f6,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#22c55e,transparent),radial-gradient(circle_farthest-side_at_50%_50%,#06b6d4,transparent),radial-gradient(circle_farthest-side_at_0_0,#3b82f6,#141316)]';

// Flat card with a hairline border. On hover a soft light follows the cursor,
// showing through the 1px border and faintly through the surface. The light is
// a fixed-size element moved with a transform, so it never triggers a repaint.
// `featured` swaps the hairline for the permanent gradient border and glow -
// use it for one card per page at most.
export const SpotlightCard = ({
  children,
  className,
  containerClassName,
  featured = false,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handlePointerMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - SPOT_SIZE / 2);
    y.set(clientY - top - SPOT_SIZE / 2);
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className={cn('group relative rounded-3xl p-px', containerClassName)}
    >
      {featured && (
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute inset-0 rounded-3xl opacity-50 blur-2xl',
            GRADIENT
          )}
        />
      )}
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-0 overflow-hidden rounded-3xl',
          featured ? GRADIENT : 'bg-white/10'
        )}
      >
        <motion.div
          style={{ x, y, width: SPOT_SIZE, height: SPOT_SIZE }}
          className="absolute top-0 left-0 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.6),transparent)] opacity-0 transition-opacity duration-300 will-change-transform group-hover:opacity-100"
        />
      </div>

      <div
        className={cn('relative rounded-[23px] bg-surface/95', className)}
      >
        {children}
      </div>
    </div>
  );
};
