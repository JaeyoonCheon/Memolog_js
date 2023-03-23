import React, { createContext, useContext, useState } from "react";

const TokenContext = createContext();

export function TokenContextProvider({ children }) {
  const tokenState = useState(null);

  return (
    <TokenContext.Provider value={tokenState}>{children}</TokenContext.Provider>
  );
}

export function useTokenContext() {
  const tokenState = useContext(TokenContext);

  if (!tokenState) {
    throw new Error("TokenContext not in Provider");
  }

  return tokenState;
}
