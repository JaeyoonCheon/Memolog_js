import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import BaseHeader from "../components/headers/BaseHeader";
import BaseTextField from "../components/textfields/BaseTextField";
import PasswordField from "../components/textfields/PasswordField";
import BaseButton from "../components/buttons/BaseButton";

const SignUpScreen = () => {
  return (
    <View style={styles.block}>
      <BaseHeader
        leftButtons={
          <MaterialIcons
            name="arrow-back"
            size={24}
            color="#000000"
          ></MaterialIcons>
        }
      ></BaseHeader>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>회원 정보를 입력해주세요</Text>
      </View>
      <ScrollView contentContainerStyle={styles.form}>
        <View>
          <BaseTextField
            label="이메일"
            indicator="테스트 인디케이터"
          ></BaseTextField>
          <View style={styles.availButton}>
            <BaseButton label="중복 확인"></BaseButton>
          </View>
          <PasswordField></PasswordField>
          <PasswordField></PasswordField>
        </View>
        <View style={styles.button}>
          <BaseButton label="회원 가입하기"></BaseButton>
        </View>
      </ScrollView>
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
    flexGrow: 1,
    marginHorizontal: 16,
    justifyContent: "space-between",
  },
  availButton: {
    alignSelf: "flex-end",
    width: 120,
    height: 30,
  },
  button: {
    height: 48,
    marginVertical: 32,
  },
});
