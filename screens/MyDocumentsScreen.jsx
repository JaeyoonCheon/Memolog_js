import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";

import BaseHeader from "../components/headers/BaseHeader";
import CardList from "../components/cards/CardList";
import FlatCardList from "../components/cards/FlatCardList";
import SearchButton from "../components/buttons/SearchButton";

const MyDocumentsScreen = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("date");
  const [items, setItems] = useState([
    { label: "날짜순", value: "date" },
    { label: "제목순", value: "title" },
  ]);
  const [layout, setLayout] = useState("grid");

  const onPressSearch = () => {
    navigation.navigate("MySearch");
  };
  const onPressLayout = (style) => {
    setLayout(style);
  };

  return (
    <View style={styles.block}>
      <BaseHeader
        title="내 기록"
        rightButtons={
          <>
            <TouchableOpacity onPress={() => navigation.navigate("Write")}>
              <MaterialCommunityIcons
                name="feather"
                size={24}
                color="#000000"
              ></MaterialCommunityIcons>
            </TouchableOpacity>
            <SearchButton onPress={onPressSearch}></SearchButton>
          </>
        }
      ></BaseHeader>
      <View style={styles.toolbar}>
        <View style={styles.sort}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={styles.sort.dropdown}
            listItemContainerStyle={{ height: 32 }}
          />
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
    flexDirection: "row",
  },
  itemsWrapper: {
    flex: 1,
    marginTop: 32,
  },
});
