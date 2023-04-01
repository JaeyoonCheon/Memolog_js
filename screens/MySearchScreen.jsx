import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "react-query";

import SearchHeader from "../components/headers/SearchHeader";
import FlatCardList from "../components/cards/FlatCardList";
import { searchDocuments } from "../api/documents";

const MySearchScreen = () => {
  const navigation = useNavigation();

  const { data, refetch } = useQuery(
    ["MySearch", keyword],
    searchDocuments(keyword),
    {
      enabled: !!keyword,
    }
  );

  const [keyword, setKeyword] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const onPressCard = (id) => {
    navigation.navigate("Detail", { id });
  };
  const onRefresh = () => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  };
  const onEndReachFetch = () => {
    console.log("Fetch");
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <View style={styles.block}>
      <SearchHeader value={keyword} onChangeText={setKeyword}></SearchHeader>
      <FlatCardList
        data={data}
        onPressCard={onPressCard}
        onRefresh={onRefresh}
        refreshing={refreshing}
        onEndReached={onEndReachFetch}
      ></FlatCardList>
    </View>
  );
};

export default MySearchScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,

    backgroundColor: "#FFFFFF",
  },
});
