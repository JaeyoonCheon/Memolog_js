import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Controller, useForm } from "react-hook-form";

import BaseHeader from "../components/headers/BaseHeader";
import BaseTextField from "../components/textfields/BaseTextField";
import PasswordField from "../components/textfields/PasswordField";
import BaseButton from "../components/buttons/BaseButton";

const SignUpScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = (data) => console.log(data);

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
          <Controller
            control={control}
            rules={{
              required: "이메일을 입력해주세요!",
              pattern: {
                value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "이메일 형식에 맞게 입력해주세요",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <BaseTextField
                label="이메일"
                indicator={errors.email?.message}
                onChange={onChange}
                value={value}
              ></BaseTextField>
            )}
            name="email"
          ></Controller>
          <View style={styles.availButton}>
            <BaseButton label="중복 확인"></BaseButton>
          </View>
          <Controller
            control={control}
            rules={{
              required: "비밀번호를 입력해주세요!",
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$/,
                message:
                  "비밀번호는 8자 이상 15자 미만, 숫자와 특수문자를 포함한 영문이어야 합니다",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <PasswordField
                label="비밀번호"
                indicator={errors.password?.message}
                onChange={onChange}
                value={value}
              ></PasswordField>
            )}
            name="password"
          ></Controller>
          <Controller
            control={control}
            rules={{
              required: "비밀번호 확인을 입력해주세요!",
              validate: {
                isExact: (value, values) => {
                  return (
                    values.password === values.passwordConfirm ||
                    "입력하신 비밀번호와 일치하지 않습니다!"
                  );
                },
              },
            }}
            render={({ field: { onChange, value } }) => (
              <PasswordField
                label="비밀번호 확인"
                indicator={errors.passwordConfirm?.message}
                onChange={onChange}
                value={value}
              ></PasswordField>
            )}
            name="passwordConfirm"
          ></Controller>
        </View>
        <View style={styles.button}>
          <BaseButton
            label="회원 가입하기"
            onPress={handleSubmit(onSubmit)}
          ></BaseButton>
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
