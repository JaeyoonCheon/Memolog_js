import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SearchButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialIcons name="search" size={24} color="#000000"></MaterialIcons>
    </TouchableOpacity>
  );
};

export default SearchButton;

const styles = StyleSheet.create({});
