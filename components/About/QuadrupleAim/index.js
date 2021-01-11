import React, { useState, useEffect, useRef } from 'react';
import Image from 'components/Image';
import { motion, useAnimation } from 'framer-motion';
import useScrollPosition from 'utils/useScrollPosition';
import styles from './styles.module.scss';

const QuadrupleAim = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const scrolled = useScrollPosition(ref, 160);
  const controls = useAnimation();

  useEffect(() => {
    if (scrolled) setVisible(true);
  }, [scrolled]);

  useEffect(() => {
    if (visible) controls.start({ scale: [0, 1.2, 1], rotate: [180, 10, 0] });
  }, [visible]);

  return (
    <div className={styles['image-container']} ref={ref}>
      <motion.div
        initial={{ scale: 0, rotate: 180 }}
        animate={controls}
        transition={{ duration: 0.7, transition: 'easeInOut' }}
      >
        <Image
          src="/quadruple-aim.png"
          aspectConstrained
          width={450}
          height={450}
          className={styles.image}
          objectFit="scale-down"
        />
      </motion.div>
    </div>
  );
};

export default QuadrupleAim;
