import { StyleSheet, TextInput, View, useWindowDimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { MaterialIconButton } from "../buttons/IconButton";

import BaseHeader from "./BaseHeader";

const WriteHeader = ({ value, onChangeText, onSubmit }) => {
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
        <>
          <MaterialIconButton
            iconName="close"
            size={24}
            color="#000000"
            onPress={() => onChangeText("")}
          ></MaterialIconButton>
          <MaterialIconButton
            iconName="check"
            size={24}
            color="#000000"
            onPress={onSubmit}
          ></MaterialIconButton>
        </>
      }
    ></BaseHeader>
  );
};

export default WriteHeader;

const styles = StyleSheet.create({});
