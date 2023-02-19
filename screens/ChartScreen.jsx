import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import TabHeader from "../components/headers/TabHeader";
import SearchButton from "../components/buttons/SearchButton";

const ChartScreen = () => {
  const navigation = useNavigation();

  const onPressSearch = () => {
    navigation.navigate("Search");
  };

  return (
    <View style={styles.block}>
      <TabHeader
        title="통계"
        buttons={[<SearchButton onPress={onPressSearch}></SearchButton>]}
      ></TabHeader>
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
