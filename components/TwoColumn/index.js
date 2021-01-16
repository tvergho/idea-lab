import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import PageContext from 'lib/PageContext';
import PropTypes from 'prop-types';
import { ImageReferenceType, SlugType } from 'lib/types';
import { urlFor, dimensionsFor } from 'utils/client';
import useScrollPosition from 'utils/useScrollPosition';
import useWindowSize from 'utils/useWindowSize';
import ButtonPart from './ButtonPart';
import ContentPart from './ContentPart';
import HeaderPart from './HeaderPart';
import ImagePart from './ImagePart';
import styles from './styles.module.scss';

export const ANIMATION_DURATION = 400;

/**
 * Component that renders a flexible, responsive two-column layout.
 * Supports Sanity block content on one side and an image on the other.
 *
 * @param {string} button Optional. If defined, renders a button that displays the specified text.
 * @param {array} content Sanity block content to render on the text side of the component.
 * @param {ImageReferenceType} icon Optional. If defined, renders an icon to the left of the section title.
 * @param {ImageReferenceType} image Main image to render for the component.
 * @param {string} side 'left' or 'right' – the side on which the image renders.
 * @param {string} title Title of the two column layout.
 * @param {SlugType} buttonPage URL to which to navigate when the button is clicked.
 * @param {boolean} fullPage If true, modifies the styling to render as a child of the full page (as opposed to the child of a section).
 * @param {boolean} isTextButton If true, displays the button as clickable text.
 * @param {boolean} linkTitle If true, links the title to the button URL.
 */
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

  const imageUrl = image ? urlFor(image, preview).width(1080).url() : '/';
  const [width, height] = dimensionsFor(image);
  const iconUrl = urlFor(icon, preview).url();
  const buttonUrl = buttonPage?.current || '/';

  useEffect(() => {
    if (scrolled) setVisible(true);
  }, [scrolled]);

  // Programatically controls the top padding just because it's complicated to manage with CSS alone.
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
      <ImagePart visible={visible} fullPage={fullPage} imageUrl={imageUrl} width={width} height={height} />
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
