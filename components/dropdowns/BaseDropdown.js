import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import React from "react";

const BaseDropdown = ({
  list,
  selected,
  open,
  handleSelection,
  toggleOpen,
}) => {
  const DropdownItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={toggleOpen}>
        <Text>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <TouchableOpacity style={styles.block} onPress={toggleOpen}>
      <Text style={styles.mainLabel}>{selected}</Text>
      <Modal visible={open} transparent animationType="none">
        <View style={styles.dropdown}>
          <FlatList
            data={list}
            renderItem={DropdownItem}
            keyExtractor={(item) => item.value}
          ></FlatList>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default BaseDropdown;

const styles = StyleSheet.create({
  block: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "blue",
    zIndex: 1,
  },
  mainLabel: {
    textAlign: "center",
  },
  dropdown: {
    position: "absolute",

    borderWidth: 1,
    borderColor: "red",
  },
  itemBlock: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#000000",
  },
});
