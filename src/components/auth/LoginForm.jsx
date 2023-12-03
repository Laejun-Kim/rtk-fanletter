import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { jwtInstance } from "../../axios/api";
import { setUser } from "redux/modules/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm({ setIsSigningIn }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const signInBtnHndlr = () => {
    setIsSigningIn(true);
  };

  const loginBtnHndlr = async () => {
    try {
      const { data } = await jwtInstance.post(`/login?expiresIn=1h`, {
        id: id,
        password: pw,
      });

      toast.success("로그인 성공!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(setUser(data));
      navigate("/");
    } catch (error) {
      console.error("에러발생 : ", error.response.data.message);
      toast.error(`${error.response.data.message}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <StInputContainer>
      <StForm>
        <StTitle>로그인</StTitle>
        <StIdContainer>
          <label>ID : &nbsp;</label>
          <StInput
            type="text"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            name="text"
            required
            placeholder="아이디(4~10글자)"
            maxLength={10}
            minLength={4}
            autoFocus
          ></StInput>
        </StIdContainer>
        <StPasswordContainer>
          <label>Password : &nbsp;</label>
          <StInput
            type="password"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
            name="password"
            placeholder="비밀번호(4~15글자)"
            maxLength={15}
            minLength={4}
            required
          ></StInput>
        </StPasswordContainer>
      </StForm>
      <StButtonContainer>
        <>
          <StLoginButton onClick={loginBtnHndlr}>로그인</StLoginButton>
          <StSignInButton onClick={signInBtnHndlr}>회원가입</StSignInButton>
        </>
      </StButtonContainer>
    </StInputContainer>
  );
}

//styled-components
const StInputContainer = styled.div`
  width: 440px;
  height: auto;
  padding: 40px 60px;
  margin-top: 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;

const StTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 30px;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
  font-size: 16px;
`;

const StIdContainer = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    font-weight: normal;
    color: #777;
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

const StInput = styled.input`
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #c7c7c7;
  height: 40px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const StPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    font-weight: normal;
    color: #777;
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

const StButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px;
  width: 100%;
`;

const StLoginButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
  &:nth-child(1) {
    color: #fff;
    background: #7579e7;
  }
  &:nth-child(1):hover {
    background-color: #4e53cf;
  }
`;

const StSignInButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
`;

export default LoginForm;
