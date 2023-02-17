import { StyleSheet, Text, View } from "react-native";
import React from "react";

import BaseHeader from "../components/headers/BaseHeader";
import BaseTextField from "../components/textfields/BaseTextField";
import BaseButton from "../components/buttons/BaseButton";

const SignUpScreen = () => {
  return (
    <View style={styles.block}>
      <BaseHeader></BaseHeader>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>회원 정보를 입력해주세요</Text>
      </View>
      <View style={styles.form}>
        <BaseTextField></BaseTextField>
        <View style={styles.availButton}>
          <BaseButton label="중복 확인"></BaseButton>
        </View>
        <BaseTextField indicator="비밀"></BaseTextField>
        <BaseTextField></BaseTextField>
      </View>
      <View style={styles.button}>
        <BaseButton label="회원 가입하기"></BaseButton>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,

    backgroundColor: "#FFFFFF",
  },
  titleBlock: {
    marginVertical: 32,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  form: {
    flex: 1,
    marginHorizontal: 16,
  },
  availButton: {
    alignSelf: "flex-end",
    width: 120,
    height: 30,
  },
  button: {
    height: 48,
    marginVertical: 32,
    marginHorizontal: 16,
  },
});
