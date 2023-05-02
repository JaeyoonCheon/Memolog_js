import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

const AlertModal = ({ isOpened, handleIsOpened }) => {
  console.log(isOpened);
  return (
    <Modal visible={isOpened} transparent>
      <TouchableWithoutFeedback
        onPress={() => {
          handleIsOpened(false);
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.block}>
            <View style={styles.modalContent}>
              <Text>모달 제목</Text>
            </View>
            <View style={styles.modalButton}>
              <Text>모달 내용</Text>
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
  modalButton: {
    height: 50,
    margin: 12,

    backgroundColor: "#22BCCE",
  },
});
