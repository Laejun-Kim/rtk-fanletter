import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ReusableButton from "components/UI/ReusableButton";

function Profile() {
  const editBtnHndlr = () => {
    console.log("연결됐음!");
  };

  const { avatar, nickname } = useSelector((state) => state.auth);
  return (
    <StProfileDiv>
      <h1>내 프로필</h1>
      <img src={avatar} alt="등록된 프로필 사진이 없어요" />
      <p>닉네임 : {nickname}</p>
      <ReusableButton onClick={editBtnHndlr}>수정하기</ReusableButton>
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
