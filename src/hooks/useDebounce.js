import { useEffect, useState } from "react";

function useDebounce(val, time = 1000) {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(val);
    }, time);

    return () => clearTimeout(timer);
  }, [val]);

  return debouncedSearchTerm;
}

export default useDebounce;
