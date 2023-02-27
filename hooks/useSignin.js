import { useMutation } from "react-query";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { signIn } from "../api/auth";
import { useUserContext } from "../contexts/UserContext";
import { addToken } from "../api/client";

export default function useSignin() {
  const [_, setUser] = useUserContext();
  const { setItem: setAccess } = useAsyncStorage("Access");
  const { setItem: setRefresh } = useAsyncStorage("Refresh");
  const { setItem: setExpire } = useAsyncStorage("Expire");
  const { setItem: setUserInfo } = useAsyncStorage("UserInfo");

  const mutation = useMutation(signIn, {
    onSuccess: (data) => {
      setUser(data.user);
      setAccess(data.token.accessToken);
      setRefresh(data.token.refreshToken);
      setExpire(data.token.expireTime);
      setUserInfo(JSON.stringify(data.user));
      addToken(data.token.accessToken);
    },
  });

  return mutation;
}
