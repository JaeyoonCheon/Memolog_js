import { useMutation } from "react-query";
import { signUp } from "../api/auth";

export default function useSignUp() {
  const mutation = useMutation(signUp, {
    onSuccess: (results) => {},
  });

  return mutation;
}
