import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ReusableButton from "components/UI/ReusableButton";
import Wrapper from "components/UI/Wrapper";

//지금은 유저 정보 조회에 axios를 사용하지 않음. redux state에 저장해둔 유저 정보를 활용함
//근데 이게 맞는지 모르겠음. 해당 페이지가 로드될때 서버에서 새로 받아오도록 해야 하나?
//만약 닉을 바꾸거나 사진을 바꾸는 상황에 최신화 된 것을 바로 적용시키려면 그때 새로 받아와야할듯??
//근데 그래도 get은 안쓸것 같은데.. patch 응답온거에서 데이터 읽고 그거 redux에 올리면 되잖아.
function Profile() {
  const editBtnHndlr = () => {
    console.log("연결됐음!");
  };

  const { avatar, nickname } = useSelector((state) => state.auth);
  return (
    <Wrapper>
      <StProfileContainer>
        <StProfileDiv>
          <h1>내 프로필</h1>
          <img src={avatar} alt="등록된 프로필 사진이 없어요" />
          <p>닉네임 : {nickname}</p>
          <ReusableButton onClick={editBtnHndlr}>수정하기</ReusableButton>
        </StProfileDiv>
      </StProfileContainer>
    </Wrapper>
  );
}

//styled-components
const StProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  /* width: 100vw; */
  /* height: 100vh; */
  /* margin-top: 50px; */
`;

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
  margin-top: 50px;
`;

export default Profile;
