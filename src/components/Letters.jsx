import React, { useEffect } from "react";
import styled from "styled-components";
import EachLetter from "./EachLetter";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { __setFanLetters } from "../redux/modules/fanLetterSlice";

function Letters() {
  const dispatch = useDispatch();
  //redux
  const chosenMember = useSelector((state) => state.chosenMember.chosenMember);
  const { fanLetters, isLoading } = useSelector((state) => state.fanLetter);
  const { accessToken } = useSelector((state) => state.auth);
  console.log(fanLetters);

  useEffect(() => {
    dispatch(__setFanLetters(accessToken));
  }, []);

  //선택된 멤버에 따라 팬레터를 필터링 하는 로직
  let filteredLetter = [];
  switch (chosenMember) {
    case "ALL":
      filteredLetter = fanLetters || [];
      break;
    case "AKALI":
      filteredLetter = fanLetters.filter(
        (letter) => letter.writedTo === "AKALI"
      );
      break;
    case "AHRI":
      filteredLetter = fanLetters.filter(
        (letter) => letter.writedTo === "AHRI"
      );
      break;
    case "EVELYN":
      filteredLetter = fanLetters.filter(
        (letter) => letter.writedTo === "EVELYN"
      );
      break;
    case "KAISA":
      filteredLetter = fanLetters.filter(
        (letter) => letter.writedTo === "KAISA"
      );
      break;
  }
  console.log("필터링 된 letters", filteredLetter);

  if (isLoading) {
    return (
      <FontAwesomeIcon
        icon={faSpinner}
        style={{ color: "#ffffff", marginTop: "20px" }}
        spin
        size="2xl"
      />
    );
  }

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

//styled-components
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

export default Letters;
