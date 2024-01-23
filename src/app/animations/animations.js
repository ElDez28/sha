export const sectionsAnimationsVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      type: "tween",
      duration: 1,
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const slideFromLeft = {
  hidden: { opacity: 0, x: -35 },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      type: "tween",
      duration: 0.6,
      delay: 0.4,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.6,
    },
  },
};
export const slideFromRight = {
  hidden: { opacity: 0, x: 35 },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      type: "tween",
      duration: 0.6,
      delay: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.6,
    },
  },
};
