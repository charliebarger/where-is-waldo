import React from "react";
import GameImage from "./GameImage";
import styled from "styled-components";
import Intro from "./pop-ups/Intro";
import FindParasites from "./pop-ups/FindParasites";
const Body = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  position: relative;
  z-index: 0;
`;

const GameBody = () => {
  return (
    <Body>
      <GameImage />
      <FindParasites></FindParasites>
    </Body>
  );
};

export default GameBody;
