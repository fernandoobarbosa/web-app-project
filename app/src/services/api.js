import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:2900",
});

export default api;
