import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = <P extends object>(
  Component: React.ComponentType<P>,
  idName: string
) => {
  return function HOC(props: P) {
    return (
      <motion.section
        id={idName}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 sm:px-16 py-16 overflow-hidden relative z-0"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component {...props} />
      </motion.section>
    );
  };
};

export default SectionWrapper;