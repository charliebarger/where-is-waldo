import React, { useState, useEffect } from "react";
import GolbalStyles from "../styles/globalStyles";
import Header from "./header/Header";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";
import GameBody from "./body/GameBody";
import { HashRouter as Router } from "react-router-dom";
import getParasites from "../assets/helpers/retrieveData";
import { doc, Timestamp, setDoc } from "firebase/firestore";
import db from "./firebase.config";
import uniqid from "uniqid";

function App() {
  //shows the stage the player is at
  const [slide, setSlide] = useState(1);
  //holds characters the player is trying to find and their information
  const [parasites, setParasites] = useState("");
  //opens and closes sliding Nav
  const [closed, setClosed] = useState(false);

  //States that hold values that will be added to database after the game is completed
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  //
  const [second, setSecond] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function stopTimer() {
    setSecond(0);
    setIsActive(false);
  }

  const addPlayerToDatabase = async (id, user, second) => {
    await setDoc(doc(db, "players", id), {
      username: user,
      time: second,
    });
  };

  useEffect(() => {
    getParasites().then((result) => setParasites(result));
  }, []);

  const resetGame = () => {
    stopTimer();
    parasites.forEach((parasite) => (parasite.found = false));
    setUsername("");
    setId("");
  };

  //check if a all characters are found, if they are prompt player to enter username
  useEffect(() => {
    if (parasites && parasites.every((parasite) => parasite.found)) {
      console.log("all found");
      setSlide(3);
    }
  }, [parasites]);

  // slides represent where the player is in the game. Slide = 1 (Intro Pop up), Slide = 2 (Pop Up with start game button), Slide = falsy (The game is active), Slide = 3 (Player Found all characters and is prompted to enter username), slide = 4 (The Game is over, the player entered their usename and their info will be submitted to database)
  useEffect(() => {
    switch (slide) {
      case 1:
        //start game
        parasites && resetGame();
        break;
      case 2:
        //purely a visual change
        break;
      case 3:
        //record when game ended
        setIsActive(false);
        break;
      case 4:
        //player entered username, now add to database
        addPlayerToDatabase(id, username, second);
        break;
      default:
        //default is when case is falsy (the game becomes active)
        // setSecond(0);
        setIsActive(true);
        setId(uniqid());
        // setStartTime(Timestamp.now());
        break;
    }
  }, [slide]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GolbalStyles />
        <Header
          isActive={isActive}
          setSecond={setSecond}
          second={second}
          slide={slide}
          setSlide={setSlide}
          closed={closed}
          setClosed={setClosed}
        />
        <GameBody
          setIsActive={setIsActive}
          second={second}
          slide={slide}
          setSlide={setSlide}
          setClosed={setClosed}
          parasites={parasites}
          setParasites={setParasites}
          username={username}
          setUsername={setUsername}
        />
      </ThemeProvider>
    </Router>
  );
}

export default App;
