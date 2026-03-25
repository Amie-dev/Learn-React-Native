import { createContext, useContext } from "react";

export const userContext = createContext();

export const useUserContext = () => {
  const context = useContext(userContext);

  if (!context) {
    throw new Error("Must wrap inside UserContextProvider");
  }

  return context; // ✅ IMPORTANT
};

export const UserContextProvider = ({ children }) => {
  const user = {
    name: "Aminul Islam",
    age: 20,
    G: "M",
  };

  return (
    <userContext.Provider value={{ user }}>
      {children} {/* ✅ FIXED */}
    </userContext.Provider>
  );
};