import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "../contexts/UserContext";

const MoreScreen = () => {
  const navigation = useNavigation();
  const [user, _] = useUserContext();

  return (
    <View>
      <Text>{user?.name}</Text>
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
          navigation.navigate("Splash");
        }}
      >
        <Text>스플래시</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Welcome");
        }}
      >
        <Text>환영</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({});
