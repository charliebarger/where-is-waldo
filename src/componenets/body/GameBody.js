import React, { useEffect, useState } from "react";
import GameImage from "./GameImage";
import styled from "styled-components";
import PopUpWrapper from "../pop-ups/PopUpWrapper";
import SideCharacters from "./SideCharacters";
import TurnPhone from "./TurnPhone";
import HighScores from "./HighScores";
import { Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emojiRick from "../../assets/rickEmoji.png";

//Start Styles

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

//End Styles

const GameBody = ({
  slide,
  setSlide,
  setClosed,
  parasites,
  setParasites,
  username,
  setUsername,
  second,
  setIsActive,
}) => {
  const [turnPhoneAlert, setTurnPhoneAlert] = useState(false);
  const [Xclicked, setXclicked] = useState(false);
  const [showMagnify, setShowMagnify] = useState(false);

  //Appends and Removes Pop Up that tells the user to turn their phone based on screen width. If the pop up is exited then dont show agian no matter the screen size
  const closePopUp = (width) => {
    if (width < 400 && !Xclicked) {
      setTurnPhoneAlert(true);
    } else {
      setTurnPhoneAlert(false);
    }
  };

  //closes turn phone pop up on screen resize
  useEffect(() => {
    const checkForClose = (e) => {
      closePopUp(e.target.innerWidth);
    };
    //call on inital render
    closePopUp(window.screen.width);
    //call every time the screen is resized
    window.addEventListener("resize", checkForClose);

    return () => window.removeEventListener("resize", checkForClose);
  }, [Xclicked]);

  //takes a cordinate and returns a 10% radius around that point
  const getArea = (cords) => {
    return {
      top: cords.y + 5,
      bottom: cords.y - 5,
      left: cords.x - 5,
      right: cords.x + 5,
    };
  };

  //check if cords are within an area
  const getHitStatus = (cords, parasite) => {
    return cords.y < parasite.top &&
      cords.y > parasite.bottom &&
      cords.x < parasite.right &&
      cords.x > parasite.left
      ? true
      : false;
  };

  const foundNewCharacter = (parasite, selectedParasite, cords) => {
    return (
      parasite.id === selectedParasite &&
      getHitStatus(cords, getArea(parasite.cords)) &&
      !parasite.found
    );
  };

  const errorMessage = () => {
    return toast("Thats Wrong Bruh", {
      position: "top-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  //takes coordinates and the parasite name that was selected. Check if a new character is found.
  const findHitItem = (cords, selectedParasite) => {
    if (
      parasites.some((parasite) => {
        return foundNewCharacter(parasite, selectedParasite, cords);
      })
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
      errorMessage();
    }
  };

  return (
    <Body onClick={() => setClosed(false)}>
      {parasites && (
        <Switch>
          <Route exact path="/">
            {turnPhoneAlert && (
              <TurnPhone
                setIsActive={setIsActive}
                setClose={setXclicked}
              ></TurnPhone>
            )}
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
              second={second}
              slide={slide}
              setSlide={setSlide}
              username={username}
              setUsername={setUsername}
              parasites={parasites}
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
