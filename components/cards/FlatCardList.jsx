import { StyleSheet, FlatList, FlatListProps } from "react-native";
import React from "react";

import FlatCard from "./FlatCard";

const FlatCardList = ({ data, onPressCard, onEndReached }) => {
  return (
    <FlatList
      style={styles.cardList}
      data={data}
      renderItem={({ item }) => <FlatCard item={item} onPress={onPressCard} />}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReached}
    ></FlatList>
  );
};

export default FlatCardList;

const styles = StyleSheet.create({
  cardList: {
    flex: 1,
  },
});
