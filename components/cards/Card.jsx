import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const testData = {
  title: "문서 제목 .. 1",
  body: "대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다. 국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다.",
  imageURL: "https://picsum.photos/200/300",
};

const Card = ({ title, form }) => {
  console.log(title, form);
  return (
    <TouchableOpacity style={styles.block}>
      <View style={styles.imageBlock}>
        <Image style={styles.image} source={{ uri: testData.imageURL }}></Image>
      </View>
      <View style={styles.contents}>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.bodyBlock}>
          <Text style={styles.body}>{form}</Text>
        </View>
        <View style={styles.addonBlock}>
          <Text style={styles.addon}>기타 정보</Text>
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

    borderRadius: 16,
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
  imageBlock: {
    height: 150,
    resizeMode: "cover",
  },
  image: {
    flex: 1,
  },
  contents: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,

    overflow: "hidden",
  },
  titleBlock: { marginBottom: 4 },
  title: {
    fontSize: 16,
    color: "#000000",
  },
  bodyBlock: {},
  body: {
    fontSize: 12,
    color: "#000000",
  },
  addonBlock: {},
  addon: {},
});
