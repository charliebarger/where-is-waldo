import React from "react";
import styled, { css } from "styled-components";
import FindParasites from "./Slide2";
import Intro from "./Slide1";
import Slide3 from "./Slide3";
const Wrapper = styled.div`
  width: 600px;
  height: 400px;
  overflow: hidden;
  z-index: 10;
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  /* margin: 40px auto; */
  position: absolute;
  transition: all 0.25s;
  display: flex;
`;

const TryIT = styled.div`
  display: ${({ slide }) => (slide ? "flex" : "none")};
  justify-content: center;
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 40px auto;
  transform-origin: center top;
  @media ${({ theme }) => theme.mediaQueries.below700} {
    transform: scale(0.8);
  }
  @media ${({ theme }) => theme.mediaQueries.below550} {
    transform: scale(0.6);
  }
  @media ${({ theme }) => theme.mediaQueries.below400} {
    transform: scale(0.45);
  }
`;

const Slides = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 500px;
  position: absolute;
  transition: all 1s;

  ${({ slide }) =>
    slide === 2 &&
    css`
      transform: translateX(calc(-50% - 10px));
    `}
`;
const PopUpWrapper = ({ slide, setSlide }) => {
  console.log("rerender");
  return (
    <TryIT slide={slide}>
      <Wrapper slide={slide}>
        <Slides slide={slide}>
          {slide && slide !== 3 ? (
            <>
              <Intro changeSlide={() => setSlide(2)}></Intro>
              <FindParasites changeSlide={() => setSlide("")}></FindParasites>
            </>
          ) : (
            <Slide3>Yooo</Slide3>
          )}
        </Slides>
      </Wrapper>
    </TryIT>
  );
};

export default PopUpWrapper;
