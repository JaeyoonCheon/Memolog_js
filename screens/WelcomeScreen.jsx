import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import BaseButton from "../components/buttons/BaseButton";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.block}>
      <View style={styles.logoBlock}>
        <Text style={styles.logo}>MemoLog</Text>
      </View>
      <View style={styles.buttonBlock}>
        <View style={[styles.button, styles.register]}>
          <BaseButton
            label="시작하기"
            onPress={() => navigation.navigate("SignUp")}
          ></BaseButton>
        </View>
        <View style={styles.button}>
          <BaseButton
            label="로그인하기"
            secondary
            onPress={() => navigation.navigate("SignIn")}
          ></BaseButton>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,

    backgroundColor: "#FFFFFF",
  },
  logoBlock: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 32,
    color: "#000000",
  },
  buttonBlock: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 64,
  },
  button: {
    height: 48,
  },
  register: {
    marginBottom: 8,
  },
});
