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
  const { setItem: setAccess } = useAsyncStorage("Access");
  const { setItem: setExpire } = useAsyncStorage("Expire");

  client.defaults.headers.Authorization = `Bearer ${token}`;

  try {
    const expireTimeNewDate = new Date(await getExpireTime());
    const now = new Date();
    const diff = (now.getTime() - expireTimeNewDate.getTime()) / 1000;

    if (diff > 60) {
      const { token } = await refreshToken();
      const accessToken = token.accessToken;
      client.defaults.headers.Authorization = `Bearer ${accessToken}`;
      setAccess(token.accessToken);
      setExpire(token.expireTime);
    }
  } catch (e) {
    console.log(e);
  }
};

export const removeToken = () => {
  client.defaults.headers.Authorization = undefined;
};

export const refreshToken = async () => {
  const { getItem: getRefreshToken } = useAsyncStorage("Refresh");
  const { getItem: getUserInfo } = useAsyncStorage("UserInfo");

  try {
    const refreshToken = await getRefreshToken();

    const { userId } = JSON.parse(await getUserInfo());

    client.defaults.headers.Authorization = `Bearer ${refreshToken}`;
    const result = await client.post("/user/token", {
      userId: userId,
    });

    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export default client;
