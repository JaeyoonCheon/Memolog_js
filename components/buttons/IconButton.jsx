import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const MaterialIconButton = ({
  onPress,
  iconName,
  size,
  color,
  containerStyle = {},
}) => {
  return (
    <TouchableOpacity style={[styles.block, containerStyle]} onPress={onPress}>
      <MaterialIcons name={iconName} size={size} color={color}></MaterialIcons>
    </TouchableOpacity>
  );
};

export const MaterialCommunityIconButton = ({
  onPress,
  iconName,
  size,
  color,
  containerStyle = {},
}) => {
  return (
    <TouchableOpacity style={[styles.block, containerStyle]} onPress={onPress}>
      <MaterialCommunityIcons
        name={iconName}
        size={size}
        color={color}
      ></MaterialCommunityIcons>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  block: {},
});
