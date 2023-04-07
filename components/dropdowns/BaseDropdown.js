import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  Platform,
  Modal,
} from "react-native";
import React, { useState, useRef } from "react";

const BaseDropdown = ({
  items,
  selected,
  isOpened,
  handleSelection,
  handleIsOpened,
}) => {
  const dropdownButtonRef = useRef();
  const dropdownRef = useRef();

  const [dropdownButtonFrame, setDropdownButtonFrame] = useState();

  const DropdownItem = ({ item, isSelected }) => {
    return (
      <TouchableOpacity
        style={styles.dropdownItem}
        onPress={() => {
          handleIsOpened(false);
          handleSelection(item);
        }}
      >
        <Text>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const onPressButton = () => {
    if (dropdownButtonRef.current && dropdownButtonRef.current.measure) {
      dropdownButtonRef.current.measure((fx, fy, width, height, x, y) => {
        setDropdownButtonFrame({ width, height, x, y });
        handleIsOpened(!isOpened);
      });
    }
  };

  console.log(isOpened);
  console.log(dropdownButtonFrame);

  return (
    <View>
      <TouchableOpacity
        style={styles.block}
        ref={dropdownButtonRef}
        onPress={onPressButton}
      >
        <Text style={styles.mainLabel}>{selected.label}</Text>
        <View>
          {isOpened && (
            <Modal visible={isOpened} transparent>
              <TouchableWithoutFeedback
                style={styles.twf}
                onPress={() => {
                  handleIsOpened(false);
                }}
              >
                <View style={styles.dropdownBackground}>
                  <FlatList
                    style={[
                      styles.dropdown,
                      {
                        top:
                          dropdownButtonFrame.height +
                          dropdownButtonFrame.y +
                          4,
                        left: dropdownButtonFrame.x,
                      },
                    ]}
                    data={items}
                    renderItem={DropdownItem}
                    keyExtractor={(item) => item.value}
                  ></FlatList>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BaseDropdown;

const styles = StyleSheet.create({
  block: {
    width: 92,
    height: 32,
    paddingHorizontal: 4,
    paddingVertical: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 8,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "#FFFFFF",
    zIndex: 1,
  },
  mainLabel: {
    textAlign: "center",
  },
  dropdownBackground: {
    flex: 1,
  },
  dropdown: {
    position: "absolute",

    zIndex: 99,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "blue",

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
    width: 92,
    height: 32,
    paddingHorizontal: 4,

    backgroundColor: "#FFFFFF",
  },
});
