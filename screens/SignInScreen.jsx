import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import BouncyCheckbox from "../node_modules/react-native-bouncy-checkbox/build/dist/BouncyCheckbox";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import BaseHeader from "../components/headers/BaseHeader";
import BaseTextField from "../components/textfields/BaseTextField";
import BaseButton from "../components/buttons/BaseButton";

const SignInScreen = () => {
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
          <BaseTextField></BaseTextField>
          <BaseTextField></BaseTextField>
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
          <BaseButton label="로그인하기"></BaseButton>
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
