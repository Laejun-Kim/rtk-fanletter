import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//styled-components
const StLetterDiv = styled.div`
  display: flex;
  border: 2px solid #8248f6;
  width: 90%;

  margin-top: 10px;
  padding: 10px;
  border-radius: 0px 15px 15px 15px;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  color: white;
  cursor: pointer;

  div {
    width: 100%;
  }

  img {
    width: 70px;
    height: 70px;
    margin-right: 10px;
    border-radius: 100%;
  }
  transition-duration: 0.2s;
  overflow: hidden;

  &:hover {
    scale: 1.05;
  }
`;

const StSpanforTime = styled.span`
  font-size: small;
`;

const StP = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 80%;
  padding-bottom: 5px;
`;

function EachLetter({ letter }) {
  const navigate = useNavigate();
  const letterClickHndlr = () => {
    navigate(`/detail/${letter.id}`);
  };
  return (
    <StLetterDiv onClick={letterClickHndlr}>
      <img src={letter.portrait} alt="" />
      <div>
        <p>By. {letter.username}</p>
        <br />
        <StSpanforTime>{letter.postedTime}</StSpanforTime>
        <br />
        <br />
        <p>To. {letter.foward}</p>
        <br />
        <StP>{letter.text}</StP>
      </div>
    </StLetterDiv>
  );
}

export default EachLetter;
