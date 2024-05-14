import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    function checkUserData(event) {
      if (event.key === key) {
        const newValue = JSON.parse(event.newValue);
        if (newValue !== storedValue) { // Comparamos con el valor actual
          setStoredValue(newValue);
        }
      }
    }

    window.addEventListener('storage', checkUserData);

    return () => {
      window.removeEventListener('storage', checkUserData);
    };
  }, [key, storedValue]); // Añadimos storedValue a las dependencias del efecto

  const setValue = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
