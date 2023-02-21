import axios from "axios/index";

const baseURL = __DEV__ ? "http://localhost:3367" : "http://localhost:3367";

const client = axios.create({
  baseURL,
});

export default client;
