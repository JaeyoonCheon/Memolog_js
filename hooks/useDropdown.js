import React, { useState } from "react";

export default function useDropdown(items) {
  const [list, setList] = useState(items);
  const [selected, setSelected] = useState(items[0].label);
  const [open, setOpen] = useState(false);

  const handleSelection = (item) => {
    setSelected(item);
  };
  const toggleOpen = () => {
    setOpen(!open);
  };

  return { list, selected, open, handleSelection, toggleOpen };
}
