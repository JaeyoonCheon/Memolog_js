import React, { useState } from "react";

export default function useDropdown(values, initialValue) {
  const [items, setItems] = useState(values);
  const [selected, setSelected] = useState(initialValue || values[0]);
  const [isOpened, setIsOpened] = useState(false);

  const handleSelection = (item) => {
    setSelected(item);
  };
  const toggleOpen = () => {
    setIsOpened(!isOpened);
  };

  return { items, selected, isOpened, handleSelection, toggleOpen };
}
