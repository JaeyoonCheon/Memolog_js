import axios from "axios/index";

// wsl2 서버 실행 시 wsl2의 IP address를 대응 후 adb 포트 연동 필요
const baseURL = __DEV__
  ? "http://192.168.232.151:3367"
  : "http://localhost:3367";

const client = axios.create({
  baseURL,
});

export default client;
