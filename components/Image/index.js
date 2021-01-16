import React from 'react';
import styles from './styles.module.scss';

/**
 * Custom image component for easy image display and optimization.
 *
 * @param {string} width Specifies the width of the image through inline styling.
 * @param {string} height Specifies the width of the image through inline styling.
 * @param {string} objectFit Corresponds to the CSS object-fit attribute.
 * @param {string} src Required. Image source.
 * @param {string} alt Image alt text.
 * @param {boolean} responsive If true, overrides specified width and height attributes and makes the image take up the full width of the container.
 * @param {boolean} fullHeight Has an image occupy the full height of its container.
 * @param {boolean} aspectConstrained Uses the CSS padding-bottom trick to render an image the size of its container but locked to one aspect ratio.
 * @param {string} minHeight Minimum height.
 * @param {string} minWidth Minimum width.
 * @param {object} style Other style attributes applied inline to the image.
 * @param {string} className Applied to the image or image container.
 */
const Image = ({
  width, height, objectFit, src, alt, responsive, fullHeight, aspectConstrained, minHeight, minWidth, style, className,
}) => {
  let finalClass = className || '';
  if (responsive) finalClass += ` ${styles.responsive}`;
  if (fullHeight) finalClass += ` ${styles['full-height']}`;

  if (aspectConstrained) {
    return (
      <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: `${(height / width) * 100}%` }} className={className || ''}>
        <img src={src}
          style={{
            ...style,
            objectFit,
            maxWidth: responsive ? '100%' : 'auto',
            maxHeight: responsive ? '100%' : 'auto',
            minHeight,
            minWidth,
          }}
          width={width}
          height={height}
          alt={alt || ''}
          className={styles['image-square']}
        />
      </div>
    );
  }
  return (
    <img src={src}
      style={{
        ...style,
        objectFit,
        maxWidth: responsive ? '100%' : 'auto',
        maxHeight: responsive ? '100%' : 'auto',
        minHeight,
        minWidth,
      }}
      width={width}
      height={height}
      alt={alt || ''}
      className={finalClass}
    />
  );
};

export default Image;
