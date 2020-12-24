import React from 'react';
import Page from 'components/Page';
import PropTypes from 'prop-types';
import client from 'utils/client';
import { aboutResolver } from 'resolvers';
import { ElementType } from 'lib/types';

const query = '*[_type == "page" && slug.current == "about"][0]';

const About = ({ title = '', description = '', pageBuilder }) => {
  return (
    <>
      <Page
        title={title}
        description={description}
        pageBuilder={pageBuilder}
        resolver={aboutResolver}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const data = await client.fetch(query) || {};
  const { title = null, description = null, pageBuilder = null } = data;

  return {
    props: { title, description, pageBuilder },
  };
};

About.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pageBuilder: PropTypes.arrayOf(ElementType),
};

export default About;
