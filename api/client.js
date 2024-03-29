import axios from "axios/index";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { SOURCE_ADDRESS, SOURCE_PORT } from "@env";

// wsl2 서버 실행 시 wsl2의 IP address를 대응 후 adb 포트 연동 필요
const baseURL = `http://172.19.167.37:${SOURCE_PORT}`;

console.log(baseURL);

const client = axios.create({
  baseURL,
});

client.interceptors.response.use(
  function (res) {
    return res;
  },
  async function (error) {
    console.log("Error intercept");
    console.log(error);

    if (error.response.data.name === "ER04") {
      await refreshToken();

      return axios.request(error.config);
    } else if (error.response.data.name === "ER05") {
      console.log("Too old account");

      const navigation = useNavigation();
      navigation.navigate("SignIn");
    } else if (error.response.data.name === "ER06") {
      const isRefreshTokenExist = await checkRefreshToken();

      if (isRefreshTokenExist) {
        console.log("Refetch refresh token");
        await refreshToken();
      }
    }

    return Promise.reject(error);
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
      console.log("request token refresh");
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

const checkRefreshToken = async () => {
  const { getItem: getRefreshToken } = useAsyncStorage("Refresh");

  const refreshToken = await getRefreshToken();

  return !!refreshToken;
};

export default client;
