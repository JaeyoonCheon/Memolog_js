import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useInfiniteQuery } from "react-query";

import SearchHeader from "../components/headers/SearchHeader";
import FlatCardList from "../components/cards/FlatCardList";
import { searchDocuments } from "../api/documents";

const MySearchScreen = () => {
  const navigation = useNavigation();

  const [keyword, setKeyword] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const {
    data: documents,
    isFetched,
    refetch,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["MySearch", keyword],
    queryFn: ({ pageParam = { id: "", cursor: "" } }) =>
      searchDocuments(pageParam, keyword),
    getNextPageParam: (lastPage, pages) => {
      return lastPage[lastPage.length - 1]
        ? {
            id: lastPage[lastPage.length - 1]?.id,
            cursor: lastPage[lastPage.length - 1][`created_at`],
          }
        : undefined;
    },
    enabled: !!keyword,
  });

  console.log(documents);

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
        data={documents?.pages.flat()}
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
