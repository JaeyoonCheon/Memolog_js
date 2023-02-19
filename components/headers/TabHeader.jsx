import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TabHeader = ({ title, buttons }) => {
  return (
    <View style={styles.block}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>{buttons.map((button) => button)}</View>
    </View>
  );
};

export default TabHeader;

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
  back: {},
});
