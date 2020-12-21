import homeResolver from './homeResolver';
import defaultResolver from './defaultResolver';

// Returns a resolver that attempts to apply to resolver1 first.
// Then, if resolver 1 fails, resolver2 is attempted.
const combineResolvers = (resolver1, resolver2) => {
  return (item) => {
    let element = null;
    if (resolver1) element = resolver1(item);
    if (!element) element = resolver2(item);

    return element;
  };
};

export { homeResolver, defaultResolver, combineResolvers };
