import React from "react";
import styled, { css } from "styled-components";
import IdentifyCharacters from "./IdentifyCharacters";
const Tagger = styled.div`
  box-shadow: 2px 2px 12px 7px black;
  position: absolute;
  z-index: 1;
  top: calc(${({ cords }) => cords.y}% - 5vw);
  left: calc(${({ cords }) => cords.x}% - 5vw);
  display: flex;
  display: flex;
  width: 10vw;
  height: 10vw;

  pointer-events: none;
  border: 4px dashed black;
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
`;

const MagnifyingGlass = ({ cords, parasites }) => {
  return (
    <>
      <Tagger cords={cords} />
      <IdentifyCharacters cords={cords} parasites={parasites} />
    </>
  );
};

export default MagnifyingGlass;
