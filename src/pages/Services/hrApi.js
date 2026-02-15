import axios from "axios";

const hrApi = axios.create({
  baseURL: "http://localhost:5000/api/hr",
});

hrApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default hrApi;
