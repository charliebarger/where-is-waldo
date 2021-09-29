import React from "react";
import styled from "styled-components";

const StyledTimer = styled.span`
  box-shadow: 1px 1px 10px ${({ theme }) => theme.colors.green};
  cursor: default;
  color: white;
  font-family: "Gemunu Libre", sans-serif;
  font-size: 26px;
  margin-right: 50px;
  border: ${({ theme }) => theme.colors.blue} solid 2px;
  padding: 5px 10px;
  border-radius: 10px;
`;

const Timer = ({ children }) => {
  return <StyledTimer>{children}</StyledTimer>;
};

export default Timer;
