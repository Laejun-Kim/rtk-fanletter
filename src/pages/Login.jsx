import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignInForm from "components/auth/SignInForm";
import LoginForm from "components/auth/LoginForm";

import { useDispatch } from "react-redux";

//styled-components
const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  /* height: 100vh; */
  margin-top: 50px;
`;

const Login = () => {
  const [isSigningIn, setIsSigningIn] = useState(false); // 로그인창or회원가입창 toggle
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <LoginContainer>
        {isSigningIn && <SignInForm setIsSigningIn={setIsSigningIn} />}
        {!isSigningIn && <LoginForm setIsSigningIn={setIsSigningIn} />}
      </LoginContainer>
    </>
  );
};

export default Login;
