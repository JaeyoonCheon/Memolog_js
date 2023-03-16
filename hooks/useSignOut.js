import React, { useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useNavigation, CommonActions } from "@react-navigation/native";

import { useUserContext } from "../contexts/UserContext";
import { removeToken } from "../api/client";

export default function useSignOut() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [_, setUser] = useUserContext();
  const { removeItem: removeAccess } = useAsyncStorage("Access");
  const { removeItem: removeRefresh } = useAsyncStorage("Refresh");
  const { removeItem: removeExpire } = useAsyncStorage("Expire");
  const { removeItem: removeUserInfo } = useAsyncStorage("UserInfo");

  const signOut = async () => {
    setIsLoading(true);
    try {
      setUser(null);
      await removeAccess();
      console.log("remove access");
      await removeRefresh();
      console.log("remove refresh");
      await removeExpire();
      console.log("remove expire");
      await removeUserInfo();
      console.log("remove user");
      removeToken();
      console.log("remove header");

      console.log("remove complete");
      navigation.reset({
        index: 0,
        routes: [{ name: "Splash" }],
      });
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  return [isLoading, signOut];
}
