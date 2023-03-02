import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <View style={styles.block}>
      <View style={styles.logoBlock}>
        <Text style={styles.logo}>MemoLog</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

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
});
