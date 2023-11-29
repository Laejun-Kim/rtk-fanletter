import React from "react";
import styled from "styled-components";
import mainbg from "assets/pic/mainbg.jpg";

const StWrapperForBgDisplay = styled.section`
  background-image: url(${mainbg});
  min-height: 100vh;
  width: 100%;
`;

function Wrapper(props) {
  return <StWrapperForBgDisplay>{props.children}</StWrapperForBgDisplay>;
}

export default Wrapper;
