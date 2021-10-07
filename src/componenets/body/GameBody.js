import React, { useEffect, useState } from "react";
import GameImage from "./GameImage";
import styled from "styled-components";
import PopUpWrapper from "../pop-ups/PopUpWindow";
import amishCyborgCloseUp from "../../assets/parasites/amishCyborgCloseUp.png";
import ghostInAJar from "../../assets/parasites/ghostInAJar.png";
import reverseGiraffeCloseUp from "../../assets/parasites/reverseGiraffeCloseUp.png";
import SideCharacters from "./SideCharacters";
import amishCyborg from "../../assets/parasites/amishCyborg.png";
import reverseGiraffe from "../../assets/parasites/reverseGiraffe.png";
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

const parasiteArray = [
  {
    name: "Amish Cyborg",
    id: "amish",
    found: false,
    cords: { x: 2.7, y: 56.95 },
    closeUp: amishCyborgCloseUp,
    fullBody: amishCyborg,
  },
  {
    name: "Ghost In A Jar",
    id: "ghost",
    found: false,
    cords: { x: 45, y: 53.5 },
    closeUp: ghostInAJar,
    fullBody: ghostInAJar,
  },
  {
    name: "Reverse Giraffe",
    id: "giraffe",
    found: false,
    cords: { x: 73, y: 73.95 },
    closeUp: reverseGiraffeCloseUp,
    fullBody: reverseGiraffe,
  },
];

const GameBody = ({ slide, setSlide, setClosed }) => {
  const [turnPhoneAlert, setTurnPhoneAlert] = useState(false);
  const [Xclicked, setXclicked] = useState(false);
  const [parasites, setParasites] = useState(parasiteArray);
  const closePopUp = (width) => {
    if (width < 400 && !Xclicked) {
      setTurnPhoneAlert(true);
    } else {
      setTurnPhoneAlert(false);
    }
  };

  //closes turn phone pop up on screen resize
  useEffect(() => {
    closePopUp(window.screen.width);
    window.addEventListener("resize", (e) => closePopUp(e.target.innerWidth));
  }, [Xclicked]);

  useEffect(() => {
    if (slide === 1) {
      setParasites(parasiteArray);
    }
  }, [slide]);

  useEffect(() => {
    if (parasites.every((parasite) => parasite.found)) {
      setSlide(3);
    }
  }, [parasites, setSlide]);

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

  const findHitItem = (cords, selectedParasite) => {
    console.log(cords, selectedParasite);
    if (
      parasites.some(
        (parasite) =>
          parasite.id === selectedParasite &&
          getHitStatus(cords, getArea(parasite.cords)) &&
          !parasite.found
      )
    ) {
      setParasites(
        parasites.map((parasite) =>
          getHitStatus(cords, getArea(parasite.cords))
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
          <SideCharacters slide={slide} parasites={parasites} />
          <GameImage
            slide={slide}
            checkForHit={findHitItem}
            parasites={parasites}
          />
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
