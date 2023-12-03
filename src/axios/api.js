import axios from "axios";

export const jsonInstance = axios.create({
  baseURL: process.env.REACT_APP_JSON_BASE_URL,
});

jsonInstance.interceptors.request.use(
  (config) => {
    console.log("json인터셉터 요청 성공");
    return config;
  },
  (error) => {
    console.log("json인터셉터 요청 오류");
    return Promise.reject(error);
  }
);

jsonInstance.interceptors.response.use(
  (response) => {
    console.log("json인터셉터 응답 받음");
    return response;
  },
  (error) => {
    console.log("json인터셉터 응답 오류");
    return Promise.reject(error);
  }
);

export const jwtInstance = axios.create({
  baseURL: process.env.REACT_APP_JWT_BASE_URL,
});

jwtInstance.interceptors.request.use(
  (config) => {
    console.log("jwt인터셉터 요청 성공");
    return config;
  },
  (error) => {
    console.log("jwt인터셉터 요청 오류");
    return Promise.reject(error);
  }
);

jwtInstance.interceptors.response.use(
  (response) => {
    console.log("jwt인터셉터 응답 받음");
    return response;
  },
  (error) => {
    console.log("jwt인터셉터 응답 오류");
    return Promise.reject(error);
  }
);
