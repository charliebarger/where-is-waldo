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
  setDoc,
  doc,
  query,
  getDocs,
  addDoc,
} from "firebase/firestore";
import db from "./firebase.config";

function App() {
  const [slide, setSlide] = useState(1);
  const [closed, setClosed] = useState(false);
  const [parasites, setParasites] = useState();
  const [username, setUsername] = useState("");
  console.log(username);
  const addUsername = async (userName) => {
    try {
      await addDoc(collection(db, "players", "hi"));
    } catch (e) {
      console.error("Error adding username", e);
    }
  };

  useEffect(() => {
    if (parasites && parasites.every((parasite) => parasite.found)) {
      setSlide(1);
    }
  }, [parasites, setSlide]);

  useEffect(() => {
    if (slide) {
      getParasites().then((result) => setParasites(result));
    }
  }, [slide]);
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
