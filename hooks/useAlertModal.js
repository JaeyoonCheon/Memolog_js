import React from "react";
import { useModalContext } from "../contexts/ModalContext";

export default function useAlertModal() {
  const value = useModalContext();

  const [modalState, setModalState] = value;

  function enableModal({ type, props }) {
    setModalState({ type, props });
  }
  function disableModal() {
    setModalState(null);
  }

  return {
    modalState,
    setModalState,
    enableModal,
    disableModal,
  };
}
