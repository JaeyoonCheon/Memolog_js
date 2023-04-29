import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const FlatCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.block} onPress={onPress}>
      <View style={styles.contents}>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.bodyBlock}>
          <Text style={styles.body}>{item.form}</Text>
        </View>
        <View style={styles.addon}></View>
      </View>
      {item.thumbnail_url && (
        <Image
          style={styles.image}
          source={{ uri: item.thumbnail_url }}
        ></Image>
      )}
    </TouchableOpacity>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  block: {
    height: 80,
    paddingVertical: 8,
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
  titleBlock: {},
  title: {
    fontSize: 16,
    color: "#000000",
  },
  bodyBlock: {},
  body: {
    fontSize: 12,
  },
  addon: {},
  image: {
    width: 72,
    marginLeft: 12,
  },
});
