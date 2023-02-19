import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import BaseHeader from "../components/headers/BaseHeader";

const WriteScreen = () => {
  return (
    <View style={styles.block}>
      <BaseHeader
        leftButtons={[
          <MaterialIcons
            name="arrow-back"
            size={24}
            color="#000000"
          ></MaterialIcons>,
        ]}
        rightButtons={[
          <MaterialIcons
            name="check"
            size={24}
            color="#000000"
          ></MaterialIcons>,
        ]}
      ></BaseHeader>
      <Text>WriteScreen</Text>
    </View>
  );
};

export default WriteScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,

    backgroundColor: "#FFFFFF",
  },
});
