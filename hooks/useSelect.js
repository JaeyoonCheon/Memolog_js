import React, { useState } from "react";

export default function useSelect(list, initialValue) {
  const [items, setItems] = useState(list);
  const [selected, setSelected] = useState(initialValue || list[0]);
  const [isOpened, setIsOpened] = useState(false);

  const handleSelection = (item) => {
    setSelected(item);
  };
  const handleIsOpened = (flag) => {
    setIsOpened(flag);
  };

  return {
    items,
    selected,
    isOpened,
    handleSelection,
    handleIsOpened,
  };
}
