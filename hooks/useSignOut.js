import React, { useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useQueryClient } from "react-query";

import { useUserContext } from "../contexts/UserContext";
import { useTokenContext } from "../contexts/TokenContext";
import { removeToken } from "../api/client";

export default function useSignOut() {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useUserContext();
  const [token, setToken] = useTokenContext();
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
      setToken(null);
      removeToken();
      console.log("remove header");
      queryClient.clear();
      queryClient.removeQueries();
      console.log("remove query data and caches");

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
