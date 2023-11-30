import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setUser, logout } from "redux/modules/authSlice";

function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const homeBtnHndlr = () => {
    navigate("/");
  };
  const myPageBtnHndlr = () => {
    navigate("profile");
  };
  const logoutBtnHndlr = () => {
    dispatch(logout());
    navigate("login");
  };

  return (
    <StNav>
      <StSpan onClick={homeBtnHndlr}>홈으로</StSpan>
      <div>
        <StSpan onClick={myPageBtnHndlr}>마이페이지</StSpan>
        <StSpan onClick={logoutBtnHndlr}>로그아웃</StSpan>
      </div>
    </StNav>
  );
}

//styled-components
const StNav = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: absolute;
  top: 0px;
  margin-bottom: 30px;
`;

const StSpan = styled.span`
  padding: 10px;

  cursor: pointer;
`;

export default Nav;
