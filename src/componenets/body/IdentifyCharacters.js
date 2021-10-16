import React from "react";
import styled, { css } from "styled-components";
import uniqid from "uniqid";
//Start Styles

const NameWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: calc(${({ cords }) => cords.y}% - 57.5px);
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;

  //Click on left side of screen
  ${({ cords }) =>
    cords.x < 50 &&
    css`
      transform-origin: 0%;
      left: calc(${({ cords }) => cords.x}% + 5vw + 10px);
    `}

  //Click on right side of screen
  ${({ cords }) =>
    cords.x > 50 &&
    css`
      transform-origin: 100%;
      left: calc(${({ cords }) => cords.x}% - 145px - 5vw);
    `}

  //Click on  Top 20% of screen
    ${({ cords }) =>
    cords.y < 20 &&
    css`
      transform-origin: 50% 0%;
      left: calc(${({ cords }) => cords.x}% - 67.5px);
      top: calc(${({ cords }) => cords.y}% + 5vw + 10px);
      //Click on Top 20% of screen and Left 20% of screen
      ${({ cords }) =>
        cords.x < 20 &&
        css`
          transform-origin: 0% 0%;
          left: calc(${({ cords }) => cords.x}% + 10px);
        `}
      //Click on Top 20% of screen and Right 20% of screen 
      ${({ cords }) =>
        cords.x > 80 &&
        css`
          transform-origin: 100% 0%;
          left: calc(${({ cords }) => cords.x}% - 145px);
        `}
    `}

    //Click on  Bottom 20% of screen
    ${({ cords }) =>
    cords.y > 80 &&
    css`
      transform-origin: 50% 100%;
      left: calc(${({ cords }) => cords.x}% - 67.5px);
      top: calc(${({ cords }) => cords.y}% - 122px - 5vw);
      //Click on Bottom 20% of screen and Left 20% of screen
      ${({ cords }) =>
        cords.x < 20 &&
        css`
          transform-origin: 0% 100%;
          left: calc(${({ cords }) => cords.x}% + 10px);
        `}
      //Click on Bottom 20% of screen and Right 20% of screen 
      ${({ cords }) =>
        cords.x > 80 &&
        css`
          transform-origin: 100% 100%;
          left: calc(${({ cords }) => cords.x}% - 145px);
        `}
    `}
     @media ${({ theme }) => theme.mediaQueries.below550} {
    transform: scale(0.7);
  }
`;

const SelectParasite = styled.span`
  white-space: nowrap;
  cursor: pointer;
  border: ${({ theme }) => theme.colors.blue} solid 2px;
  text-align: center;
  font-size: 18px;
  padding: 5px;
  color: white;
  background: black;
  border-radius: 10px;
  &:hover {
    transform: scale(1.1);
  }
  ${({ found }) =>
    found &&
    css`
      border: red solid 2px;
      text-decoration: line-through;
      &:hover {
        transform: scale(1);
      }
    `}
`;

//End Styles

const IdentifyCharacters = ({ cords, parasites, checkForHit }) => {
  return (
    <NameWrapper cords={cords}>
      {parasites.map((parasite) => (
        <SelectParasite
          key={uniqid()}
          found={parasite.found}
          onClick={
            !parasite.found ? () => checkForHit(cords, parasite.id) : undefined
          }
        >
          {parasite.name}
        </SelectParasite>
      ))}
    </NameWrapper>
  );
};

export default IdentifyCharacters;
