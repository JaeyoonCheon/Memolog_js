import { useMutation } from "react-query";
import { signUp } from "../api/auth";

export default function useSignUp() {
  const mutation = useMutation(signUp);

  return mutation;
}
