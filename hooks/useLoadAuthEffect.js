import React, { useEffect } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { addToken, refreshToken } from "../api/client";
import { useUserContext } from "../contexts/UserContext";
import { useTokenContext } from "../contexts/TokenContext";

export default function useLoadAuthEffect() {
  const { getItem: getAccess } = useAsyncStorage("Access");
  const { getItem: getUserInfo } = useAsyncStorage("UserInfo");
  const { getItem: getRemember } = useAsyncStorage("Remember");

  const [token, setToken] = useTokenContext();
  const [user, setUser] = useUserContext();

  useEffect(() => {
    const loadFn = async () => {
      console.log("load storage data!");
      const isRememberString = await getRemember();
      const isRemember = JSON.parse(isRememberString);
      if (!isRemember) {
        return;
      }

      const accessToken = await getAccess();
      const userInfoString = await getUserInfo();
      const userInfo = JSON.parse(userInfoString);
      if (!userInfo) {
        return;
      }
      setUser(userInfo);

      if (!accessToken) {
        await refreshToken();
      }

      setToken(accessToken);
      addToken(accessToken);
    };

    loadFn();
  }, []);
}
