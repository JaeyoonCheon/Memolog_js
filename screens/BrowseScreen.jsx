import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import CardList from "../components/cards/CardList";
import TabHeader from "../components/headers/TabHeader";
import SearchButton from "../components/buttons/SearchButton";

const BrowseScreen = () => {
  const navigation = useNavigation();

  const onPressSearch = () => {
    navigation.navigate("Search");
  };

  return (
    <View style={styles.block}>
      <TabHeader
        title="탐색"
        buttons={[<SearchButton onPress={onPressSearch}></SearchButton>]}
      ></TabHeader>
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
