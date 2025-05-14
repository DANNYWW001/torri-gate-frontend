import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://torri-gate-backend-dww.onrender.com/api",
});
