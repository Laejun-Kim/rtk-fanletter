import SubmitLetter from "components/SubmitLetter";
import React from "react";
import styled from "styled-components";
import Letters from "components/Letters";
import Wrapper from "components/UI/Wrapper";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const StHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 900px;
  height: 100%;
  padding: 10px;
  min-width: 700px;
  margin: auto;
`;

function Home() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  //로그인 안한사람 로그인 페이지로 상냥하게 이동
  if (!isLoggedIn) {
    toast.warn(
      `로그인 하고 이용해 주세요.
       4초뒤 로그인 페이지로 리디렉션 합니다`,
      {
        position: "top-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
    setTimeout(() => {
      navigate("login");
    }, 4000);
  }

  return (
    <Wrapper>
      <StHomeContainer>
        <SubmitLetter />
        <Letters />
      </StHomeContainer>
    </Wrapper>
  );
}

export default Home;
