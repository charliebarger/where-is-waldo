import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 5px;
  font-size: 28px;
  width: 200px;
  margin: auto;
  padding: 5px;
  background: white;
  border: ${({ theme }) => theme.colors.yellow} 2px solid;
  box-shadow: 2px 2px 5px black;
  background: linear-gradient(to right, #e73f40 50%, white 50%);
  background-position: right;
  background-size: 200% 100%;
  transition: all 0.5s ease-out;

  &:hover {
    background-position: left;
    color: white;
  }
`;

const Button = ({ children, handleEvent }) => {
  return <StyledButton onClick={handleEvent}>{children}</StyledButton>;
};

export default Button;
