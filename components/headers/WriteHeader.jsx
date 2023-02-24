import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialIconButton } from "../buttons/IconButton";

import BaseHeader from "./BaseHeader";

const WriteHeader = () => {
  return (
    <BaseHeader
      leftButtons={
        <MaterialIconButton
          iconName="arrow-back"
          size={24}
          color="#000000"
        ></MaterialIconButton>
      }
    ></BaseHeader>
  );
};

export default WriteHeader;

const styles = StyleSheet.create({
  block: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,

    backgroundColor: "#FFFFFF",
  },
  titleBlock: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: "#000000",
  },
  left: {
    justifyContent: "flex-start",
  },
  right: {
    flexDirection: "row",
  },
});
