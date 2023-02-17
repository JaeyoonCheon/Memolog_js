import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const BaseButton = ({ label, onPress, secondary = false }) => {
  return (
    <TouchableOpacity style={styles({ secondary }).block} onPress={onPress}>
      <Text style={styles({ secondary }).label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default BaseButton;

const styles = (props) =>
  StyleSheet.create({
    block: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",

      borderRadius: 5,
      backgroundColor: props.secondary ? "#FFFFFF" : "#22BCCE",
      borderWidth: props.secondary ? 1 : undefined,
      borderColor: props.secondary ? "#747878" : undefined,
    },
    label: {
      fontSize: 16,

      color: props.secondary ? "#000000" : "#FFFFFF",
    },
  });
