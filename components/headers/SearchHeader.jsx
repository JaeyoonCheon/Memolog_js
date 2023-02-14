import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SearchHeader = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.block}>
      <TouchableOpacity style={styles.back}>
        <MaterialIcons
          name="arrow-back"
          size={24}
          color="#000000"
        ></MaterialIcons>
      </TouchableOpacity>
      <TextInput
        style={[styles.input, { width: width - 120 }]}
        placeholder="검색하려는 내용을 검색해주세요."
        autoFocus
      ></TextInput>
      <TouchableOpacity style={styles.close}>
        <MaterialIcons name="close" size={24} color="#000000"></MaterialIcons>
      </TouchableOpacity>
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  block: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
  },
  back: {},
  input: {
    flex: 1,
    marginHorizontal: 16,
  },
  close: {},
});
