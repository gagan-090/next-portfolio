'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const PageTransition = ({ children }) => {
  return (
    // Slide only (no fade from 0) so server-rendered content is visible at first paint — keeps LCP fast.
    <motion.div
      initial={{ y: 16 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-between"
    >
      {children}
    </motion.div>
  );
};
export default PageTransition;
