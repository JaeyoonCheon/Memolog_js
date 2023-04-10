import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialCommunityIconButton } from "./IconButton";

const ToggleButton = ({ items, selected, handleSelection, size = 24 }) => {
  const opposite = items.filter((item) => !item)[0];
  console.log(selected);

  return (
    <MaterialCommunityIconButton
      color="#000000"
      size={size}
      iconName={selected.label}
      onPress={() => handleSelection(opposite)}
    ></MaterialCommunityIconButton>
  );
};

export default ToggleButton;

const styles = StyleSheet.create({});
