import React, { useState } from "react";

export default function useDropdown(items) {
  const [list, setList] = useState(items);
  const [selected, setSelected] = useState(items[0]);

  const handleSelection = (item) => {
    setSelected(item);
  };

  return [list, selected, handleSelection];
}
