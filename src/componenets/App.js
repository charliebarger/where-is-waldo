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
  const [parasites, setParasites] = useState([]);
  //opens and closes sliding Nav
  const [closed, setClosed] = useState(false);

  //States that hold values that will be added to database after the game is completed
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const addPlayerToDatabase = async (id, user, start, stop) => {
    await setDoc(doc(db, "players", id), {
      username: user,
      startTime: start,
      stopTime: stop,
    });
  };

  const resetGame = () => {
    getParasites().then((result) => setParasites(result));
    setUsername("");
    setId("");
  };

  //check if a all characters are found, if they are prompt player to enter username
  useEffect(() => {
    if (parasites.every((parasite) => parasite.found)) {
      setSlide(3);
    }
  }, [parasites]);

  // slides represent where the player is in the game. Slide = 1 (Intro Pop up), Slide = 2 (Pop Up with start game button), Slide = falsy (The game is active), Slide = 3 (Player Found all characters and is prompted to enter username), slide = 4 (The Game is over, the player entered their usename and their info will be submitted to database)
  useEffect(() => {
    switch (slide) {
      case 1:
        //start game
        resetGame();
        break;
      case 2:
        //purely a visual change
        break;
      case 3:
        //record when game ended
        setEndTime(Timestamp.now());
        break;
      case 4:
        //player entered username, now add to database
        addPlayerToDatabase(id, username, startTime, endTime);
        break;
      default:
        //default is when case is falsy (the game becomes active)
        setId(uniqid());
        setStartTime(Timestamp.now());
        break;
    }
  }, [slide]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GolbalStyles />
        <Header
          slide={slide}
          setSlide={setSlide}
          closed={closed}
          setClosed={setClosed}
        />
        <GameBody
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
