import React from "react";
import styled from "styled-components";
import ReusableButton from "components/UI/ReusableButton";
import { useSelector } from "react-redux";

function ProfileEdit({ setIsEditing }) {
  const { avatar, nickname } = useSelector((state) => state.auth);

  const editCompleteBtnHndlr = () => {
    console.log("연결됨ㅇㅇ");
  };
  const cancelBtnHndlr = () => {
    setIsEditing(false);
  };

  return (
    <StProfileEditDiv>
      <h1>프로필 수정</h1>
      <form>
        <img src={avatar} alt="등록된 프로필 사진이 없어요" />
        <p>닉네임 : {nickname}</p>
      </form>
      <StButtonContainer>
        <ReusableButton onClick={editCompleteBtnHndlr}>
          수정 완료
        </ReusableButton>
        <ReusableButton onClick={cancelBtnHndlr}>취소</ReusableButton>
      </StButtonContainer>
    </StProfileEditDiv>
  );
}

//styled-components
const StProfileEditDiv = styled.div`
  width: 440px;
  height: 500px;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
  position: relative;
  img {
    width: 200px;
    height: 200px;
  }
`;
const StButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px;
  width: 80%;
  position: absolute;
  bottom: 20px;
  button {
    width: 100%;
    border: none;
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s;
  }
  button:first-of-type {
    color: #fff;
    background: #7579e7;
  }
  button:first-of-type:hover {
    background-color: #4e53cf;
  }
`;

export default ProfileEdit;
