import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Section({ current, name, children }) {
  return (
    <AnimatePresence mode="wait">
      {current === name && (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
