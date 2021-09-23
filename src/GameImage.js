import React from "react";
import background from "./assets/background.png";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
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
