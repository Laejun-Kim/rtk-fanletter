import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { activateModal, resetModal } from "redux/modules/modalControlSlice";
import ReusableButton from "components/UI/ReusableButton";
import ReusableModal from "components/UI/ReusableModal";
import Wrapper from "components/UI/Wrapper";
import { jsonInstance } from "../axios/api";
import { toast } from "react-toastify";
import tokenValid from "utils/tokenValid";

function Detail() {
  //스크롤 올리기 - 최초 한번만 실행
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  //redux
  const fanLetters = useSelector((state) => state.fanLetter);
  const modalControl = useSelector((state) => state.modalControl);
  const { userId, accessToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const params = useParams();
  const navigate = useNavigate();
  const matchingLetter = fanLetters.find((letter) => letter.id == params.id);
  const editRef = useRef("");
  console.log("매칭레터", matchingLetter);
  // local states
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(matchingLetter.content);

  const deleteBtnHndlr = () => {
    dispatch(
      activateModal({
        title: "삭제 확인",
        message: "한번 삭제된 메시지는 복구할 수 없습니다. 삭제하시겠습니까?",
        btnMsg: "삭제",
        btnFn: onDelete,
      })
    );
  };

  const isAuthor = matchingLetter.userId === userId;
  console.log("글쓴이 맞음?", isAuthor);

  const editBtnHndlr = async () => {
    const isValid = await tokenValid(accessToken);
    if (isValid) {
      setIsEditing((prev) => !prev);
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
  const editChangeHndlr = (e) => {
    setEditText(e.target.value);
  };
  const editCompleteBtnHndlr = () => {
    let editTarget = fanLetters.filter(
      (letter) => letter.id == matchingLetter.id
    );
    if (editTarget[0].content === editRef.current.value) {
      dispatch(
        activateModal({
          title: "수정 오류",
          message: `변경된 내용이 없는것 같습니다.
          내용이 변경된 경우에 [수정완료]버튼을 눌러주세요`,
        })
      );

      setIsEditing((prev) => !prev);
    } else {
      dispatch(
        activateModal({
          title: "수정 확인",
          message: "이대로 수정하시겠습니까?",
          btnMsg: "확인",
          btnFn: onEditConfirm,
        })
      );
    }
  };
  const deleteBtnPreHndlr = async () => {
    const isValid = await tokenValid(accessToken);
    if (isValid) {
      deleteBtnHndlr();
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

  //모달에 전달할 함수들
  const onDelete = async () => {
    try {
      await jsonInstance.delete(`/${matchingLetter.id}`);
    } catch (error) {
      console.error("에러발생 : ", error.response.data.message);
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
      return;
    }

    dispatch(resetModal());
    navigate("/");
  };

  const onEditConfirm = async () => {
    await jsonInstance.patch(`/${matchingLetter.id}`, {
      ...matchingLetter,
      content: editRef.current.value,
    });
    dispatch(resetModal());
    navigate("/");
  };

  return (
    <Wrapper>
      {modalControl && (
        <ReusableModal
          title={modalControl.title}
          message={modalControl.message}
          btnMsg={modalControl.btnMsg}
          btnFn={modalControl.btnFn}
        />
      )}
      <StDetailContainer>
        <StLetterDetail>
          <StSenderDiv>
            <img src={matchingLetter.avatar} alt="" />
            <div>
              <p>{matchingLetter.nickname}</p>
              <span>{matchingLetter.createdAt}</span>
            </div>
          </StSenderDiv>

          <StReceiverP>{matchingLetter.writedTo} 님에게...</StReceiverP>
          {!isEditing && (
            <StTextAreaForContent disabled value={matchingLetter.content} />
          )}
          {isEditing && (
            <StEditInput
              value={editText}
              onChange={editChangeHndlr}
              ref={editRef}
            />
          )}
          <StBtnDiv $shouldDisplay={isAuthor}>
            {!isEditing && (
              <ReusableButton onClick={editBtnHndlr}>수정</ReusableButton>
            )}
            {isEditing && (
              <ReusableButton onClick={editCompleteBtnHndlr}>
                수정 완료
              </ReusableButton>
            )}
            <ReusableButton onClick={deleteBtnPreHndlr}>삭제</ReusableButton>
          </StBtnDiv>
        </StLetterDetail>
      </StDetailContainer>
    </Wrapper>
  );
}

//styled components
const StDetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 10px;
  min-width: 700px;
  margin: auto;
`;
const StLetterDetail = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 2px solid #8248f6;
  border-radius: 0px 15px 15px 15px;
  box-shadow: 0 0 7px #8248f6, 0 0 10px #8248f6, 0 0 21px #8248f6,
    0 0 1px #7a49b4, 0 0 1px #7a49b4, 0 0 1px #7a49b4, 0 0 1px #7a49b4,
    0 0 1px #7a49b4;
  padding: 10px;
  width: 90%;
  max-width: 900px;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  color: white;
`;
const StSenderDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #7949b47d;
  width: 100%;
  padding: 10px;
  font-size: larger;
  border-radius: 10px;
  margin: 0 0 20px 0;
  img {
    margin-right: 10px;
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
  span {
    font-size: small;
  }
  p {
    font-size: larger;
    margin-bottom: 10px;
  }
`;
const StBtnDiv = styled.div`
  display: ${(props) =>
    props.$shouldDisplay ? "flex" : "none"}; //작성자가 아니면 안보이게
  justify-content: space-around;
  width: 100%;
  margin-top: 50px;
  button {
    padding: 0.6rem;
    width: 120px;
    cursor: pointer;
    font-size: large;
  }
  button:first-of-type {
    background-color: #b0e0e6;
  }
  button:last-of-type {
    background-color: #cd3217;
    color: white;
  }
`;
const StReceiverP = styled.p`
  font-size: large;
  margin-bottom: 10px;
`;
const StEditInput = styled.textarea`
  resize: none;
  width: 100%;
  height: 200px;
  background-color: #ffc0cb1d;
  border-radius: 10px;
  color: white;
  font-size: large;
`;
const StTextAreaForContent = styled.textarea`
  resize: none;
  width: 100%;
  height: 200px;
  background-color: transparent;
  border-radius: 10px;
  color: white;
  font-size: large;
`;

export default Detail;
