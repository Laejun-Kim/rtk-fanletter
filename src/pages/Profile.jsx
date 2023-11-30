import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Profile() {
  const { avatar, nickname } = useSelector((state) => state.auth);
  return (
    <StProfileDiv>
      <img src={avatar} alt="" />
      <p>닉네임 : {nickname}</p>
    </StProfileDiv>
  );
}

//styled-components
const StProfileDiv = styled.div`
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

export default Profile;
