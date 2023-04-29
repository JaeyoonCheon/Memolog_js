import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { useUserContext } from "../contexts/UserContext";
import useSignOut from "../hooks/useSignOut";
import BaseHeader from "../components/headers/BaseHeader";

const MoreScreen = () => {
  const navigation = useNavigation();
  const [user, _] = useUserContext();
  const [isLoading, signOut] = useSignOut();

  return (
    <View style={styles.block}>
      <BaseHeader title="더 보기"></BaseHeader>
      <View style={styles.profileBlock}>
        <TouchableOpacity style={styles.profileButton}>
          <View style={styles.profileImage}></View>
        </TouchableOpacity>
        <Text style={styles.helloText}>{`${user?.name} 님 안녕하세요!`}</Text>
      </View>
      <ScrollView>
        <TouchableOpacity style={styles.menuBlock}>
          <Text style={styles.menuLabel}>앱 설정</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBlock}
          onPress={() => {
            signOut();
            {
              isLoading && navigation.navigate("Splash");
            }
          }}
        >
          <Text style={styles.menuLabel}>로그아웃</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  block: { flex: 1, backgroundColor: "#FFFFFF" },
  profileBlock: {
    height: 200,
    marginBottom: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  profileButton: {
    marginVertical: 16,
    width: 150,
    height: 150,

    borderRadius: 75,
    borderWidth: 1,
    borderColor: "#95F1FF",
    overflow: "hidden",
  },
  profileImage: {
    flex: 1,

    backgroundColor: "gray",
  },
  helloText: {
    fontSize: 28,
  },
  menuBlock: {
    height: 48,
    paddingHorizontal: 8,
    flex: 1,
    justifyContent: "center",

    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
  menuLabel: {
    fontSize: 16,
    fontWeight: "400",
  },
});
