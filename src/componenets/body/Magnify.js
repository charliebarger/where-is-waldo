import React from "react";
import background from "../../assets/background.png";
import styled, { css } from "styled-components";

const Tagger = styled.div`
  display: ${({ cords }) => (cords ? "flex" : "none")};
  width: 10vw;
  height: 10vw;
  box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  position: absolute;
  top: calc(${({ cords }) => cords.y}% - 5vw);
  left: calc(${({ cords }) => cords.x}% - 5vw);
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

const MagnifyingGlass = ({ cords, imageSize }) => {
  const parasiteCoords = {
    amishCyborg: { x: 2.7, y: 56.95 },
    ghostInaJar: { x: 45, y: 53.5 },
    reverseGiraffe: { x: 73, y: 73.95 },
  };

  const getArea = (coords) => {
    return {
      top: coords.y + 5,
      bottom: coords.y - 5,
      left: coords.x - 5,
      right: coords.x + 5,
    };
  };

  let area = getArea(parasiteCoords.amishCyborg);
  console.log(cords);
  if (
    cords.y < area.top &&
    cords.y > area.bottom &&
    cords.x < area.right &&
    cords.x > area.left
  ) {
    alert("hit amish cyborg");
  }
  console.log(area);
  return <Tagger cords={cords} />;
};

export default MagnifyingGlass;
