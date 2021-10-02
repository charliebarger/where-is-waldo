import React, { useEffect, useState } from "react";
import GameImage from "./GameImage";
import styled from "styled-components";
import PopUpWrapper from "../pop-ups/PopUpWindow";
import SideCharacters from "./SideCharacters";
import TurnPhone from "./TurnPhone";
import HighScores from "./HighScores";
const Body = styled.div`
  overflow-x: hidden;
  width: 100%;
  min-height: calc(100vh - 100px);
  position: relative;
  z-index: 0;
`;

const GameBody = ({ slide, setSlide }) => {
  const [turnPhoneAlert, setTurnPhoneAlert] = useState(false);
  const [Xclicked, setXclicked] = useState(false);

  const closePopUp = (width) => {
    if (width < 400 && !Xclicked) {
      setTurnPhoneAlert(true);
    } else {
      setTurnPhoneAlert(false);
    }
  };
  useEffect(() => {
    closePopUp(window.screen.width);
    console.log("hi");
    window.addEventListener("resize", (e) => closePopUp(e.target.innerWidth));
  }, [Xclicked]);

  return (
    <Body>
      {/* {turnPhoneAlert && <TurnPhone setClose={setXclicked}></TurnPhone>}
      <SideCharacters slide={slide} />
      <GameImage slide={slide} />
      <PopUpWrapper slide={slide} setSlide={setSlide}></PopUpWrapper> */}
      <HighScores></HighScores>
    </Body>
  );
};

export default GameBody;
