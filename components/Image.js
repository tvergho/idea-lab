import React from 'react';
import useWindowSize from 'utils/useWindowSize';

const Image = ({
  width, height, objectFit, src, alt, responsive, heightConstrained, widthConstrained, square, minHeight, minWidth, style,
}) => {
  const { width: windowWidth } = useWindowSize();
  const heightLocked = heightConstrained && windowWidth > 1200;

  if (square) {
    return (
      <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: `${(height / width) * 100}%` }}>
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
    />
  );
};

export default Image;
