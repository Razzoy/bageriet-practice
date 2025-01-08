import { useEffect, useState } from "react";

export function useGet(url) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect( () => {
    setIsLoading(true);
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [url]);

  return {data, error, isLoading}
}
