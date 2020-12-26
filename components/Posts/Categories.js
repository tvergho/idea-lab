import React from 'react';
import Link from 'next/link';
import { CategoryType } from 'lib/types';
import PropTypes from 'prop-types';

const Categories = ({ categories, className }) => {
  if (!categories) return null;
  return (
    <h6 className={className}>{categories
      .map(({ title: catTitle, slug = {} }, i) => <Link href={`/category/${slug.current}`} key={slug.current}>{i < categories.length - 1 ? `${catTitle}, ` : catTitle}</Link>)}
    </h6>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(CategoryType),
  className: PropTypes.string,
};

export default Categories;
