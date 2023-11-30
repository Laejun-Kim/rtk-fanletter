import React from "react";
import styled from "styled-components";
import ReusableButton from "components/UI/ReusableButton";

function ProfileEdit({ setIsEditing }) {
  const editCompleteBtnHndlr = () => {
    console.log("연결됨ㅇㅇ");
  };
  const cancelBtnHndlr = () => {
    setIsEditing(false);
  };

  return (
    <StProfileEditDiv>
      <form>여기서 수정시키면 되겠지?</form>
      <ReusableButton onClick={cancelBtnHndlr}>취소</ReusableButton>
      <ReusableButton onClick={editCompleteBtnHndlr}>수정 완료</ReusableButton>
    </StProfileEditDiv>
  );
}

//styled-components
const StProfileEditDiv = styled.div`
  width: 440px;
  height: auto;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
`;

export default ProfileEdit;
