import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MoreScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>MoreScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        <Text>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text>회원가입</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Detail");
        }}
      >
        <Text>상세</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({});
