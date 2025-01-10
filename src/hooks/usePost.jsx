import { useEffect, useState } from "react";

export const usePost = ({ url, body, token }) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    
    async function fetchData() {
      setIsLoading(true);

      const options = {
        method: "POST", //Metoden der fetches med, sender noget til serveren
        body : body, //Det der sendes med eksempelvis email og password
        headers: token ? {Authorization: `Bearer ${token}`} : {}, //Token der laves hvis brugeren findes når de logger ind, og indeholder information om hvem brugeren er (Ens egen data)
      };

      try {
        const data = await fetch(url, options);
        const res = await data.json();
        setData(res);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

  }, [url, body]);

  return { data, error, isLoading };
};