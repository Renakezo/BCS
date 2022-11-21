import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: "http://localhost:3500/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
