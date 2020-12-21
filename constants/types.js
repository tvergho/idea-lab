/* eslint-disable consistent-return */
import PropTypes from 'prop-types';

const validateValueFunction = (value) => {
  return (props, propName) => {
    if (props[propName] !== value) return new Error(`Invalid ${value} prop type supplied to component.`);
  };
};

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
  _type: validateValueFunction('image'),
  asset: PropTypes.shape({
    _type: validateValueFunction('reference'),
    _ref: PropTypes.string,
  }),
});

export const SlugType = PropTypes.shape({
  _type: validateValueFunction('slug'),
  current: PropTypes.string,
});
