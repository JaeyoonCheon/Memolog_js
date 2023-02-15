import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const BaseHeader = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View style={styles.block}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <MaterialIcons
          name="arrow-back"
          size={24}
          color="#000000"
        ></MaterialIcons>
      </TouchableOpacity>
    </View>
  );
};

export default BaseHeader;

const styles = StyleSheet.create({
  block: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,

    backgroundColor: "#FFFFFF",
  },
  back: {},
});
