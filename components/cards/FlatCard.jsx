import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";

const FlatCard = () => {
  const image = null;

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
      {image && <Image></Image>}
    </TouchableOpacity>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  block: {
    width: "100%",
    height: 96,
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",

    borderBottomWidth: 0.5,
    borderBottomColor: "#C4C7C7",
    backgroundColor: "#FFFFFF",
  },
  contents: {
    flex: 1,

    borderWidth: 1,
    borderColor: "green",
  },
  title: {},
  body: {},
  addon: {},
  image: {
    marginLeft: 12,
  },
});
