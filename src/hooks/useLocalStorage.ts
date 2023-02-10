import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialState: T | (() => T)) {
  const [values, setValues] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialState === 'function') return (initialState as () => T)();
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(values));
  }, [key, values]);

  return [values, setValues] as [typeof values, typeof setValues];
}
