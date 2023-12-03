import React, { useState } from "react";
import styled from "styled-components";
import ReusableButton from "components/UI/ReusableButton";
import { useDispatch, useSelector } from "react-redux";
import { jwtInstance } from "../../axios/api";
import { toast } from "react-toastify";
import { __editUser } from "redux/modules/authSlice";
import tokenValid from "utils/tokenValid";
import { useNavigate } from "react-router-dom";

function ProfileEdit({ setIsEditing }) {
  const navigate = useNavigate();
  const { avatar, nickname, accessToken, userId } = useSelector(
    (state) => state.auth
  );
  const [tempNick, setTempNick] = useState(nickname);
  const [tempAvatar, setTempAvatar] = useState(avatar);
  const [previewAvatar, SetPreviewAvatar] = useState(avatar);
  const dispatch = useDispatch();

  const editCompleteBtnHndlr = (e) => {
    //accessToken 유효성 검사--이게 들어가면 알수없는 이유로 profilesubmitHndlr(e);가 두번 실행되네....
    // const isValid = await tokenValid(accessToken);
    // if (isValid) {
    profilesubmitHndlr(e);
    // } else {
    //   setTimeout(() => {
    //     navigate("/login");
    //   }, 2000);
  };
  // };
  const cancelBtnHndlr = () => {
    setIsEditing(false);
  };

  const profilesubmitHndlr = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("nickname", tempNick);
      formData.append("avatar", tempAvatar);

      //jwt 서버쪽 업데이트
      const response = await jwtInstance.patch("/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log("서버 응답:", response.data);
      toast.success(`${response.data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const changedProfile = {};

      if (response.data) {
        if (response.data.hasOwnProperty("nickname")) {
          changedProfile.nickname = response.data.nickname;
        }

        if (response.data.hasOwnProperty("avatar")) {
          changedProfile.avatar = response.data.avatar;
        }
      }

      //thunk 써서 리덕스 상태와 json-server쪽 업데이트를 동시에 처리함.
      dispatch(__editUser({ changedProfile, userId }));

      setIsEditing(false);
    } catch (error) {
      console.error("서버 오류:", error);
      toast.error(`${error.response.data.message}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const handleAvatarChange = (e) => {
    setTempAvatar(e.target.files[0]);
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        SetPreviewAvatar(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleNickChange = (e) => {
    setTempNick(e.target.value);
  };

  return (
    <StProfileEditDiv>
      <StH1>프로필 수정</StH1>
      <StForm onSubmit={profilesubmitHndlr}>
        <img src={previewAvatar} alt="등록된 프로필 사진이 없어요" />
        <input type="file" onChange={handleAvatarChange} />
        <StInput type="text" value={tempNick} onChange={handleNickChange} />
        <StButtonContainer>
          <ReusableButton
            onClick={(e) => {
              editCompleteBtnHndlr(e);
            }}
          >
            수정 완료
          </ReusableButton>
          <ReusableButton onClick={cancelBtnHndlr}>취소</ReusableButton>
        </StButtonContainer>
      </StForm>
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
const StH1 = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 600;
`;
const StForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
const StInput = styled.input`
  font-size: 20px;
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
