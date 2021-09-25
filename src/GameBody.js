import React from "react";
import GameImage from "./GameImage";
import styled from "styled-components";

const Body = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  position: relative;
  z-index: 0;
`;

const PopUp = styled.div`
  border-radius: 20px;
  width: 500px;
  height: 400px;
  background: linear-gradient(
    -45deg,
    ${({ theme }) => theme.colors.blue} 44%,
    ${({ theme }) => theme.colors.green} 95%
  );
  opacity: 0.9;
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 40px auto;
  border: ${({ theme }) => theme.colors.yellow} solid 5px;
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
