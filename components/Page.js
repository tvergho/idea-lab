import React, { useContext } from 'react';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import GlobalContext from 'lib/GlobalContext';
import PageContext from 'lib/PageContext';
import { defaultResolver, combineResolvers } from 'resolvers';
import { ElementType } from 'lib/types';

/**
 * Component for rendering a page on the website.
 *
 * @param {string} title Title of the current page, for SEO purposes and the address bar.
 * @param {string} description Webpage desription, for SEO purposes.
 * @param {array} pageBuilder Array of sections on the page from the CMS that can be processed by the resolver into the corresponding React elements.
 * @param {function} resolver Optional. Custom resolver to be combined with the default resolver for elements specific to one particular page.
 * @param {boolean} showTitle If true, the page title is displayed at the top of the page.
 * @param {boolean} preview Enables preview mode.
 */
const Page = ({
  title, description, pageBuilder, resolver, showTitle, preview,
}) => {
  const { siteTitle } = useContext(GlobalContext);

  return (
    <PageContext.Provider value={{ preview }}>
      <NextSeo
        title={`${title} | ${siteTitle}`}
        description={description}
      />
      {showTitle && <h4 className="page-title">{title}</h4>}
      {pageBuilder && pageBuilder.map((element) => {
        return combineResolvers(resolver, defaultResolver)(element, { fullPage: true });
      })}
      {preview && (
        <div className="preview">
          <button className="preview-button transparent" type="button" onClick={() => { window.location.href = '/api/exit-preview'; }}>Exit Preview Mode</button>
        </div>
      )}
    </PageContext.Provider>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pageBuilder: PropTypes.arrayOf(ElementType),
  resolver: PropTypes.func,
  showTitle: PropTypes.bool,
  preview: PropTypes.bool,
};

export default Page;
