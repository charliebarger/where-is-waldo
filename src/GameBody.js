import React, { useState, useEffect } from "react";
import GameImage from "./GameImage";
import styled, { css } from "styled-components";
import Intro from "./pop-ups/Intro";
import FindParasites from "./pop-ups/FindParasites";
import arrow from "./assets/arrow.png";
import PopUpWrapper from "./pop-ups/PopUpWrapper";
import amishCyborgCloseUp from "./assets/parasites/amishCyborgCloseUp.png";
import ghostInAJar from "./assets/parasites/ghostInAJar.png";
import reverseGiraffeCloseUp from "./assets/parasites/reverseGiraffeCloseUp.png";
import Parasites from "./pop-ups/Parasite";
const Body = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  position: relative;
  z-index: 0;
`;

const Arrow = styled.div`
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
  ${({ open }) =>
    !open &&
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
  ${({ open }) =>
    !open &&
    css`
      right: 10px;
    `}
`;

const GameBody = () => {
  const [slide, setSlide] = useState(1);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    slide ? setOpen(true) : setOpen(false);
  }, [slide]);

  return (
    <Body>
      <Arrow onClick={() => (!slide ? setOpen(!open) : undefined)} open={open}>
        <img alt="arrow" src={arrow} style={{ background: "none" }} />
      </Arrow>
      <CharacterWrapper open={open}>
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
      <GameImage />
      <PopUpWrapper slide={slide} setSlide={setSlide}></PopUpWrapper>
    </Body>
  );
};

export default GameBody;
