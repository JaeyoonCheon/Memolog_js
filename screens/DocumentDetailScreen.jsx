import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { WebView } from "react-native-webview";

import BaseHeader from "../components/headers/BaseHeader";

const DocumentDetailScreen = () => {
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
        rightButtons={
          <MaterialIcons
            name="search"
            size={24}
            color="#000000"
          ></MaterialIcons>
        }
      ></BaseHeader>
      <WebView
        styles={styles.webview}
        source={{ uri: "https://reactnative.dev/" }}
      ></WebView>
    </View>
  );
};

export default DocumentDetailScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
