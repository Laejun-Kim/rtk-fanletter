import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { jwtInstance } from "../../axios/api";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "redux/modules/authSlice";

function SignInForm({ setIsSigningIn }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [nickName, setNickName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const backBtnHndlr = () => {
    setIsSigningIn(false);
  };

  const signInBtnHndlr = async (e) => {
    e.preventDefault();
    console.log("연결완", id, pw, nickName);
    try {
      const response = await jwtInstance.post(`/register`, {
        id: id,
        password: pw,
        nickname: nickName,
      });

      const { data } = await jwtInstance.post(`/login`, {
        id: id,
        password: pw,
      });
      toast.success("회원가입 완료!", {
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

      console.log("response", response);
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
        <StTitle>회원가입</StTitle>
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
        <StNicknameContainer>
          <label>닉네임 : &nbsp;</label>
          <StInput
            type="text"
            value={nickName}
            onChange={(e) => {
              setNickName(e.target.value);
            }}
            name="text"
            placeholder="닉네임(1~10글자)"
            maxLength={10}
            minLength={1}
            required
          ></StInput>
        </StNicknameContainer>
        <StButtonContainer>
          <StSigninBtn onClick={signInBtnHndlr}>회원가입</StSigninBtn>
          <StBackBtn onClick={backBtnHndlr}>이전 페이지로</StBackBtn>
        </StButtonContainer>
      </StForm>
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
const StNicknameContainer = styled.div`
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

const StSigninBtn = styled.button`
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

const StBackBtn = styled.button`
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
`;

export default SignInForm;
