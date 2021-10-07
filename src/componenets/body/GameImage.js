import React, { useState } from "react";
import background from "../../assets/background.png";
import styled, { css } from "styled-components";
import MagnifyingGlass from "./Magnify";

const ImageWrapper = styled.div`
  position: relative;
`;

const StyledImage = styled.img`
  transition: all 1s;
  width: 100%;
  ${({ slide }) =>
    slide &&
    css`
      cursor: defualt;
      filter: blur(10px);
    `}
  ${({ slide }) =>
    !slide &&
    css`
      cursor: url(https://cdn.custom-cursor.com/db/cursor/32/rick_and_morty_rick_sanchez_laser_gun_cursor.png),
        default !important;
    `}
`;
const GameImage = ({ slide, checkForHit }) => {
  const [cords, setCords] = useState("");

  let getCords = (e) => {
    const imageSize = e.target.getBoundingClientRect();
    let offSet = e.target.parentElement.parentElement;
    const xCord = ((e.pageX - offSet.offsetLeft) / imageSize.width) * 100;
    const yCord = ((e.pageY - offSet.offsetTop) / imageSize.height) * 100;
    checkForHit({ x: xCord, y: yCord });
    setCords({
      x: xCord,
      y: yCord,
    });
  };

  return (
    <ImageWrapper>
      <StyledImage
        onClick={getCords}
        slide={slide}
        alt="Rick and Morty Themed Where's Waldo Styled"
        src={background}
      />
      {!slide && <MagnifyingGlass cords={cords} />}
    </ImageWrapper>
  );
};

export default GameImage;
