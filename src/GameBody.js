import React from "react";
import GameImage from "./GameImage";
import styled from "styled-components";
import PopUp from "./PopUp";
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
      <PopUp></PopUp>
    </Body>
  );
};

export default GameBody;
