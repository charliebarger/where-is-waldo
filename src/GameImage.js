import React from "react";
import background from "./assets/background.png";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
  cursor: url(https://cdn.custom-cursor.com/db/cursor/32/rick_and_morty_rick_sanchez_laser_gun_cursor.png),
    default !important;
`;
const GameImage = () => {
  return (
    <div>
      <StyledImage
        alt="Rick and Morty Themed Where's Waldo Styled"
        src={background}
      />
    </div>
  );
};

export default GameImage;
