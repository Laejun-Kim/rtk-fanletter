import { jwtInstance } from "../axios/api";

//accessToken 의 유효성을 검사해서 true/false를 리턴하는 함수
const tokenValid = async (accessToken) => {
  try {
    await jwtInstance.get(`/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return true;
  } catch (error) {
    console.error(error);

    return false;
  }
};

export default tokenValid;
