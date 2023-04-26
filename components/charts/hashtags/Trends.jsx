import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React from "react";

import RankCard from "../../cards/RankCard";

const Trends = () => {
  return (
    <View style={styles.block}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>#해시태그</Text>
        <Text style={styles.title}>
          TOP <Text style={styles.titleNumber}>10</Text>
        </Text>
      </View>
      <FlatList
        data={[
          { id: 1, name: "#test1" },
          { id: 2, name: "#test2" },
          { id: 3, name: "#test3" },
          { id: 4, name: "#test4" },
          { id: 5, name: "#test5" },
          { id: 6, name: "#test6" },
          { id: 7, name: "#test7" },
          { id: 8, name: "#test8" },
          { id: 9, name: "#test9" },
          { id: 10, name: "#test10" },
        ]}
        renderItem={({ item, index }) =>
          index < 3 ? (
            <RankCard
              isPrimary
              rankNumber={index + 1}
              label={item.name}
            ></RankCard>
          ) : (
            <RankCard rankNumber={index + 1} label={item.name}></RankCard>
          )
        }
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={<View style={{ height: 10 }}></View>}
        nestedScrollEnabled={true}
      ></FlatList>
    </View>
  );
};

export default Trends;

const styles = StyleSheet.create({
  block: {
    paddingVertical: 12,

    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#EFF1F1",
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
  titleBlock: {
    marginHorizontal: 12,
    marginBottom: 12,
  },
  titleNumber: {
    fontSize: 36,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#22BCCE",
  },
});
