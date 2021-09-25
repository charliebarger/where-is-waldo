import React from "react";
import styled, { css } from "styled-components";
import rick1 from "./assets/rick1.png";
const StyledPopUp = styled.div`
  border-radius: 20px;
  width: 500px;
  height: 400px;
  background: linear-gradient(
    -45deg,
    rgba(40, 176, 201, 0.9) 44%,
    rgba(50, 205, 50, 0.9) 95%
  );

  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 40px auto;
  border: ${({ theme }) => theme.colors.yellow} solid 5px;
`;

const PopUp = () => {
  return (
    <StyledPopUp>
      <img alt="rick" src={rick1}></img>
    </StyledPopUp>
  );
};

export default PopUp;
