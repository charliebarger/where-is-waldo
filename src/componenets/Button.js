import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Start Styles

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

//End Styles

const Button = ({ children, handleEvent, linkTo, valid, formId }) => {
  const button = (
    <StyledButton onClick={valid ? handleEvent : undefined} form={formId}>
      {children}
    </StyledButton>
  );
  return (
    <>
      {valid ? (
        <Link style={{ margin: "auto" }} to={linkTo}>
          {button}
        </Link>
      ) : (
        button
      )}
    </>
  );
};

export default Button;
