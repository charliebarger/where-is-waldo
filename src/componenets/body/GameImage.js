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
const GameImage = ({ slide }) => {
  const [cords, setCords] = useState("");
  let getCords = (e) => {
    let offSet = e.target.parentElement.parentElement;
    setCords({
      x: ((e.pageX - offSet.offsetLeft - 50) / e.target.width) * 100,
      y: ((e.pageY - offSet.offsetTop - 50) / e.target.height) * 100,
    });
  };

  return (
    <ImageWrapper onClick={getCords}>
      <StyledImage
        slide={slide}
        alt="Rick and Morty Themed Where's Waldo Styled"
        src={background}
      />
      <MagnifyingGlass cords={cords} />
    </ImageWrapper>
  );
};

export default GameImage;
