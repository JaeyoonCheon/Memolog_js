import { StyleSheet, FlatList, FlatListProps } from "react-native";
import React from "react";

import FlatCard from "./FlatCard";

const FlatCardList = () => {
  const test = [
    { title: "1", body: "1" },
    { title: "2", body: "2" },
    { title: "3", body: "3" },
    { title: "4", body: "4" },
    { title: "5", body: "5" },
    { title: "11", body: "11" },
    { title: "22", body: "22" },
    { title: "33", body: "33" },
    { title: "44", body: "44" },
    { title: "55", body: "55" },
  ];

  return (
    <FlatList
      style={styles.cardList}
      data={test}
      renderItem={(item) => <FlatCard />}
      keyExtractor={(item) => item.title}
    ></FlatList>
  );
};

export default FlatCardList;

const styles = StyleSheet.create({
  cardList: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
  },
});
