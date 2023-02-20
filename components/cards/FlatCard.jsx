import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const testData = {
  title: "문서 제목 .. 1",
  body: "대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다. 국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다.",
  imageURL: "https://picsum.photos/200/300",
};

const FlatCard = () => {
  const image = true;

  return (
    <TouchableOpacity style={styles.block}>
      <View style={styles.contents}>
        <View style={styles.title}>
          <Text>{testData.title}</Text>
        </View>
        <View style={styles.body}>
          <Text>{testData.body}</Text>
        </View>
        <View style={styles.addon}>
          <Text>기타 정보</Text>
        </View>
      </View>
      {image && (
        <Image style={styles.image} source={{ uri: testData.imageURL }}></Image>
      )}
    </TouchableOpacity>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  block: {
    height: 96,
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: "row",

    borderBottomWidth: 1,
    borderBottomColor: "#C4C7C7",
    backgroundColor: "#FFFFFF",
  },
  contents: {
    flex: 1,

    overflow: "hidden",
  },
  title: {},
  body: {},
  addon: {},
  image: {
    width: 72,
    marginLeft: 12,
  },
});
