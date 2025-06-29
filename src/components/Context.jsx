import { createContext, useState } from "react";

export const MyContext = createContext();

export const ClientProvider = ({ children }) => {
  const [hero, setHero] = useState("mahesh babu");
  return (
    <MyContext.Provider value={[{ captain: "Rohit Sharma" }, hero, setHero]}>
      {children}
    </MyContext.Provider>
  );
};
