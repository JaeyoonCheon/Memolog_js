import { StyleSheet, Text, View } from "react-native";
import React from "react";

import BaseHeader from "../components/headers/BaseHeader";

const SignUpScreen = () => {
  return (
    <View style={styles.block}>
      <BaseHeader></BaseHeader>
      <Text>SignUpScreen</Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,

    backgroundColor: "#FFFFFF",
  },
});
