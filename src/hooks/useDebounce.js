import { useState, useEffect } from 'react';

/**
 * useDebounce delays the execution of the search query.
 * so it will avoid unnecessary re-renders during rapid input changes in the code.
 * 
 * @param {string} value -  ]value 
 * @param {number} delay 
 * @returns {string} - The debounced value
 */
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
