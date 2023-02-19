import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import BaseHeader from "../components/headers/BaseHeader";
import SearchButton from "../components/buttons/SearchButton";

const ChartScreen = () => {
  const navigation = useNavigation();

  const onPressSearch = () => {
    navigation.navigate("Search");
  };

  return (
    <View style={styles.block}>
      <BaseHeader
        title="통계"
        buttons={[<SearchButton onPress={onPressSearch}></SearchButton>]}
      ></BaseHeader>
      <Text>ChartScreen</Text>
    </View>
  );
};

export default ChartScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
