import { useEffect } from 'react';

export const cleanObject = (obj) => {
  const result = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (value === 0 || value) {
      result[key] = value;
    }
  });
  return result;
};

export const useMount = (callback) => {
  useEffect(callback, []);
};

export const useDebounce = (action, delay) => {
  let timer;
  return () => {
    if (timer) {
      window.clearTimeout(timer);
    }
    timer = window.setTimeout(() => {
      action();
    }, delay);
  };
};
