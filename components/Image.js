import React from 'react';
import useWindowSize from 'utils/useWindowSize';

/**
 * Custom image component for easy image display and optimization.
 *
 * @param {string} width Specifies the width of the image through inline styling.
 * @param {string} height Specifies the width of the image through inline styling.
 * @param {string} objectFit Corresponds to the CSS object-fit attribute.
 * @param {string} src Required. Image source.
 * @param {string} alt Image alt text.
 * @param {boolean} responsive If true, overrides specified width and height attributes and makes the image take up the full width of the container.
 * @param {boolean} heightConstrained Constrains a responsive image by the specified height on devices greater than 1200px in width.
 * @param {boolean} widthConstrained Constrains a responsive image by the specified width.
 * @param {boolean} aspectConstrained Uses the CSS padding-bottom trick to render an image the size of its container but locked to one aspect ratio.
 * @param {string} minHeight Minimum height.
 * @param {string} minWidth Minimum width.
 * @param {object} style Other style attributes applied inline to the image.
 * @param {string} className Applied to the image or image container.
 */
const Image = ({
  width, height, objectFit, src, alt, responsive, heightConstrained, widthConstrained, aspectConstrained, minHeight, minWidth, style, className,
}) => {
  const { width: windowWidth } = useWindowSize();
  const heightLocked = heightConstrained && windowWidth > 1200;

  if (aspectConstrained) {
    return (
      <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: `${(height / width) * 100}%` }} className={className || ''}>
        <img src={src}
          style={{
            ...style,
            objectFit,
            width: responsive && !widthConstrained ? '100%' : width,
            height: responsive && !heightLocked ? '100%' : height,
            maxWidth: responsive ? '100%' : 'auto',
            maxHeight: responsive ? '100%' : 'auto',
            minHeight,
            minWidth,
          }}
          alt={alt || ''}
          className="image-square"
        />
      </div>
    );
  }
  return (
    <img src={src}
      style={{
        ...style,
        objectFit,
        width: (responsive && !widthConstrained) ? '100%' : width,
        height: (responsive && !heightLocked) ? '100%' : height,
        maxWidth: responsive ? '100%' : 'auto',
        maxHeight: responsive ? '100%' : 'auto',
        minHeight,
        minWidth,
      }}
      alt={alt || ''}
      className={className || ''}
    />
  );
};

export default Image;
