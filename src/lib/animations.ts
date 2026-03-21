/**
 * Shared Framer Motion animation variants.
 * Using `as const` and explicit types to satisfy framer-motion v12 Variants typing.
 */

export const easeOut = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

/** Use with a `custom` prop on the motion element for staggered delays */
export const fadeUpDelay = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut, delay },
  },
});

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

export const slideLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: easeOut, delay },
  },
});

export const slideRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: easeOut, delay },
  },
});
