import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SearchHeader from "../components/headers/SearchHeader";

const MySearchScreen = () => {
  return (
    <View>
      <SearchHeader></SearchHeader>
      <Text>MySearchScreen</Text>
    </View>
  );
};

export default MySearchScreen;

const styles = StyleSheet.create({});
