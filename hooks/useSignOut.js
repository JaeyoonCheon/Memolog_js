import React, { useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { useUserContext } from "../contexts/UserContext";
import { removeToken } from "../api/client";

export default function useSignOut() {
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
      await removeRefresh();
      await removeExpire();
      await removeUserInfo();
      removeToken();
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  return [isLoading, signOut];
}
