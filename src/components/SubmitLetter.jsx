import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { __setFanLetters } from "redux/modules/fanLetterSlice";
import ReusableButton from "./UI/ReusableButton";
import ReusableModal from "./UI/ReusableModal";
import { activateModal } from "redux/modules/modalControlSlice";
import { jsonInstance } from "../axios/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import tokenValid from "utils/tokenValid";

function SubmitLetter() {
  //redux
  const fanLetters = useSelector((state) => state.fanLetter);
  const chosenMember = useSelector((state) => state.chosenMember.chosenMember);
  const modalControl = useSelector((state) => state.modalControl);
  const { nickname, avatar, userId, accessToken } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();
  //local states
  const [letterContent, setLetterContent] = useState("");
  const [selmem, setSelmem] = useState();

  const postNewLetter = async (newLetter) => {
    try {
      //accessToken 유효성 검사
      const isValid = await tokenValid(accessToken);
      console.log(isValid);
      if (isValid) {
        await jsonInstance.post("", newLetter);
        dispatch(
          activateModal({
            title: "메시지 등록",
            message: "메시지가 등록되었습니다! 감사합니다 ❤️",
          })
        );
        dispatch(__setFanLetters(accessToken));
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
          navigate("login");
        }, 2000);
      }
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
    }
  };

  const memberSelectHndlr = (e) => {
    setSelmem(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    let formattedDate = new Intl.DateTimeFormat("ko-KR", {
      dateStyle: "full",
      timeStyle: "medium",
    }).format(new Date());
    //신규 팬레터 생성
    let newLetter = {
      id: nanoid(),
      nickname: nickname,
      content: letterContent,
      writedTo: selmem,
      createdAt: formattedDate,
      avatar: avatar,
      userId: userId,
    };
    postNewLetter(newLetter);
  };

  //form 입력값을 초기화
  useEffect(() => {
    setLetterContent("");
  }, [chosenMember, fanLetters]);

  //선택된 멤버에 따라 select태그 value 변경
  useEffect(() => {
    setSelmem(chosenMember);
  }, [chosenMember]);

  return (
    <>
      {modalControl && (
        <ReusableModal
          title={modalControl.title}
          message={modalControl.message}
          btnMsg={modalControl.btnMsg}
          btnFn={modalControl.btnFn}
        />
      )}
      <StForm onSubmit={submitHandler}>
        <div>닉네임 : {nickname}</div>
        <StDivForLetterContent>
          <label htmlFor="letterContent">메시지 : </label>
          <StTextarea
            type="text"
            id="letterContent"
            placeholder="응원 메시지를 적어주세요!"
            value={letterContent}
            onChange={(e) => setLetterContent(e.target.value.trimStart())}
            required
          />
        </StDivForLetterContent>

        <span>
          <label htmlFor="toWhom">누구에게 보내는 메시지인가요?</label>&nbsp;
          <select
            onChange={memberSelectHndlr}
            value={selmem}
            name=""
            id="toWhom"
          >
            <option value="ALL">K/DA 전원</option>
            <option value="AKALI">아칼리</option>
            <option value="AHRI">아리</option>
            <option value="EVELYN">이블린</option>
            <option value="KAISA">카이사</option>
          </select>
        </span>
        <ReusableButton>메시지 보내기</ReusableButton>
      </StForm>
    </>
  );
}

//styled-components
const StForm = styled.form`
  border: 3px solid #914bad;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;

  padding: 10px;
  gap: 10px;
  color: white;
  backdrop-filter: blur(8px);

  button {
    padding: 0.7rem;
    color: white;
    background-color: #734bad;
    font-weight: 600;
  }
`;
const StTextarea = styled.textarea`
  width: 500px;
  height: 3rem;
  resize: none;
`;
const StDivForLetterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default SubmitLetter;
