import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BaseHeader = ({ children, leftButtons, title, rightButtons }) => {
  return (
    <View style={styles.block}>
      {leftButtons && <View style={styles.left}>{leftButtons}</View>}
      <View style={styles.centerBlock}>
        {children || (
          <Text style={[styles.title, leftButtons && styles.titleLeft]}>
            {title}
          </Text>
        )}
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
  centerBlock: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: "#000000",
  },
  titleLeft: {
    marginLeft: 16,
  },
  left: {
    justifyContent: "flex-start",
  },
  right: {
    flexDirection: "row",
  },
});
