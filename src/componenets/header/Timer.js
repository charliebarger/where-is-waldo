import React from "react";
import styled, { css } from "styled-components";

const StyledTimer = styled.span`
  &&& {
    cursor: default;
  }
  box-shadow: 1px 1px 10px ${({ theme }) => theme.colors.green};
  cursor: default;
  background: black;
  color: white;
  font-family: "Gemunu Libre", sans-serif;
  font-size: 26px;
  margin-right: 50px;
  border: ${({ theme }) => theme.colors.blue} solid 2px;
  padding: 5px 10px;
  border-radius: 10px;
  @media ${({ theme }) => theme.mediaQueries.below850} {
    margin-right: 30px;
  }
  @media ${({ theme }) => theme.mediaQueries.below550} {
    font-size: 22px;
  }
  @media ${({ theme }) => theme.mediaQueries.below400} {
    font-size: 16px;
    margin-right: 30px;
  }
  ${({ finished }) =>
    finished &&
    css`
      margin: 0px !important;
      margin-left: 5px !important;
      color: #e73f40;
      box-shadow: 2px 2px 5px black;
      border: white solid 2px;
      font-size: 24px;
    `}
`;

const Timer = ({ children, finished }) => {
  return <StyledTimer finished={finished}>{children}</StyledTimer>;
};

export default Timer;
