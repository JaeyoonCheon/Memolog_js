import { StyleSheet, ScrollView, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { useQuery } from "react-query";

import BaseHeader from "../components/headers/BaseHeader";
import Trends from "../components/charts/hashtags/Trends";
import TagFrequency from "../components/charts/hashtags/TagFrequency";
import { getHashtagTrends } from "../api/statistics";

const ChartScreen = () => {
  const screenWidth = Dimensions.get("window").width;
  const navigation = useNavigation();

  const { data: trendsData, isFetched } = useQuery(["HashtagTrends"], () =>
    getHashtagTrends()
  );

  const onPressSearch = () => {
    navigation.navigate("Search");
  };

  console.log(trendsData);

  return (
    <View style={styles.block}>
      <BaseHeader title="통계"></BaseHeader>
      <ScrollView style={styles.contents}>
        <View style={styles.container}>
          {isFetched && <Trends data={trendsData}></Trends>}
        </View>
        <View style={styles.container}>
          {isFetched && <TagFrequency data={trendsData}></TagFrequency>}
        </View>
      </ScrollView>
    </View>
  );
};

export default ChartScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,

    backgroundColor: "#FFFFFF",
  },
  contents: {},
  container: {
    paddingVertical: 12,
    marginHorizontal: 12,
  },
});
