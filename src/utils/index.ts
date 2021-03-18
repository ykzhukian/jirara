import { useEffect, useState } from 'react';

export const cleanObject = (obj: any) => {
  const result = {} as any;
  Object.entries(obj).forEach(([key, value]) => {
    if (value === 0 || value) {
      result[key] = value;
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(callback, []);
};

export const useDebounce = (action: any, delay: number) => {
  const [debounce, setDebouce] = useState();

  useEffect(
    () => {
      const timer = window.setTimeout(() => setDebouce(action), delay);
      return () => {
        window.clearTimeout(timer);
      };
    },
    [action, delay],
  );

  return debounce;
};
