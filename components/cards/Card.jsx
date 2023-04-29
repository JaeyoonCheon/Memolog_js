import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const Card = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.block} onPress={() => onPress(item.id)}>
      {item.thumbnail_url && (
        <View style={styles.imageBlock}>
          <Image
            style={styles.image}
            source={{ uri: item.thumbnail_url }}
          ></Image>
        </View>
      )}
      <View style={[styles.contents, item.thumbnail_url && { flex: 0.5 }]}>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.bodyBlock}>
          <Text style={styles.body}>{item.form}</Text>
        </View>
        {item?.addon && (
          <View style={styles.addonBlock}>
            <Text style={styles.addon}>기타 정보</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  block: {
    flex: 0.5,
    marginHorizontal: 8,
    marginVertical: 4,
    flexDirection: "column",

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
    flex: 0.5,
    minHeight: 150,
    resizeMode: "cover",
  },
  image: {
    flex: 1,
  },
  contents: {
    minHeight: 100,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,

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
