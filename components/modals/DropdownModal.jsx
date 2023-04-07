import {
  StyleSheet,
  Text,
  Modal,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import React from "react";

const DropdownModal = ({
  isOpened,
  handleIsOpened,
  handleSelection,
  items,
  position,
}) => {
  const DropdownItem = ({ item, isSelected }) => {
    return (
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          handleIsOpened(false);
          handleSelection(item);
        }}
      >
        <Text style={styles.itemLabel}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal visible={isOpened} transparent>
      <TouchableWithoutFeedback
        onPress={() => {
          handleIsOpened(false);
        }}
      >
        <View style={styles.dropdownBackground}>
          <FlatList
            style={[
              styles.dropdown,
              {
                top: position.height + position.y + 4,
                left: position.x,
                width: position.width,
              },
            ]}
            data={items}
            renderItem={DropdownItem}
            keyExtractor={(item) => item.value}
          ></FlatList>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default DropdownModal;

const styles = StyleSheet.create({
  dropdownBackground: {
    flex: 1,
  },
  dropdown: {
    position: "absolute",

    zIndex: 99,
    borderRadius: 8,

    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 1.5,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  dropdownItem: {
    height: 32,
    paddingHorizontal: 12,
    paddingVertical: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  itemLabel: {
    color: "#000000",
    textAlign: "center",
  },
});
