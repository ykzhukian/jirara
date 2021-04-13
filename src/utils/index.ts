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

export const useDebounce = <V>(value: V, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(
    () => {
      const timer = window.setTimeout(() => {
        setDebounceValue(value);
      }, delay);
      return () => {
        window.clearTimeout(timer);
      };
    },
    [value, delay],
  );

  return debounceValue;
};

export const useArray = <T>(initalArray: T[]) => {
  const [value, setValue] = useState(initalArray);

  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};
