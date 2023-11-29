import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 440px;
  height: auto;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
  font-size: 16px;
`;

const IdContainer = styled.div`
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

const Input = styled.input`
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #c7c7c7;
  height: 40px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const PasswordContainer = styled.div`
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px;
  width: 100%;
`;

const LoginButton = styled.button`
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
  /* &:nth-child(3) {
    position: relative;
    color: #333;
    background: #e6e6e6;
  }
  &:nth-child(3):hover {
    background-color: #cbcbcb;
  }
  &:nth-child(3)::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translate(-50%, -50%);
    display: block;
    width: 24px;
    height: 24px;
  }
  &:nth-child(4) {
    position: relative;
    color: #fff;
    background: #333;
  }
  &:nth-child(4):hover {
    background-color: #000000;
  }
  &:nth-child(4)::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translate(-50%, -50%);
    display: block;
    width: 18px;
    height: 17.473px;
  } */
`;

const SignInButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
  /* &:nth-child(1) {
    color: #fff;
    background: #7579e7;
  }
  &:nth-child(1):hover {
    background-color: #4e53cf;
  } */
`;

const BR = styled.p`
  position: relative;
  color: #555;
  font-size: 14px;
  text-align: center;
  margin: 10px 0;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: calc(50% - 30px);
    height: 1px;
    background: #e8e8ea;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: calc(50% - 30px);
    height: 1px;
    background: #e8e8ea;
  }
`;

const ErrorTextContainer = styled.div`
  width: max-content;
  height: auto;
`;

const ErrorText = styled.p`
  color: red;
  margin-bottom: 0 10px;
`;

function LoginForm({ setIsSigningIn }) {
  const signInBtnHndlr = () => {
    setIsSigningIn(true);
  };
  return (
    <InputContainer>
      <Form>
        <Title>로그인</Title>
        <IdContainer>
          <label>ID : &nbsp;</label>
          <Input
            type="email"
            // value={credentials.id}
            name="email"
            required
            placeholder="아이디(4~10글자)"
            autoFocus
            onChange={() => {}}
          ></Input>
        </IdContainer>
        <PasswordContainer>
          <label>Password : &nbsp;</label>
          <Input
            type="password"
            // value={credentials.password}
            name="password"
            placeholder="비밀번호(4~15글자)"
            required
          ></Input>
        </PasswordContainer>
        <ErrorTextContainer></ErrorTextContainer>
      </Form>
      <ButtonContainer>
        <>
          <LoginButton>로그인</LoginButton>
          <SignInButton onClick={signInBtnHndlr}>회원가입</SignInButton>
        </>
      </ButtonContainer>
    </InputContainer>
  );
}

export default LoginForm;
