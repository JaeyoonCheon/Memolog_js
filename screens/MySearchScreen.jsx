import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SearchHeader from "../components/headers/SearchHeader";
import FlatCardList from "../components/cards/FlatCardList";

const MySearchScreen = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <View style={styles.block}>
      <SearchHeader value={keyword} onChangeText={setKeyword}></SearchHeader>
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
