import {
  StyleSheet,
  Text,
  Modal,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  useWindowDimensions,
} from "react-native";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

const DropdownModal = ({
  isOpened,
  handleIsOpened,
  handleSelection,
  items,
  position,
}) => {
  const modalRef = useRef();
  const { width: windowWidth } = useWindowDimensions();
  const [modalPosition, setModalPosition] = useState();

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

  useLayoutEffect(() => {
    if (modalRef.current && modalRef.current.measure) {
      modalRef.current.measure((fx, fy, width, height, x, y) => {
        console.log(position);
        console.log(`${width} ${height} ${x} ${y}`);
        console.log(windowWidth);
        const modalRight = position.x + width;
        if (windowWidth < modalRight) {
          setModalPosition({ right: 0 });
        } else {
          setModalPosition({ left: position.x });
        }
      });
    }
  }, []);

  return (
    <Modal visible={isOpened} transparent>
      <TouchableWithoutFeedback
        onPress={() => {
          handleIsOpened(false);
        }}
      >
        <View style={styles.dropdownBackground}>
          <View
            style={[
              styles.dropdown,
              {
                top: position.height + position.y + 4,
              },
              modalPosition,
            ]}
          >
            <View ref={modalRef} style={{ borderWidth: 1, borderColor: "red" }}>
              <FlatList
                data={items}
                renderItem={DropdownItem}
                keyExtractor={(item) => item.value}
              ></FlatList>
            </View>
          </View>
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
