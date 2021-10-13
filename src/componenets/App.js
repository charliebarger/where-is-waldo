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
  console.log(username);

  const initializeGame = async (id) => {
    await setDoc(doc(db, "players", id), {
      username: false,
      startTime: Timestamp.now(),
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
      let newId = uniqid();
      setId(newId);
      initializeGame(newId);
      // addStartTime();
      // addUsername(false);
    }
    if (slide === 3) {
      addEndTime();
    }
  }, [slide]);

  useEffect(() => {
    const cleanup = () => {
      console.log("here");
      deleteGameInstance(id, username);
    };
    window.addEventListener("beforeunload", cleanup);
    return () => {
      window.removeEventListener("beforeunload", cleanup);
    };
  }, []);

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
