import { StyleSheet, Text, View } from "react-native";
import React from "react";

import BaseHeader from "../components/headers/BaseHeader";

const SignInScreen = () => {
  return (
    <View style={styles.block}>
      <BaseHeader></BaseHeader>
      <Text>SignInScreen</Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,

    backgroundColor: "#FFFFFF",
  },
});
