import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

import BaseButton from "../buttons/BaseButton";

const AlertModal = ({
  isOpen,
  handleIsOpen,
  innerText = "",
  buttonText = "",
}) => {
  console.log(isOpen);
  return (
    <Modal visible={isOpen} transparent>
      <TouchableWithoutFeedback
        onPress={() => {
          handleIsOpen(false);
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.block}>
            <View style={styles.modalContent}>
              <Text style={styles.innerText}>{innerText}</Text>
            </View>
            <View style={styles.modalButton}>
              <BaseButton label={buttonText}></BaseButton>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AlertModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  block: {
    flexGrow: 1,
    height: 160,
    marginHorizontal: 30,

    zIndex: 99,
    backgroundColor: "#FFFFFF",
  },
  modalContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  innerText: {
    textAlign: "center",
  },
  modalButton: {
    height: 50,
    margin: 12,

    backgroundColor: "#22BCCE",
  },
});
