import axios from "axios/index";

// wsl2 서버 실행 시 wsl2의 IP address를 대응 후 adb 포트 연동 필요
const baseURL = __DEV__
  ? "http://192.168.234.141:3367"
  : "http://localhost:3367";

const client = axios.create({
  baseURL,
});

export const addToken = (token) => {
  client.defaults.headers.Authorization = `Bearer ${token}`;
};

export const removeToken = (token) => {
  client.defaults.headers.Authorization = undefined;
};

export default client;
