import React, { useEffect, useState } from "react";
import getParasites from "../../assets/helpers/retrieveData";
import GameImage from "./GameImage";
import styled from "styled-components";
import PopUpWrapper from "../pop-ups/PopUpWindow";
// import amishCyborgCloseUp from "../../assets/parasites/amishCyborgCloseUp.png";
// import ghostInAJar from "../../assets/parasites/ghostInAJar.png";
// import reverseGiraffeCloseUp from "../../assets/parasites/reverseGiraffeCloseUp.png";
import SideCharacters from "./SideCharacters";
// import amishCyborg from "../../assets/parasites/amishCyborg.png";
// import reverseGiraffe from "../../assets/parasites/reverseGiraffe.png";
import TurnPhone from "./TurnPhone";
import HighScores from "./HighScores";
import { Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emojiRick from "../../assets/rickEmoji.png";

const Body = styled.div`
  padding-bottom: 40px;
  overflow-x: hidden;
  width: 100%;
  min-height: calc(100vh - 100px);
  position: relative;
  z-index: 0;
`;

const WrongAlert = styled(ToastContainer)`
  position: absolute;
  top: 10px;
  * {
    color: red;
  }
  .Toastify__progress-bar {
    background: red;
  }
  @media ${({ theme }) => theme.mediaQueries.below700} {
    width: 250px;
  }
  @media ${({ theme }) => theme.mediaQueries.below550} {
    width: 200px;
  }
`;

// const ImageMatch =

const GameBody = ({
  slide,
  setSlide,
  setClosed,
  parasites,
  setParasites,
  username,
  setUsername,
}) => {
  const [turnPhoneAlert, setTurnPhoneAlert] = useState(false);
  const [Xclicked, setXclicked] = useState(false);
  const [showMagnify, setShowMagnify] = useState(false);

  console.log(username);
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
      setShowMagnify(false);
      setParasites(
        parasites.map((parasite) =>
          getHitStatus(cords, getArea(parasite.cords))
            ? { ...parasite, found: true }
            : parasite
        )
      );
    } else {
      toast("Thats Wrong Bruh", {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
  };

  return (
    <Body onClick={() => setClosed(false)}>
      {parasites && (
        <Switch>
          <Route exact path="/">
            {turnPhoneAlert && <TurnPhone setClose={setXclicked}></TurnPhone>}
            <SideCharacters slide={slide} parasites={parasites} />
            <GameImage
              setSlide={setSlide}
              showMagnify={showMagnify}
              setShowMagnify={setShowMagnify}
              slide={slide}
              checkForHit={findHitItem}
              parasites={parasites}
            />
            <PopUpWrapper
              slide={slide}
              setSlide={setSlide}
              username={username}
              setUsername={setUsername}
            ></PopUpWrapper>
          </Route>
          <Route path="/high-scores">
            <HighScores
              slide={slide}
              setSlide={setSlide}
              username={username}
              setUsername={setUsername}
            ></HighScores>
          </Route>
        </Switch>
      )}
      <WrongAlert icon={<img alt="emoji of rick" src={emojiRick} />} />
    </Body>
  );
};

export default GameBody;
