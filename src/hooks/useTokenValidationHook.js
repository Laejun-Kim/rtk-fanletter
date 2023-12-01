import { useEffect, useState } from "react";
import { jwtInstance } from "../axios/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useTokenValidationHook = (accessToken, temp) => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
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
        setIsValid(true);
      } catch (error) {
        // console.log("에러가 나면 여길로옴?");
        // navigate("login");
        setIsValid(false);
        toast.error(`토큰이 만료되었습니다. 다시 로그인해주세요`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setTimeout(() => {
          navigate("login");
        }, 2000);
      }
    };
    validate();
  }, [accessToken, temp]);
  return [isValid];
};

export default useTokenValidationHook;
