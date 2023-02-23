import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import client from "./client";

export const signIn = async (payload) => {
  const { setItem: setAccess } = useAsyncStorage("Access");
  const { setItem: setRefresh } = useAsyncStorage("Refresh");
  const results = await client.post("/user/signin", payload);

  setAccess(results.data.token.accessToken);
  setRefresh(results.data.token.refreshToken);

  return results.data;
};

export const signUp = async (payload) => {
  const results = await client.post("/user/signup", payload);

  return results.data;
};
