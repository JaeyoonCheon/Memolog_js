import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { useQuery, useInfiniteQuery } from "react-query";

import BaseHeader from "../components/headers/BaseHeader";
import CardList from "../components/cards/CardList";
import FlatCardList from "../components/cards/FlatCardList";
import { getDocuments } from "../api/documents";
import {
  MaterialIconButton,
  MaterialCommunityIconButton,
} from "../components/buttons/IconButton";

const MyDocumentsScreen = () => {
  const navigation = useNavigation();
  const [sortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState("created_at");
  const [sortItem, setSortItem] = useState([
    { label: "작성일", value: "created_at" },
    { label: "마지막 수정", value: "updated_at" },
    { label: "제목", value: "title" },
  ]);
  const [orderOpen, setOrderOpen] = useState(false);
  const [orderValue, setOrderValue] = useState("DESC");
  const [orderItem, setOrderItem] = useState([
    { label: "desc", value: "DESC" },
    { label: "asc", value: "ASC" },
  ]);
  const [layout, setLayout] = useState("grid");
  const [refreshing, setRefreshing] = useState(false);

  const {
    data: documents,
    refetch,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["Documents", sortValue, orderValue],
    queryFn: ({ pageParam = { id: "", cursor: "" } }) =>
      getDocuments(pageParam, sortValue, orderValue),
    getNextPageParam: (lastPage, pages) => {
      return lastPage[lastPage.length - 1]
        ? {
            id: lastPage[lastPage.length - 1]?.id,
            cursor: lastPage[lastPage.length - 1][`${sortValue}`],
          }
        : undefined;
    },
  });

  const onPressSearch = () => {
    navigation.navigate("MySearch");
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

  return (
    <View style={styles.block}>
      <BaseHeader
        title="내 기록"
        rightButtons={
          <>
            <MaterialCommunityIconButton
              onPress={() => navigation.navigate("Write")}
              iconName="feather"
              size={24}
              color="#000000"
              containerStyle={{ marginRight: 2 }}
            ></MaterialCommunityIconButton>
            <MaterialIconButton
              onPress={onPressSearch}
              iconName="search"
              size={24}
              color="#000000"
            ></MaterialIconButton>
          </>
        }
      ></BaseHeader>
      <View style={styles.toolbar}>
        <View style={styles.sortOrder}>
          <View style={styles.sort}>
            <DropDownPicker
              open={sortOpen}
              value={sortValue}
              items={sortItem}
              setOpen={setSortOpen}
              setValue={setSortValue}
              setItems={setSortItem}
              style={styles.sort.dropdown}
              listItemContainerStyle={{ height: 32 }}
            />
          </View>
          <View style={styles.sort}>
            <DropDownPicker
              open={orderOpen}
              value={orderValue}
              items={orderItem}
              setOpen={setOrderOpen}
              setValue={setOrderValue}
              setItems={setOrderItem}
              style={styles.sort.dropdown}
              listItemContainerStyle={{ height: 32 }}
            />
          </View>
        </View>
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
            onRefresh={onRefresh}
            refreshing={refreshing}
            onEndReached={onEndReachFetch}
          ></CardList>
        ) : (
          <FlatCardList
            data={documents?.pages.flat()}
            onPressCard={onPressCard}
            onRefresh={onRefresh}
            refreshing={refreshing}
            onEndReached={onEndReachFetch}
          ></FlatCardList>
        )}
      </View>
    </View>
  );
};

export default MyDocumentsScreen;

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
  sortOrder: {
    flexDirection: "row",
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
    flexDirection: "row",
  },
  layoutButton: { marginLeft: 4 },
  itemsWrapper: {
    flex: 1,
    marginTop: 32,
  },
});
