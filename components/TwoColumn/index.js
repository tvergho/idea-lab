import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import PageContext from 'lib/PageContext';
import PropTypes from 'prop-types';
import { ImageReferenceType, SlugType } from 'lib/types';
import { urlFor } from 'utils/client';
import useScrollPosition from 'utils/useScrollPosition';
import useWindowSize from 'utils/useWindowSize';
import ButtonPart from './ButtonPart';
import ContentPart from './ContentPart';
import HeaderPart from './HeaderPart';
import ImagePart from './ImagePart';
import styles from './styles.module.scss';

export const ANIMATION_DURATION = 400;

const TwoColumn = ({
  button, content, icon, image, side, title, buttonPage, fullPage, isTextButton, linkTitle,
}) => {
  const { preview } = useContext(PageContext);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [paddingTop, setPaddingTop] = useState('110px');

  const scrolled = useScrollPosition(ref, 200);
  const { isMobile } = useWindowSize();
  const isReversed = side === 'right';

  const imageUrl = image ? urlFor(image, preview).width(1200).url() : '/';
  const iconUrl = urlFor(icon, preview).url();
  const buttonUrl = buttonPage?.current || '/';

  useEffect(() => {
    if (scrolled) setVisible(true);
  }, [scrolled]);

  useEffect(() => {
    if (fullPage) setPaddingTop(isMobile ? '25px' : '50px');
    else setPaddingTop(isMobile ? '60px' : '110px');
  }, [isMobile]);

  return (
    <div
      className={fullPage ? `${styles['two-column']} ${styles.unbordered}` : styles['two-column']}
      style={{ flexDirection: isReversed ? 'row-reverse' : 'row', paddingTop }}
      ref={ref}
    >
      <ImagePart visible={visible} fullPage={fullPage} imageUrl={imageUrl} />
      <div className={styles.text}>
        <HeaderPart visible={visible} iconUrl={iconUrl} title={title} linkTitle={linkTitle} buttonUrl={buttonUrl} />
        <ContentPart visible={visible} content={content} />
        <ButtonPart visible={visible} button={button} buttonUrl={buttonUrl} isTextButton={isTextButton} />
      </div>
    </div>
  );
};

TwoColumn.propTypes = {
  button: PropTypes.string,
  side: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.string]),
  image: ImageReferenceType,
  icon: ImageReferenceType,
  buttonPage: SlugType,
  fullPage: PropTypes.bool,
  isTextButton: PropTypes.bool,
  linkTitle: PropTypes.bool,
};

export default TwoColumn;
