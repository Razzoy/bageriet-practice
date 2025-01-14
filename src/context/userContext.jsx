import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    // Når komponentet mounter, check om userData gindes som state, hvis ikke
    // Så check om userData findes i sessionStorage, hvis ja, så sæt vores state
    // til indholdet i sessionStorage
    if (!userData) {
      if (sessionStorage.getItem("userData")) {
        setUserData(JSON.parse(sessionStorage.getItem("userData")));
      }
    }
    //hvis user datas access token findes, så sæt userData i vores sessionStorage
    if (userData?.access_token) {
      sessionStorage.setItem("userData", JSON.stringify(userData));
    }
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
