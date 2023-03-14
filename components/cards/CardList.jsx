import { StyleSheet, FlatList, FlatListProps } from "react-native";
import React from "react";

import Card from "./Card";

const CardList = ({
  data,
  onPressCard,
  onEndReached,
  onRefresh,
  refreshing,
}) => {
  return (
    <FlatList
      style={styles.cardList}
      contentContainerStyle={{ paddingHorizontal: 8 }}
      data={data}
      renderItem={({ item }) => <Card item={item} onPress={onPressCard} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
      onRefresh={onRefresh}
      refreshing={refreshing}
      onEndReached={onEndReached}
    ></FlatList>
  );
};

export default CardList;

const styles = StyleSheet.create({
  cardList: {
    flex: 1,
  },
});
