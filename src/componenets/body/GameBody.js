import React, { useEffect, useState } from "react";
import GameImage from "./GameImage";
import styled from "styled-components";
import PopUpWrapper from "../pop-ups/PopUpWindow";
import SideCharacters from "./SideCharacters";
import TurnPhone from "./TurnPhone";
import HighScores from "./HighScores";
import { Switch, Route } from "react-router-dom";
const Body = styled.div`
  padding-bottom: 40px;
  overflow-x: hidden;
  width: 100%;
  min-height: calc(100vh - 100px);
  position: relative;
  z-index: 0;
`;

const GameBody = ({ slide, setSlide, setClosed }) => {
  const [turnPhoneAlert, setTurnPhoneAlert] = useState(false);
  const [Xclicked, setXclicked] = useState(false);
  const [parasites, setParasites] = useState([
    { x: 2.7, y: 56.95, name: "amishCyborg", found: false },
    { x: 45, y: 53.5, name: "ghostInaJar", found: false },
    { x: 73, y: 73.95, name: "reverseGiraffe", found: false },
  ]);
  console.log("again");
  const closePopUp = (width) => {
    if (width < 400 && !Xclicked) {
      setTurnPhoneAlert(true);
    } else {
      setTurnPhoneAlert(false);
    }
  };

  useEffect(() => {
    closePopUp(window.screen.width);
    window.addEventListener("resize", (e) => closePopUp(e.target.innerWidth));
  }, [Xclicked]);

  const getArea = (cords) => {
    return {
      top: cords.y + 5,
      bottom: cords.y - 5,
      left: cords.x - 5,
      right: cords.x + 5,
    };
  };

  const getHitStatus = (cords, parasite) => {
    return cords.y < parasite.top &&
      cords.y > parasite.bottom &&
      cords.x < parasite.right &&
      cords.x > parasite.left
      ? true
      : false;
  };

  const findHitItem = (cords) => {
    if (
      parasites.some(
        (parasite) => getHitStatus(cords, getArea(parasite)) && !parasite.found
      )
    ) {
      setParasites(
        parasites.map((parasite) =>
          getHitStatus(cords, getArea(parasite))
            ? { ...parasite, found: true }
            : parasite
        )
      );
    }
  };

  return (
    <Body onClick={() => setClosed(false)}>
      <Switch>
        <Route exact path="/">
          {turnPhoneAlert && <TurnPhone setClose={setXclicked}></TurnPhone>}
          <SideCharacters slide={slide} />
          <GameImage slide={slide} checkForHit={findHitItem} />
          <PopUpWrapper slide={slide} setSlide={setSlide}></PopUpWrapper>
        </Route>
        <Route path="/high-scores">
          <HighScores setSlide={setSlide}></HighScores>
        </Route>
      </Switch>
    </Body>
  );
};

export default GameBody;
