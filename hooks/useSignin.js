import { useMutation } from "react-query";
import { signIn } from "../api/auth";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export default function useSignin() {
  const { setItem: setAccess } = useAsyncStorage("Access");
  const { setItem: setRefresh } = useAsyncStorage("Refresh");

  const mutation = useMutation(signIn, {
    onSuccess: (data) => {
      setAccess(data.token.accessToken);
      setRefresh(data.token.refreshToken);
    },
  });

  return mutation;
}
