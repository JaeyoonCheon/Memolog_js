import { useMutation } from "react-query";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { signUp } from "../api/auth";
import { useUserContext } from "../contexts/UserContext";
import { useTokenContext } from "../contexts/TokenContext";
import { addToken } from "../api/client";

export default function useSignUp() {
  const { setItem: setAccess } = useAsyncStorage("Access");
  const { setItem: setRefresh } = useAsyncStorage("Refresh");
  const { setItem: setExpire } = useAsyncStorage("Expire");
  const { setItem: setUserInfo } = useAsyncStorage("UserInfo");
  const { setItem: setRemember } = useAsyncStorage("Remember");

  const [user, setUser] = useUserContext();
  const [token, setToken] = useTokenContext();

  const mutation = useMutation(signUp, {
    onSuccess: async (data) => {
      setUser(data.user);
      setToken(data.token.accessToken);
      setAccess(data.token.accessToken);
      setRefresh(data.token.refreshToken);
      setExpire(data.token.expireTime);
      setUserInfo(JSON.stringify(data.user));
      setRemember(JSON.stringify(true));
      await addToken(data.token.accessToken);
    },
  });

  return mutation;
}
