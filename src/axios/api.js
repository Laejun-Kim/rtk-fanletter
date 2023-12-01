import axios from "axios";

export const jsonInstance = axios.create({
  baseURL: process.env.REACT_APP_JSON_BASE_URL,
});

export const jwtInstance = axios.create({
  baseURL: process.env.REACT_APP_JWT_BASE_URL,
});
