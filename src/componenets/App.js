import React, { useState, useEffect } from "react";
import GolbalStyles from "../styles/globalStyles";
import Header from "./header/Header";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";
import GameBody from "./body/GameBody";
import { HashRouter as Router } from "react-router-dom";
import getParasites from "../assets/helpers/retrieveData";
import {
  collection,
  addDoc,
  doc,
  query,
  getDocs,
  Doc,
  Timestamp,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import db from "./firebase.config";
import uniqid from "uniqid";

function App() {
  const [slide, setSlide] = useState(1);
  const [closed, setClosed] = useState(false);
  const [parasites, setParasites] = useState();
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [finished, setFinished] = useState(false);
  console.log(slide);
  const initializeGame = async (id, user, start, stop) => {
    await setDoc(doc(db, "players", id), {
      username: user,
      startTime: start,
      stopTime: stop,
    });
  };

  const addUsername = async (userName) => {
    const field = await doc(db, "players", id);
    await updateDoc(field, {
      username: userName,
    });
  };

  const deleteGameInstance = async (idCode, user) => {
    if (!user && id) {
      await deleteDoc(doc(db, "players", idCode));
    }
  };

  // const addStartTime = async () => {
  //   const field = await doc(db, "players", id);
  //   await updateDoc(field, {
  //     startTime: Timestamp.now(),
  //   });
  // };

  const addEndTime = async () => {
    const field = await doc(db, "players", id);
    await updateDoc(field, {
      endTime: Timestamp.now(),
    });
  };
  useEffect(() => {
    if (parasites && parasites.every((parasite) => parasite.found)) {
      setSlide(3);
    }
  }, [parasites, setSlide]);

  useEffect(() => {
    if (slide === 1) {
      deleteGameInstance(id, username);
      getParasites().then((result) => setParasites(result));
      //reset username
      setUsername("");
      setId("");
    }
    if (!slide) {
      setId(uniqid());
      setStartTime(Timestamp.now());
      // addStartTime();
      // addUsername(false);
    }
    if (slide === 3) {
      setEndTime(Timestamp.now());
    }
    if (slide === 4) {
      initializeGame(id, username, startTime, endTime);
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
          setFinished={setFinished}
          id={id}
          slide={slide}
          setSlide={setSlide}
          setClosed={setClosed}
          parasites={parasites}
          setParasites={setParasites}
          username={username}
          setUsername={setUsername}
          addUsername={addUsername}
        />
      </ThemeProvider>
    </Router>
  );
}

export default App;
