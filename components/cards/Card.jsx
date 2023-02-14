import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Card = () => {
  return (
    <TouchableOpacity style={styles.block}>
      <View style={styles.contents}>
        <View style={styles.title}>
          <Text>제목</Text>
        </View>
        <View style={styles.body}>
          <Text>본문</Text>
        </View>
        <View style={styles.addon}>
          <Text>기타 정보</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  block: {
    flex: 0.5,
    marginHorizontal: 5,
    marginVertical: 5,
    minHeight: 100,

    borderRadius: 16,
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
  contents: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",

    borderWidth: 1,
    borderColor: "green",
  },
  title: { flex: 1 },
  body: { flex: 4 },
  addon: { flex: 1 },
});
