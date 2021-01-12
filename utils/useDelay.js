import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

/**
 * Custom hook for animation purposes to delay a state change for a specified period of time;
 * for instance, to delay the removal of an element from the DOM until after an animation is completed.
 *
 * @param {*} prop Prop to keep as state.
 * @param {number} delay Default 500. Number of milleseconds to delay the change.
 * @param {boolean} delayOpen Default false. If true, delays a false -> true state change.
 * @param {boolean} delayClose Default true. If true, delays a true -> false state change.
 * @param {boolean} useDebounce Experimental. Enables debounce functionality on the value change.
 */
const useDelay = (prop, delay = 500, delayOpen = false, delayClose = true, useDebounce = false) => {
  const [delayedProp, setDelayedProp] = useState(prop);

  const delayFunc = () => {
    setTimeout(() => { setDelayedProp(prop); }, delay);
  };

  useEffect(() => {
    if ((!prop && delayClose) || (prop && delayOpen)) {
      if (useDebounce) debounce(() => { setDelayedProp(prop); }, delay)();
      else delayFunc();
    } else setDelayedProp(prop);
  }, [prop]);

  return delayedProp;
};

export default useDelay;
