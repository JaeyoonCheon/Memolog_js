import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "react-query";
import DropDownPicker from "react-native-dropdown-picker";

import CardList from "../components/cards/CardList";
import FlatCardList from "../components/cards/FlatCardList";
import BaseHeader from "../components/headers/BaseHeader";
import { MaterialIconButton } from "../components/buttons/IconButton";
import { getOtherDocuments } from "../api/browse";

const BrowseScreen = () => {
  const navigation = useNavigation();
  const [layout, setLayout] = useState("grid");
  const { data: documents, isLoading } = useQuery("Browse", getOtherDocuments);

  const onPressSearch = () => {
    navigation.navigate("Search");
  };
  const onPressLayout = (style) => {
    setLayout(style);
  };
  const onPressCard = (id) => {
    navigation.navigate("Detail", { id });
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
          <CardList data={documents} onPressCard={onPressCard}></CardList>
        ) : (
          <FlatCardList
            data={documents}
            onPressCard={onPressCard}
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
