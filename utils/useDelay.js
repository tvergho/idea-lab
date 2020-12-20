import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

const useDelay = (prop, delay = 500, delayOpen = false, delayClose = true, useDebounce = false) => {
  const [delayedProp, setDelayedProp] = useState(prop);

  const delayFunc = () => {
    setTimeout(() => { setDelayedProp(prop); }, delay);
  };

  useEffect(() => {
    if ((!prop && delayClose) || (prop && delayOpen)) {
      if (useDebounce) debounce(delayFunc, delay);
      else delayFunc();
    } else setDelayedProp(prop);
  }, [prop]);

  return delayedProp;
};

export default useDelay;
