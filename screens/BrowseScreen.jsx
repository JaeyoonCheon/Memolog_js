import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import CardList from "../components/cards/CardList";
import BaseHeader from "../components/headers/BaseHeader";
import SearchButton from "../components/buttons/SearchButton";

const BrowseScreen = () => {
  const navigation = useNavigation();

  const onPressSearch = () => {
    navigation.navigate("Search");
  };

  return (
    <View style={styles.block}>
      <BaseHeader
        title="탐색"
        rightButtons={<SearchButton onPress={onPressSearch}></SearchButton>}
      ></BaseHeader>
      <CardList></CardList>
    </View>
  );
};

export default BrowseScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
