import React from "react";
import styled from "styled-components";
import headerAllbg2 from "assets/pic/kdaHeaderBg2.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./UI/Nav";
import { setMember } from "redux/modules/chosenMemberSlice";

function Header() {
  //redux
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.chosenMember.chosenMember);

  const navigate = useNavigate();
  const location = useLocation();
  let isAtHome = location.pathname === "/" ? true : false;

  const engToKor = (string) => {
    switch (string) {
      case "ALL":
        return "전체보기";

      case "AKALI":
        return "아칼리";

      case "AHRI":
        return "아리";

      case "EVELYN":
        return "이블린";

      case "KAISA":
        return "카이사";
    }
  };

  function handleClick(event) {
    let member;
    switch (event.target.textContent) {
      case "전체보기":
        member = "ALL";
        break;
      case "아칼리":
        member = "AKALI";
        break;
      case "아리":
        member = "AHRI";
        break;
      case "이블린":
        member = "EVELYN";
        break;
      case "카이사":
        member = "KAISA";
        break;
    }
    dispatch(setMember(member));
  }
  const tempArr = ["전체보기", "아칼리", "아리", "이블린", "카이사"];

  const titleClickHndlr = () => {
    navigate("/");
    dispatch(setMember("ALL"));
  };
  return (
    <StHeaderContainer>
      <Nav />
      <StHeaderTitle onClick={titleClickHndlr}>K/DA Fan Letters</StHeaderTitle>
      <StMemberSelect $shouldDisplay={isAtHome}>
        {tempArr.map((item) => {
          return (
            <StTab
              key={item}
              onClick={handleClick}
              $clicked={engToKor(selectedTab) === `${item}`}
            >
              {item}
            </StTab>
          );
        })}
      </StMemberSelect>
    </StHeaderContainer>
  );
}

//styled-components
const StHeaderContainer = styled.section`
  width: 100%;
  height: 250px;
  background-image: url(${headerAllbg2});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const StHeaderTitle = styled.h1`
  color: white;
  font-size: 3rem;
  text-shadow: 0 0 7px #8248f6, 0 0 10px #8248f6, 0 0 21px #8248f6,
    0 0 42px #7a49b4, 0 0 82px #7a49b4, 0 0 92px #7a49b4, 0 0 102px #7a49b4,
    0 0 151px #7a49b4;
  cursor: pointer;
`;
const StMemberSelect = styled.ul`
  gap: 20px;
  margin-top: 50px;
  display: ${(props) =>
    props.$shouldDisplay ? "flex" : "none"}; //home 이외에선 안보이게.
`;

const StTab = styled.li`
  font-size: 1.5rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);

  width: 150px;
  padding: 5px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    scale: 1.1;
    color: white;
  }
  ${(props) =>
    props.$clicked &&
    `
      background-color: #971f977e;
      color: #fff;
      border:1px solid white;
      scale:1.1;
    `}
`;

export default Header;
