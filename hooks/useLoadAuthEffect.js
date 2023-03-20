import React, { useEffect } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { addToken } from "../api/client";
import { useUserContext } from "../contexts/UserContext";

export default function useLoadAuthEffect() {
  const { getItem: getAccess } = useAsyncStorage("Access");
  const { getItem: getUserInfo } = useAsyncStorage("UserInfo");
  const { getItem: getRemember } = useAsyncStorage("Remember");
  const [_, setUser] = useUserContext();

  useEffect(() => {
    const loadFn = async () => {
      const isRememberString = await getRemember();
      const isRemember = JSON.parse(isRememberString);
      if (!isRemember) {
        console.log("No auto-login");
        return;
      }

      const accessToken = await getAccess();
      if (!accessToken) {
        return;
      }

      const userInfoString = await getUserInfo();
      const userInfo = JSON.parse(userInfoString);
      if (!userInfo) {
        return;
      }

      setUser(userInfo);
      addToken(accessToken);
    };
    loadFn();
  }, []);
}
