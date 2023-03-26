import axios from "axios/index";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

// wsl2 서버 실행 시 wsl2의 IP address를 대응 후 adb 포트 연동 필요
const baseURL = __DEV__
  ? "http://172.24.159.170:3367"
  : "http://localhost:3367";

const client = axios.create({
  baseURL,
});

client.interceptors.response.use(
  function (res) {
    return res;
  },
  async function (error) {
    try {
      console.log(error);
      // Access token 만료
      if (error.response.status === 401) {
        console.log("Access token check - expire");
        await refreshToken();

        return axios.request(error.config);
      }
    } catch (e) {
      return e;
    }
  }
);

export const addToken = async (token) => {
  const { getItem: getExpireTime } = useAsyncStorage("Expire");

  client.defaults.headers.Authorization = `Bearer ${token}`;

  console.log("add token to header");

  try {
    const expireTimeNewDate = new Date(await getExpireTime());
    const now = new Date();
    const diff = (expireTimeNewDate.getTime() - now.getTime()) / 1000;

    console.log(`now : ${now}`);
    console.log(`expire : ${expireTimeNewDate}`);
    console.log(`diff : ${diff}`);

    if (diff < 60) {
      await refreshToken();
    }
  } catch (e) {
    console.log(e);
    const { removeItem: removeUserInfo } = useAsyncStorage("UserInfo");
    const { removeItem: removeAccess } = useAsyncStorage("Access");
    const { removeItem: removeRefresh } = useAsyncStorage("Refresh");

    await removeUserInfo();
    await removeAccess();
    await removeRefresh();

    removeToken();
  }
};

export const removeToken = () => {
  client.defaults.headers.Authorization = undefined;
};

export const refreshToken = async () => {
  const { getItem: getRefreshToken } = useAsyncStorage("Refresh");
  const { getItem: getUserInfo } = useAsyncStorage("UserInfo");
  const { setItem: setAccess } = useAsyncStorage("Access");
  const { setItem: setExpireTime } = useAsyncStorage("Expire");

  console.log("Refresh token");

  try {
    const refreshToken = await getRefreshToken();

    const { userId } = JSON.parse(await getUserInfo());

    if (!refreshToken || !userId) {
      console.log("Can't refresh token");
    }

    client.defaults.headers.Authorization = `Bearer ${refreshToken}`;

    console.log("post token");
    const result = await client.post("/auth/token", {
      userId: userId,
    });
    console.log("post request end");

    const { token } = result?.data;
    const { accessToken, expireTime } = token;

    client.defaults.headers.Authorization = `Bearer ${accessToken}`;
    setAccess(accessToken);
    setExpireTime(expireTime);
  } catch (e) {
    console.log(e);

    throw new Error("Token Error");
  }
};

export default client;
