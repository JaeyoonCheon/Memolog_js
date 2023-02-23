import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import client from "./client";

export const signIn = async (payload) => {
  console.log(payload);
  const { setItem: setAccess } = useAsyncStorage("Access");
  const { setItem: setRefresh } = useAsyncStorage("Refresh");
  const results = await client.post("/user/signin", payload);

  console.log(results.data.token);
  console.log(results.data.token.accessToken);
  console.log(results.data.token.refreshToken);
  setAccess(results.data.token.accessToken);
  setRefresh(results.data.token.refreshToken);

  return results.data;
};

export const signUp = async (payload) => {
  console.log(payload);
  const results = await client.post("/user/signup", payload);

  return results.data;
};
