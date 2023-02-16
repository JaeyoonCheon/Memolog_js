import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const BaseTextField = () => {
  return (
    <View style={styles.block}>
      <View style={styles.labelBlock}>
        <Text style={styles.label}>테스트라벨</Text>
      </View>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.indicator}></Text>
    </View>
  );
};

export default BaseTextField;

const styles = StyleSheet.create({
  block: {
    height: 76,
  },
  labelBlock: {
    alignSelf: "flex-start",
    paddingHorizontal: 4,

    backgroundColor: "#FFFFFF",
    zIndex: 1,

    transform: [
      {
        translateY: 10,
      },
      {
        translateX: 8,
      },
    ],
  },
  label: {
    fontSize: 12,
  },
  input: {
    height: 56,
    paddingHorizontal: 16,

    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#79747E",
  },
  indicator: {
    lineHeight: 24,

    fontSize: 16,
    letterSpacing: 0.5,
  },
});
