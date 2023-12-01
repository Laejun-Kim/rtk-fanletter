import { jwtInstance } from "../axios/api";

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
