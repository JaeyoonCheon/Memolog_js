import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

import BaseHeader from "../components/headers/BaseHeader";
import Trends from "../components/charts/hashtags/Trends";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ["Rainy Days"], // optional
};

const chartConfig = {
  backgroundColor: "#1cc910",
  backgroundGradientFrom: "#eff3ff",
  backgroundGradientTo: "#efefef",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

const ChartScreen = () => {
  const screenWidth = Dimensions.get("window").width;
  const navigation = useNavigation();

  const onPressSearch = () => {
    navigation.navigate("Search");
  };

  return (
    <View style={styles.block}>
      <BaseHeader title="통계"></BaseHeader>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <View>
        <Trends></Trends>
      </View>
    </View>
  );
};

export default ChartScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,

    backgroundColor: "#FFFFFF",
  },
});
