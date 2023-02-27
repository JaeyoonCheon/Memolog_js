import axios from "axios/index";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

// wsl2 서버 실행 시 wsl2의 IP address를 대응 후 adb 포트 연동 필요
const baseURL = __DEV__
  ? "http://192.168.236.21:3367"
  : "http://localhost:3367";

const client = axios.create({
  baseURL,
});

export const addToken = async (token) => {
  const { getItem: getExpireTime } = useAsyncStorage("Expire");

  client.defaults.headers.Authorization = `Bearer ${token}`;

  const expireTimeNewDate = new Date(await getExpireTime());

  const now = new Date();

  console.log(now + "  " + expireTimeNewDate);
  const diff = (now.getTime() - expireTimeNewDate.getTime()) / 1000;

  console.log(diff);

  if (diff > 60) {
    console.log("over!");
    console.log(await refreshToken());
  }
};

export const removeToken = () => {
  client.defaults.headers.Authorization = undefined;
};

export const refreshToken = async () => {
  const { getItem: getRefreshToken } = useAsyncStorage("Refresh");
  const { getItem: getUserInfo } = useAsyncStorage("UserInfo");

  console.log("Refreshing...");

  const refreshToken = await getRefreshToken();

  const { userId } = JSON.parse(await getUserInfo());

  client.defaults.headers.Authorization = `Bearer ${refreshToken}`;
  const result = await client.post("/user/token", {
    userId: userId,
  });

  console.log("refresh");
  console.log(result);
  console.log(result.data);

  return result.data;
};

export default client;
