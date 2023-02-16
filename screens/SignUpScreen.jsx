import { StyleSheet, Text, View } from "react-native";
import React from "react";

import BaseHeader from "../components/headers/BaseHeader";
import BaseTextField from "../components/textfields/BaseTextField";
import BaseButton from "../components/buttons/BaseButton";

const SignUpScreen = () => {
  return (
    <View style={styles.block}>
      <BaseHeader></BaseHeader>
      <Text>SignUpScreen</Text>
      <BaseTextField></BaseTextField>
      <BaseButton label="중복 확인"></BaseButton>
      <BaseTextField></BaseTextField>
      <BaseTextField></BaseTextField>
      <BaseButton label="회원 가입하기"></BaseButton>
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
