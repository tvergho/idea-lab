import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { urlFor, dimensionsFor } from 'utils/client';
import Image from 'components/Image';
import PropTypes from 'prop-types';

const serializers = {
  types: {
    image: (props) => {
      const imageUrl = urlFor(props.node).width(1200).url();
      const [width, height] = dimensionsFor(props.node);
      return <Image src={imageUrl} width={width} height={height} responsive />;
    },
  },
};

const TextContent = ({ content }) => {
  return (
    <BlockContent blocks={content} serializers={serializers} dataset={process.env.SANITY_DATASET} projectId={process.env.SANITY_PROJECT_ID} />
  );
};

TextContent.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
};

export default TextContent;
