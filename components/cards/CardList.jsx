import { StyleSheet, FlatList, FlatListProps } from "react-native";
import React from "react";

import Card from "./Card";

const CardList = ({ data }) => {
  console.log("update " + data);

  return (
    <FlatList
      style={styles.cardList}
      contentContainerStyle={{ paddingHorizontal: 8 }}
      data={data}
      renderItem={({ item }) => <Card title={item.title} form={item.form} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
    ></FlatList>
  );
};

export default CardList;

const styles = StyleSheet.create({
  cardList: {
    flex: 1,
  },
});
