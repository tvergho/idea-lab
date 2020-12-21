import React from 'react';
import PropTypes from 'prop-types';
import { ImageReferenceType, SlugType } from 'constants/types';
import imageUrlBuilder from '@sanity/image-url';
import client from 'utils/client';
import Image from 'next/image';
import { useRouter } from 'next/router';
import BlockContent from '@sanity/block-content-to-react';
import useWindowSize from 'utils/useWindowSize';
import styles from './styles.module.scss';

const builder = imageUrlBuilder(client);
const urlFor = (source) => {
  return builder.image(source);
};

const TwoColumn = ({
  button, content, icon, image, side, title, buttonPage,
}) => {
  const router = useRouter();
  const isReversed = side === 'right';
  const imageUrl = urlFor(image).width(600).url();
  const iconUrl = urlFor(icon).url();
  const buttonUrl = buttonPage?.current || '/';

  return (
    <div className={styles['two-column']} style={{ flexDirection: isReversed ? 'row-reverse' : 'row' }}>
      <div className={styles['main-image']}>
        <Image src={imageUrl} layout="responsive" width={540} height={360} objectFit="cover" />
      </div>

      <div className={styles.text}>
        <div className={styles['text-row']}>
          {icon && <Image src={iconUrl} layout="fixed" width={55} height={55} className={styles.icon} />}
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.divider} />
        <div className={styles.content}>
          <BlockContent blocks={content} />
        </div>
        {button && <button onClick={() => { router.push(buttonUrl); }} type="button" className={styles['cta-button']}>{button}</button>}
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
};

export default TwoColumn;
