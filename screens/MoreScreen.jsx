import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { useUserContext } from "../contexts/UserContext";
import useSignOut from "../hooks/useSignOut";

const MoreScreen = () => {
  const navigation = useNavigation();
  const [user, _] = useUserContext();
  const [isLoading, signOut] = useSignOut();

  return (
    <View style={styles.block}>
      <View style={styles.profileBlock}>
        <Text style={styles.helloText}>{`${user?.name} 님 안녕하세요!`}</Text>
      </View>
      <ScrollView>
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
    alignItems: "center",
    justifyContent: "center",
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
