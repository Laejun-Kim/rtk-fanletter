import React from "react";
import styled from "styled-components";

const StBtn = styled.button`
  //어디에서도 크게 문제되지 않을 디자인만 설정, 세부디자인은 각 컴포넌트에서!!
  border-radius: 10px;
  border-color: transparent;
  box-shadow: 3px 3px 3px black;
  margin-bottom: 5px;
  cursor: pointer;
  transition-duration: 0.2s;
  &:active {
    scale: 0.9;
    box-shadow: none;
  }
`;

function ReusableButton(props) {
  return <StBtn onClick={props.onClick}>{props.children}</StBtn>;
}

export default ReusableButton;
