import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import amishCyborgCloseUp from "./assets/parasites/amishCyborgCloseUp.png";
import ghostInAJar from "./assets/parasites/ghostInAJar.png";
import reverseGiraffeCloseUp from "./assets/parasites/reverseGiraffeCloseUp.png";
import Parasites from "./pop-ups/Parasite";
import arrow from "./assets/arrow.png";
const Arrow = styled.div`
  cursor: pointer;
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

const SideCharacters = ({ slide }) => {
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    slide ? setClosed(true) : setClosed(false);
  }, [slide]);

  return (
    <>
      <Arrow
        onClick={() => (!slide ? setClosed(!closed) : undefined)}
        closed={closed}
      >
        <img alt="arrow" src={arrow} style={{ background: "none" }} />
      </Arrow>
      <CharacterWrapper closed={closed}>
        <Parasites
          header
          parasiteName="Amish Cyborg"
          imgSource={amishCyborgCloseUp}
        />
        <Parasites
          header
          parasiteName="Ghost In A Jar"
          imgSource={ghostInAJar}
        />
        <Parasites
          header
          parasiteName="Reverse Giraffe"
          imgSource={reverseGiraffeCloseUp}
        />
      </CharacterWrapper>
    </>
  );
};

export default SideCharacters;
