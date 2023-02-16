import { StyleSheet, Text, View } from "react-native";
import React from "react";

import BaseHeader from "../components/headers/BaseHeader";
import BaseTextField from "../components/textfields/BaseTextField";
import BaseButton from "../components/buttons/BaseButton";

const SignInScreen = () => {
  return (
    <View style={styles.block}>
      <BaseHeader></BaseHeader>
      <Text>SignInScreen</Text>
      <BaseTextField></BaseTextField>
      <BaseTextField></BaseTextField>
      <BaseButton label="로그인하기"></BaseButton>
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
