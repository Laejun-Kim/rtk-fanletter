import { useEffect, useState } from "react";
import { jwtInstance } from "../axios/api";

const useTokenValidationHook = (accessToken, temp) => {
  const [isValid, setIsValid] = useState(true);
  useEffect(() => {
    const validate = async () => {
      try {
        const response = await jwtInstance.get(`/user`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        // console.log("토큰관련응답", response.data);
        setIsValid(response.data.success);
      } catch (error) {
        setIsValid(false);
      }
    };
    validate();
  }, [accessToken, temp]);
  return [isValid];
};

export default useTokenValidationHook;
