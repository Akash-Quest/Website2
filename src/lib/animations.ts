import { cubicBezier, type Variants } from "framer-motion";

/**
 * Premium Motion Presets
 * Smooth, modern animations inspired by Apple, Linear, Stripe & Framer.
 */

const easeOut = cubicBezier(0.22, 1, 0.36, 1);
const smoothEase = cubicBezier(0.16, 1, 0.3, 1);
const easeInOut = cubicBezier(0.45, 0, 0.55, 1);

/* -------------------------------------------------------------------------- */
/*                               Fade Up (Large)                              */
/* -------------------------------------------------------------------------- */

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 1.6,
      delay: i * 0.18,
      ease: smoothEase,
    },
  }),

  exit: {
    opacity: 0,
    y: 30,

    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                              Fade Up (Small)                               */
/* -------------------------------------------------------------------------- */

export const fadeUpSm: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: easeOut,
    },
  }),

  exit: {
    opacity: 0,
    y: 20,

    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                               Fade Left                                    */
/* -------------------------------------------------------------------------- */

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },

  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.85,
      delay: i * 0.12,
      ease: easeOut,
    },
  }),

  exit: {
    opacity: 0,
    x: -30,

    transition: {
      duration: 0.35,
      ease: easeInOut,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                               Fade Right                                   */
/* -------------------------------------------------------------------------- */

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },

  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.85,
      delay: i * 0.12,
      ease: easeOut,
    },
  }),

  exit: {
    opacity: 0,
    x: 30,

    transition: {
      duration: 0.35,
      ease: easeInOut,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                               Scale + Fade                                 */
/* -------------------------------------------------------------------------- */

export const scaleFade: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },

  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.85,
      delay: i * 0.12,
      ease: easeOut,
    },
  }),

  exit: {
    opacity: 0,
    scale: 0.97,

    transition: {
      duration: 0.35,
      ease: easeInOut,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                              Fade Only                                     */
/* -------------------------------------------------------------------------- */

export const fade: Variants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      duration: 0.9,
      ease: easeInOut,
    },
  },

  gone: {
    opacity: 0,

    transition: {
      duration: 0.4,
      ease: easeInOut,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                            Stagger Container                               */
/* -------------------------------------------------------------------------- */

export const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                         Reveal From Bottom                                 */
/* -------------------------------------------------------------------------- */

export const revealUp: Variants = {
  hidden: {
    y: "100%",
  },

  visible: (i: number = 0) => ({
    y: "0%",

    transition: {
      duration: 0.9,
      delay: i * 0.1,
      ease: easeOut,
    },
  }),
};

/* -------------------------------------------------------------------------- */
/*                             Image Zoom                                     */
/* -------------------------------------------------------------------------- */

export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.08,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 1.1,
      ease: easeOut,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                              Backward Alias                                */
/* -------------------------------------------------------------------------- */

export const contentVariants = fadeUp;