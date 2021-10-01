import React from "react";
import GameImage from "./GameImage";
import styled from "styled-components";
import PopUpWrapper from "../pop-ups/PopUpWindow";
import SideCharacters from "./SideCharacters";
const Body = styled.div`
  overflow-x: hidden;
  width: 100%;
  min-height: calc(100vh - 100px);
  position: relative;
  z-index: 0;
`;

const GameBody = ({ slide, setSlide }) => {
  return (
    <Body>
      <SideCharacters slide={slide} />
      <GameImage slide={slide} />
      <PopUpWrapper slide={slide} setSlide={setSlide}></PopUpWrapper>
    </Body>
  );
};

export default GameBody;
