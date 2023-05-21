import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useInfiniteQuery } from "react-query";

import CardList from "../components/cards/CardList";
import FlatCardList from "../components/cards/FlatCardList";
import BaseHeader from "../components/headers/BaseHeader";
import { MaterialIconButton } from "../components/buttons/IconButton";
import { getOtherDocuments } from "../api/browse";

const BrowseScreen = () => {
  const navigation = useNavigation();

  const [layout, setLayout] = useState("grid");
  const [refreshing, setRefreshing] = useState(false);

  const {
    data: documents,
    refetch,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["Browse"],
    queryFn: ({ pageParam = { id: "", cursor: "" } }) =>
      getOtherDocuments(pageParam),
    getNextPageParam: (lastPage, pages) => {
      console.log(lastPage);
      return lastPage[lastPage?.length - 1]
        ? {
            id: lastPage[lastPage?.length - 1]?.id,
            cursor: lastPage[lastPage?.length - 1]["created_at"],
          }
        : undefined;
    },
  });

  const onPressSearch = () => {
    navigation.navigate("Search");
  };
  const onPressLayout = (style) => {
    setLayout(style);
  };
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

  console.log(documents);

  return (
    <View style={styles.block}>
      <BaseHeader
        title="탐색"
        rightButtons={
          <MaterialIconButton
            onPress={onPressSearch}
            iconName="search"
            size={24}
            color="#000000"
          ></MaterialIconButton>
        }
      ></BaseHeader>
      <View style={styles.toolbar}>
        <View style={styles.layout}>
          <MaterialIconButton
            containerStyle={styles.layoutButton}
            onPress={() => onPressLayout("grid")}
            iconName="grid-view"
            size={24}
            color="#000000"
          ></MaterialIconButton>
          <MaterialIconButton
            containerStyle={styles.layoutButton}
            onPress={() => onPressLayout("list")}
            iconName="list"
            size={24}
            color="#000000"
          ></MaterialIconButton>
        </View>
      </View>
      <View style={styles.itemsWrapper}>
        {layout === "grid" ? (
          <CardList
            data={documents?.pages.flat()}
            onPressCard={onPressCard}
            onEndReached={onEndReachFetch}
            onRefresh={onRefresh}
            refreshing={refreshing}
          ></CardList>
        ) : (
          <FlatCardList
            data={documents?.pages.flat()}
            onPressCard={onPressCard}
            onEndReached={onEndReachFetch}
            onRefresh={onRefresh}
            refreshing={refreshing}
          ></FlatCardList>
        )}
      </View>
    </View>
  );
};

export default BrowseScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  toolbar: {
    width: "100%",
    height: 50,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1,
  },
  sort: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    dropdown: {
      minHeight: 32,
    },
  },
  layout: {
    marginLeft: "auto",
    flexDirection: "row",
  },
  layoutButton: { marginLeft: 4 },
  itemsWrapper: {
    flex: 1,
    marginTop: 32,
  },
});
