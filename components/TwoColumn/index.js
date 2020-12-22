import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ImageReferenceType, SlugType } from 'constants/types';
import { urlFor } from 'utils/client';
import Image from 'next/image';
import { useRouter } from 'next/router';
import BlockContent from '@sanity/block-content-to-react';
import { motion } from 'framer-motion';
import useScrollPosition from 'utils/useScrollPosition';
import useWindowSize from 'utils/useWindowSize';
import styles from './styles.module.scss';

const ANIMATION_DURATION = 400;

const TwoColumn = ({
  button, content, icon, image, side, title, buttonPage, fullPage,
}) => {
  const router = useRouter();
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const scrolled = useScrollPosition(ref, 200);
  const { isMobile } = useWindowSize();

  const isReversed = side === 'right';

  const imageUrl = image ? urlFor(image).width(600).url() : '/';
  const iconUrl = urlFor(icon).url();
  const buttonUrl = buttonPage?.current || '/';

  useEffect(() => {
    if (scrolled) setVisible(true);
  }, [scrolled]);

  const imageComponent = () => {
    return (
      <motion.div
        className={styles['main-image']}
        animate={{ opacity: visible ? 1 : 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: (ANIMATION_DURATION + 200) / 1000, ease: 'easeOut' }}
        style={{ width: fullPage ? '50%' : '45%' }}
      >
        <Image src={imageUrl} layout="responsive" width={540} height={360} />
      </motion.div>
    );
  };

  const headerComponent = () => {
    return (
      <motion.div
        className={styles['header-animator']}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 15 }}
        transition={{ duration: ANIMATION_DURATION / 1000, ease: 'easeOut', delay: 0.1 }}
      >
        <div className={styles['text-row']}>
          {icon && (
            <div className={styles.icon}>
              <Image src={iconUrl} layout="fixed" width={55} height={55} />
            </div>
          )}
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.divider} />
      </motion.div>
    );
  };

  const contentComponent = () => {
    return (
      <motion.div
        className={styles.content}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 15 }}
        transition={{ duration: ANIMATION_DURATION / 1000, ease: 'easeOut', delay: 0.2 }}
      >
        <BlockContent blocks={content} />
      </motion.div>
    );
  };

  const buttonComponent = () => {
    return (
      <motion.div
        className={styles['button-animator']}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 15 }}
        transition={{ duration: ANIMATION_DURATION / 1000, ease: 'easeOut', delay: 0.2 }}
      >
        {button && <button onClick={() => { router.push(buttonUrl); }} type="button" className={styles['cta-button']}>{button}</button>}
      </motion.div>
    );
  };

  const paddingTop = () => {
    if (fullPage) return isMobile ? '25px' : '50px';
    else return isMobile ? '60px' : '110px';
  };

  return (
    <div
      className={styles['two-column']}
      style={{ flexDirection: isReversed ? 'row-reverse' : 'row', paddingTop: paddingTop() }}
      ref={ref}
    >
      {imageComponent()}
      <div className={styles.text}>
        {headerComponent()}
        {contentComponent()}
        {buttonComponent()}
      </div>
    </div>
  );
};

TwoColumn.propTypes = {
  button: PropTypes.string,
  side: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
  image: ImageReferenceType,
  icon: ImageReferenceType,
  buttonPage: SlugType,
  fullPage: PropTypes.bool,
};

export default TwoColumn;
