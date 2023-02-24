import { StyleSheet, TextInput, useWindowDimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import BaseHeader from "./BaseHeader";
import { MaterialIconButton } from "../buttons/IconButton";

const SearchHeader = ({ value, onChangeText }) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <BaseHeader
      leftButtons={
        <MaterialIconButton
          iconName="arrow-back"
          size={24}
          color="#000000"
          onPress={() => navigation.goBack()}
        ></MaterialIconButton>
      }
      rightButtons={
        <MaterialIconButton
          iconName="close"
          size={24}
          color="#000000"
          onPress={() => onChangeText("")}
        ></MaterialIconButton>
      }
    >
      <TextInput
        style={[styles.input, { width: width - 120 }]}
        placeholder="검색하려는 내용을 검색해주세요."
        value={value}
        onChangeText={onChangeText}
        autoFocus
      ></TextInput>
    </BaseHeader>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginHorizontal: 16,
  },
});
