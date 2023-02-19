import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BaseHeader = ({ leftButtons, title, rightButtons }) => {
  return (
    <View style={styles.block}>
      {leftButtons && <View style={styles.left}>{leftButtons}</View>}
      <View style={styles.titleBlock}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {rightButtons && <View style={styles.right}>{rightButtons}</View>}
    </View>
  );
};

export default BaseHeader;

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
    justifyContent: "flex-end",
  },
});
