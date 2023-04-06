import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  Platform,
} from "react-native";
import React, { useEffect, useRef } from "react";

const BaseDropdown = ({
  items,
  selected,
  isOpened,
  handleSelection,
  toggleOpen,
}) => {
  const DropdownItem = ({ item, isSelected }) => {
    return (
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          toggleOpen();
          handleSelection(item);
        }}
      >
        <Text>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const testRef = useRef();

  return (
    <TouchableOpacity
      style={styles.block}
      onPress={toggleOpen}
      onBlur={() => toggleOpen()}
    >
      <Text style={styles.mainLabel}>{selected.label}</Text>
      <View style={styles.dropdown}>
        {isOpened && (
          <TouchableWithoutFeedback
            ref={testRef}
            onPress={() => {
              console.log(testRef);
              toggleOpen();
            }}
          >
            <View>
              <FlatList
                data={items}
                renderItem={DropdownItem}
                keyExtractor={(item) => item.value}
              ></FlatList>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
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
    zIndex: 1,
  },
  mainLabel: {
    textAlign: "center",
  },
  dropdown: {
    position: "absolute",
    top: 20,

    zIndex: 99,

    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowColor: "#000000",
        shadowOpacity: 0.25,
        shadowRadius: 1.5,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  dropdownItem: {
    backgroundColor: "#FFFFFF",
  },
});
