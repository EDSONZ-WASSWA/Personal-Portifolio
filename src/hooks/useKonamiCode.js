import { useEffect, useState } from 'react';

export const useKonamiCode = (callback) => {
  const [input, setInput] = useState([]);
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 
    'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 
    'ArrowLeft', 'ArrowRight', 
    'b', 'a'
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newInput = [...input, e.key].slice(-konamiCode.length);
      setInput(newInput);

      if (newInput.join(',') === konamiCode.join(',')) {
        callback();
        setInput([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input, callback]);

  return null;
};
