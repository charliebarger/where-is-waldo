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
} from "firebase/firestore";
import db from "./firebase.config";
import uniqid from "uniqid";

function App() {
  const [slide, setSlide] = useState(1);
  const [closed, setClosed] = useState(false);
  const [parasites, setParasites] = useState();
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  console.log(username);

  const initializeGame = async () => {
    await setDoc(doc(db, "players", id), {});
  };
  const addUsername = async (userName) => {
    alert(id);
    const field = await doc(db, "players", id);
    await updateDoc(field, {
      username: userName,
    });
  };

  useEffect(() => {
    if (parasites && parasites.every((parasite) => parasite.found)) {
      setSlide(3);
    }
  }, [parasites, setSlide]);

  useEffect(() => {
    if (slide === 1) {
      getParasites().then((result) => setParasites(result));
      setId(uniqid());
      setUsername("");
    }
  }, [slide]);

  useEffect(() => {
    id && initializeGame();
  }, [id]);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GolbalStyles />
        <Header slide={slide} closed={closed} setClosed={setClosed} />
        <GameBody
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
