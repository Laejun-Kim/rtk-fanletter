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
      <StSpan onClick={homeBtnHndlr}>HOME</StSpan>
      <div>
        <StSpan onClick={myPageBtnHndlr}>MyPage</StSpan>
        <StSpan onClick={logoutBtnHndlr}>Logout</StSpan>
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
  color: white;
  font-weight: 600;
  /* background-color: #27005d; */
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(60, 0, 135, 1) 50%,
    rgba(171, 120, 221, 1) 100%
  );
`;

const StSpan = styled.span`
  padding: 10px;

  cursor: pointer;
`;

export default Nav;
