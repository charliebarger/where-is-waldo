import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Parasites from "../pop-ups/Parasite";
import arrow from "../../assets/images/arrow.png";
import uniqid from "uniqid";
// Start Styles

const Arrow = styled.div`
  cursor: ${({ slide }) => (slide ? "default" : "pointer")};
  /* position: absolute; */
  position: absolute;
  padding: 5px;
  height: 40px;
  width: 50px;
  right: -10px;
  top: 20px;
  border-radius: 10px;
  background: white;
  transition: all 1s ease-in-out;
  z-index: 5;
  * {
    transition: all 0.5s ease-in-out;
  }
  ${({ closed }) =>
    !closed &&
    css`
      * {
        transform: rotate(180deg);
      }
    `}
`;

const CharacterWrapper = styled.div`
  padding-bottom: 50px;
  margin-left: auto;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  top: 80px;
  right: -100px;
  transition: all 0.5s ease-in-out;
  ${({ closed }) =>
    !closed &&
    css`
      right: 10px;
    `}
`;

// End Styles

const SideCharacters = ({ slide, parasites }) => {
  const [closed, setClosed] = useState(true);

  //open characters during game, close otherwise
  useEffect(() => {
    slide ? setClosed(true) : setClosed(false);
  }, [slide]);

  return (
    <>
      <Arrow
        slide={slide}
        onClick={() => (!slide ? setClosed(!closed) : undefined)}
        closed={closed}
      >
        <img alt="arrow" src={arrow} style={{ background: "none" }} />
      </Arrow>
      <CharacterWrapper closed={closed}>
        {parasites.map((parasite) => {
          return (
            <Parasites
              key={uniqid()}
              header
              parasiteName={parasite.name}
              imgSource={parasite["closeUp"]}
              found={parasite.found}
            />
          );
        })}
      </CharacterWrapper>
    </>
  );
};

export default SideCharacters;
