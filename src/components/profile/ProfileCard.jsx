import React from "react";
import ReusableButton from "components/UI/ReusableButton";
import { useSelector } from "react-redux";
import styled from "styled-components";
import tokenValid from "utils/tokenValid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ProfileCard({ setIsEditing }) {
  const navigate = useNavigate();
  const { avatar, nickname, accessToken } = useSelector((state) => state.auth);
  const editBtnHndlr = async () => {
    //accessToken 유효성 검사
    const isValid = await tokenValid(accessToken);
    if (isValid) {
      setIsEditing(true);
    } else {
      toast.error(`토큰이 만료되었습니다. 다시 로그인해주세요`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };
  return (
    <StProfileDiv>
      <StH1>내 프로필</StH1>
      <img src={avatar} alt="등록된 프로필 사진이 없어요" />
      <StNick>{nickname}</StNick>
      <StButtonContainer>
        <ReusableButton onClick={editBtnHndlr}>수정하기</ReusableButton>
      </StButtonContainer>
    </StProfileDiv>
  );
}

//styled-components
const StProfileDiv = styled.div`
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
const StNick = styled.p`
  font-size: 30px;
  margin-top: 15px;
`;
const StH1 = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 600;
`;
export default ProfileCard;
