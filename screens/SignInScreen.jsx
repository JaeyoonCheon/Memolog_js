import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import BouncyCheckbox from "../node_modules/react-native-bouncy-checkbox/build/dist/BouncyCheckbox";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Controller, useForm } from "react-hook-form";

import BaseHeader from "../components/headers/BaseHeader";
import BaseTextField from "../components/textfields/BaseTextField";
import PasswordField from "../components/textfields/PasswordField";
import BaseButton from "../components/buttons/BaseButton";
import { signIn } from "../api/auth";

const SignInScreen = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    await signIn({ email: data.email, password: data.password });
  };

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
        <Text style={styles.title}>로그인 정보를 입력해주세요</Text>
      </View>
      <ScrollView contentContainerStyle={styles.form}>
        <View>
          <Controller
            control={control}
            rules={{
              required: "이메일을 입력해주세요!",
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
          <Controller
            control={control}
            rules={{
              required: "비밀번호를 입력해주세요!",
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
          <BouncyCheckbox
            style={styles.authOption}
            size={20}
            fillColor="#22BCCE"
            text="자동로그인"
            iconStyle={{ borderRadius: 5 }}
            innerIconStyle={{ borderRadius: 5 }}
            textStyle={{ textDecorationLine: "none", fontSize: 12 }}
            textContainerStyle={{ marginLeft: 8 }}
          ></BouncyCheckbox>
        </View>
        <View style={styles.button}>
          <BaseButton
            label="로그인하기"
            onPress={handleSubmit(onSubmit)}
          ></BaseButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignInScreen;

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
  authOption: {
    marginVertical: 4,
    alignSelf: "flex-end",
  },
  button: {
    height: 48,
    marginVertical: 32,
  },
});
