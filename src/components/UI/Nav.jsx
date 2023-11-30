import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  const navigate = useNavigate();

  const homeBtnHndlr = () => {
    navigate("/");
  };
  const myPageBtnHndlr = () => {
    navigate("profile");
  };

  return (
    <StNav>
      <StSpan onClick={homeBtnHndlr}>홈으로</StSpan>
      <div>
        <StSpan onClick={myPageBtnHndlr}>마이페이지</StSpan>
        <StSpan
          onClick={() => {
            navigate("login");
          }}
        >
          로그아웃
        </StSpan>
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
