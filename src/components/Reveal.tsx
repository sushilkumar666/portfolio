import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: JSX.Element;
  width?: "fit-content" | '100%';
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    
    if (isInView) {
        mainControls.start('visible');
        slideControls.start('visible');
    }
  }, [isInView]); // Dependency on isInView

  return (
    <div  ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.45 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 4,
          bottom: 4,
          backgroundImage: "linear-gradient(to right top, #1f1e1a, #1f1d19, #1e1c17, #1e1b16, #1e1a15, #1f1a13, #1f1a12, #201a10, #211c0c, #201d09, #1e2006, #1b2205)",
          zIndex: 20,
        }}
      />
    </div>
  );
};
