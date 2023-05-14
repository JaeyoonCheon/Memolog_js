import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import BaseHeader from "../components/headers/BaseHeader";
import BaseTextField from "../components/textfields/BaseTextField";
import PasswordField from "../components/textfields/PasswordField";
import BaseButton from "../components/buttons/BaseButton";
import useSignUp from "../hooks/useSignUp";
import { MaterialIconButton } from "../components/buttons/IconButton";
import AlertModal from "../components/modals/AlertModal";
import { checkEmailDuplication } from "../api/auth";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isEmailChecked, setIsEmailChecked] = useState(false);

  const {
    trigger,
    getValues,
    getFieldState,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const {
    mutate: signUpMutate,
    isLoading: isSignUpLoading,
    isSuccess: isSignUpSuccess,
  } = useSignUp();
  const {
    mutate: checkMutate,
    isSuccess: isEmailCheckSuccess,
    isError: isEmailCheckError,
  } = useMutation(checkEmailDuplication, {
    onSuccess: (data) => {
      setIsEmailChecked(true);
    },
    onError: (error) => {
      console.log(error);
      if (error.response.status === 400) {
        setIsErrorModalOpen(true);
      }
    },
  });

  const onPressCheck = async () => {
    const result = await trigger("email");

    if (result) {
      const email = getValues("email");

      checkMutate({
        email: email,
      });
    } else {
      const { error: emailErrors } = getFieldState("email");
      setIsErrorModalOpen(true);
    }
  };
  const onSubmit = (data) => {
    if (isSignUpLoading) {
      return;
    }

    signUpMutate({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    if (isSignUpSuccess) {
      navigation.navigate("MakeProfile");
    }
  };

  return (
    <View style={styles.block}>
      <BaseHeader
        leftButtons={
          <MaterialIconButton
            iconName="arrow-back"
            size={24}
            color="#000000"
            onPress={() => navigation.goBack()}
          ></MaterialIconButton>
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
              required: "이름을 입력해주세요!",
              pattern: {
                value: /^[가-힣]{2,4}|[a-zA-Z]{2,10}$/,
                message: "한글이나 영문으로 입력해주세요",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <BaseTextField
                label="이름"
                indicator={errors.name?.message}
                onChange={onChange}
                value={value}
              ></BaseTextField>
            )}
            name="name"
          ></Controller>
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
            <BaseButton label="중복 확인" onPress={onPressCheck}></BaseButton>
            {isErrorModalOpen && (
              <AlertModal
                isOpen={isErrorModalOpen}
                handleIsOpen={setIsErrorModalOpen}
                innerText={`동일한 이메일이 이미 등록되어있습니다.\n다른 이메일로 등록해주세요.`}
                buttonText={"확인"}
              ></AlertModal>
            )}
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
        {isSignUpLoading ? (
          <ActivityIndicator size="large" color="#22BCCE"></ActivityIndicator>
        ) : (
          <View style={styles.button}>
            <BaseButton
              label="회원 가입하기"
              onPress={handleSubmit(onSubmit)}
            ></BaseButton>
          </View>
        )}
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
