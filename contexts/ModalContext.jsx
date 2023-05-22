import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalContextProvider({ children }) {
  const modalState = useState(null);

  return (
    <ModalContext.Provider value={modalState}>{children}</ModalContext.Provider>
  );
}

export function useModalContext() {
  const modalState = useContext(ModalContext);

  return modalState;
}
