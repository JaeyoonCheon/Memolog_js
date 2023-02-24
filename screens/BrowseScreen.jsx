import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import CardList from "../components/cards/CardList";
import BaseHeader from "../components/headers/BaseHeader";
import { MaterialIconButton } from "../components/buttons/IconButton";

const BrowseScreen = () => {
  const navigation = useNavigation();

  const onPressSearch = () => {
    navigation.navigate("Search");
  };

  return (
    <View style={styles.block}>
      <BaseHeader
        title="탐색"
        rightButtons={
          <MaterialIconButton
            onPress={onPressSearch}
            iconName="search"
            size={24}
            color="#000000"
          ></MaterialIconButton>
        }
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
