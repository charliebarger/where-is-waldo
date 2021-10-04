import React from "react";
import background from "../../assets/background.png";
import styled, { css } from "styled-components";

const Tagger = styled.div`
  background: url(${background}) no-repeat;
  width: 100px;
  height: 100px;
  box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  position: absolute;
  top: ${({ cords }) => `${cords.y}px`};
  left: ${({ cords }) => `${cords.x}px`};
  border: 4px solid #efefef;
  z-index: 99;
  border-radius: 100%;
  display: block;
  transition: opacity 0.2s;
  background-size: 150vw;
  background-position-x: -100px;
  background-position-y: -100px;
`;

const MagnifyingGlass = ({ cords }) => {
  return <Tagger cords={cords} />;
};

export default MagnifyingGlass;
