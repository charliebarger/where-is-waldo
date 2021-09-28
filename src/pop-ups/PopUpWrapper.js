import React, { useState } from "react";
import styled, { css } from "styled-components";
import FindParasites from "./FindParasites";
import Intro from "./Intro";
const Wrapper = styled.div`
  width: 600px;
  height: 400px;
  overflow: hidden;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 40px auto;
  position: absolute;
`;

const Slides = styled.div`
  display: ${({ slide }) => (slide ? "flex" : "none")};
  gap: 20px;
  margin-right: 500px;
  position: absolute;
  transition: all 2s;

  ${({ slide }) =>
    slide === 2 &&
    css`
      transform: translateX(calc(-50% - 10px));
    `}
`;
const PopUpWrapper = () => {
  const [slide, setSlide] = useState(1);
  console.log("rerender");
  return (
    <Wrapper>
      <Slides slide={slide}>
        <Intro changeSlide={() => setSlide(2)}></Intro>
        <FindParasites changeSlide={() => setSlide("")}></FindParasites>
      </Slides>
    </Wrapper>
  );
};

export default PopUpWrapper;
