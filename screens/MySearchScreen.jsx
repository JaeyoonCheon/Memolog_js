import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SearchHeader from "../components/headers/SearchHeader";
import FlatCardList from "../components/cards/FlatCardList";

const MySearchScreen = () => {
  return (
    <View style={styles.block}>
      <SearchHeader></SearchHeader>
      <FlatCardList></FlatCardList>
    </View>
  );
};

export default MySearchScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,

    backgroundColor: "#FFFFFF",
  },
});
