import { StyleSheet, ScrollView, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { useQuery } from "react-query";

import BaseHeader from "../components/headers/BaseHeader";
import Trends from "../components/charts/hashtags/Trends";
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
      <ScrollView style={styles.container}>
        <View style={styles.hashtagContainer}>
          {isFetched && <Trends data={trendsData}></Trends>}
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
  container: {},
  hashtagContainer: {
    paddingVertical: 12,
    marginHorizontal: 12,
  },
});
