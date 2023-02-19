import { StyleSheet, Text, View } from "react-native";
import React from "react";

const WriteScreen = () => {
  return (
    <View style={styles.block}>
      <Text>WriteScreen</Text>
    </View>
  );
};

export default WriteScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,

    backgroundColor: "#FFFFFF",
  },
});
