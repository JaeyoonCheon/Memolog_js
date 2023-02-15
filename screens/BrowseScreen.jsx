import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import CardList from "../components/cards/CardList";
import SearchButton from "../components/buttons/SearchButton";

const BrowseScreen = () => {
  const navigation = useNavigation();

  const onPressSearch = () => {
    navigation.navigate("Search");
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <SearchButton onPress={onPressSearch}></SearchButton>,
    });
  }, []);

  return (
    <View style={styles.block}>
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
