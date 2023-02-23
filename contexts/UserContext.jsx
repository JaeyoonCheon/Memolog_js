import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const userState = useState(null);

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}

export function useUserContext() {
  const userState = useContext(UserContext);

  if (!userState) {
    throw new Error("UserContext not in Provider");
  }

  return userState;
}
