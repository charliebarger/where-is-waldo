import React from "react";
import background from "../../assets/background.png";
import styled, { css } from "styled-components";

const Tagger = styled.div`
  display: ${({ cords }) => (cords ? "flex" : "none")};
  width: 100px;
  height: 100px;
  box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  position: absolute;
  top: ${({ cords }) => `${cords.y}%`};
  left: ${({ cords }) => `${cords.x}%`};
  border: 4px dashed black;
  z-index: 99;
  border-radius: 100%;
  align-items: center;
  justify-content: center;

  transition: opacity 0.2s;
  background: #ffffff5c;
  &:before {
    border-radius: 100px;
    content: "";
    display: block;
    background: red;
    padding: 4px;
  }
  /* background: url(${background}) no-repeat;
  background-size: 150vw;
  background-position-x: -100px;
  background-position-y: -100px; */
`;

const MagnifyingGlass = ({ cords }) => {
  console.log(cords);
  return <Tagger cords={cords} />;
};

export default MagnifyingGlass;
