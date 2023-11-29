import React from "react";
import styled from "styled-components";
import EachLetter from "./EachLetter";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";

const StLetters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  margin-bottom: 50px;

  > p {
    margin: 20px;
  }
`;

function Letters() {
  //redux
  const chosenMember = useSelector((state) => state.chosenMember.chosenMember);
  const fanLetters = useSelector((state) => state.fanLetter);
  console.log(chosenMember);

  //선택된 멤버에 따라 팬레터를 필터링 하는 로직
  let filteredLetter;
  switch (chosenMember) {
    case "ALL":
      filteredLetter = fanLetters;
      break;
    case "AKALI":
      filteredLetter = fanLetters.filter((letter) => letter.foward === "AKALI");
      break;
    case "AHRI":
      filteredLetter = fanLetters.filter((letter) => letter.foward === "AHRI");
      break;
    case "EVELYN":
      filteredLetter = fanLetters.filter(
        (letter) => letter.foward === "EVELYN"
      );
      break;
    case "KAISA":
      filteredLetter = fanLetters.filter((letter) => letter.foward === "KAISA");
      break;
  }
  console.log(filteredLetter);

  return (
    <StLetters>
      {filteredLetter.length === 0 && (
        <>
          <p>아직 등록된 팬레터가 없어요! 팬레터를 보내볼까요?</p>
          <FontAwesomeIcon
            icon={faFaceSadTear}
            fade
            size="2xl"
            style={{ color: "#7a49b4" }}
          />
        </>
      )}
      {filteredLetter.map((letter) => {
        return <EachLetter key={letter.id} letter={letter} />;
      })}
    </StLetters>
  );
}

export default Letters;
