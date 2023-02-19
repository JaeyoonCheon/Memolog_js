import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import BaseHeader from "../components/headers/BaseHeader";

const DocumentDetailScreen = () => {
  return (
    <View>
      <BaseHeader
        leftButtons={[
          <MaterialIcons
            name="arrow-back"
            size={24}
            color="#000000"
          ></MaterialIcons>,
        ]}
      ></BaseHeader>
      <Text>DocumentDetailScreen</Text>
    </View>
  );
};

export default DocumentDetailScreen;

const styles = StyleSheet.create({});
