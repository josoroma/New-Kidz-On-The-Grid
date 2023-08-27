import { useState, useEffect } from 'react';

// Custom hook to generate a new key every time the content changes
function useForceRerender(content) {
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    setKey(Math.random());
  }, [content]);

  return key;
}

export default useForceRerender;