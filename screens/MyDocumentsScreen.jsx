import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

import CardList from "../components/cards/CardList";
import FlatCardList from "../components/cards/FlatCardList";
import SearchButton from "../components/buttons/SearchButton";

const MyDocumentsScreen = () => {
  const navigation = useNavigation();
  const [layout, setLayout] = useState("grid");

  const onPressSearch = () => {
    navigation.navigate("MySearch");
  };
  const onPressLayout = (style) => {
    setLayout(style);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <SearchButton onPress={onPressSearch}></SearchButton>,
    });
  }, []);

  return (
    <View style={styles.block}>
      <View style={styles.toolbar}>
        <View style={styles.sort}>
          <Text>날짜순</Text>
        </View>
        <View style={styles.layout}>
          <TouchableOpacity onPress={() => onPressLayout("grid")}>
            <MaterialIcons
              name="grid-view"
              color="#000000"
              size={20}
            ></MaterialIcons>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressLayout("list")}>
            <MaterialIcons
              name="list"
              color="#000000"
              size={20}
            ></MaterialIcons>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.itemsWrapper}>
        {layout === "grid" ? (
          <CardList></CardList>
        ) : (
          <FlatCardList></FlatCardList>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sort: {
    height: 32,
    width: 100,
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "#000111",
    borderRadius: 15,
  },
  layout: {
    flexDirection: "row",
  },
  itemsWrapper: {
    flex: 1,
    marginTop: 32,
  },
});
