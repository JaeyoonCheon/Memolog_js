import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BouncyCheckbox from "../node_modules/react-native-bouncy-checkbox/build/dist/BouncyCheckbox";

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
      <BouncyCheckbox
        size={20}
        fillColor="#22BCCE"
        text="자동로그인"
        iconStyle={{ borderRadius: 5 }}
        innerIconStyle={{ borderRadius: 5 }}
        textStyle={{ textDecorationLine: "none", fontSize: 12 }}
        textContainerStyle={{ marginLeft: 8 }}
      ></BouncyCheckbox>
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
