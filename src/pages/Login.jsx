import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SignInForm from "components/auth/SignInForm";
import LoginForm from "components/auth/LoginForm";
import { useDispatch } from "react-redux";
import { logout } from "redux/modules/authSlice";
import Wrapper from "components/UI/Wrapper";

//styled-components
const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  /* width: 100vw; */
  /* height: 100vh; */
  /* margin-top: 50px; */
`;

const Login = () => {
  const dispatch = useDispatch();
  const [isSigningIn, setIsSigningIn] = useState(false); // 로그인창or회원가입창 toggle

  useEffect(() => {
    dispatch(logout());
  }, []);

  return (
    <Wrapper>
      <LoginContainer>
        {isSigningIn && <SignInForm setIsSigningIn={setIsSigningIn} />}
        {!isSigningIn && <LoginForm setIsSigningIn={setIsSigningIn} />}
      </LoginContainer>
    </Wrapper>
  );
};

export default Login;
