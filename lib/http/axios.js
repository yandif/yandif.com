import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:1337/",
  timeout: 1000 * 15,
});

export default instance;
