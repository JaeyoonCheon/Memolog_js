import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIconButton } from "./IconButton";

const ToggleButton = ({
  items,
  selected,
  handleSelection,
  size = 24,
  containerStyle = {},
}) => {
  const opposite = items.filter((item) => item.value !== selected.value)[0];

  return (
    <MaterialCommunityIconButton
      iconName={selected.label}
      color="#000000"
      size={size}
      containerStyle={containerStyle}
      onPress={() => handleSelection(opposite)}
    ></MaterialCommunityIconButton>
  );
};

export default ToggleButton;
