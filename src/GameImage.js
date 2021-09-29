import React from "react";
import background from "./assets/background.png";
import styled from "styled-components";

const StyledImage = styled.img`
  transition: all 1s;
  width: 100%;
  cursor: url(https://cdn.custom-cursor.com/db/cursor/32/rick_and_morty_rick_sanchez_laser_gun_cursor.png),
    default !important;
  filter: ${({ slide }) => (slide ? `blur(10px)` : "none")};
`;
const GameImage = ({ slide }) => {
  return (
    <div>
      <StyledImage
        slide={slide}
        alt="Rick and Morty Themed Where's Waldo Styled"
        src={background}
      />
    </div>
  );
};

export default GameImage;
