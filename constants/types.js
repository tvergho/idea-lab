/* eslint-disable consistent-return */
import PropTypes from 'prop-types';

export const NavLinkType = PropTypes.shape({
  display: PropTypes.string,
  link: PropTypes.string,
  dropdown: PropTypes.arrayOf(PropTypes.shape({
    display: PropTypes.string,
    link: PropTypes.string,
  })),
});

export const ElementType = PropTypes.shape({
  _key: PropTypes.string.isRequired,
  _type: PropTypes.string.isRequired,
});

export const ImageReferenceType = PropTypes.shape({
  _type: (props, propName) => {
    if (props[propName] !== 'image') return new Error('Invalid image prop type supplied to component.');
  },
  asset: PropTypes.shape({
    _type: (props, propName) => {
      if (props[propName] !== 'reference') return new Error('Invalid reference prop type supplied to component.');
    },
    _ref: PropTypes.string,
  }),
});
